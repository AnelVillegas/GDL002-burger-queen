import React, {Fragment, Component} from 'react';
import firebase from '../firebase/startFb';
import ClientName from './ClientName';
import Order from './Order';

class showLunchMenu extends Component  {
  constructor () {
    super()
    this.state = {
      Breakfast:[],
      Lunch: [],
      orders:[],
      total: 0,
    };
    this.submit = this.submit.bind(this);
    this.sumOrder = this.sumOrder.bind(this);
  };

  componentDidMount(){
    const LunchRef = firebase.database().ref('Lunch');
    LunchRef.on('value',(snapshot)=>{
      let Lunch1 = snapshot.val();
      let newStateLunch = [];
      for (let Lunch2 in Lunch1){
        newStateLunch.push({
          id:Lunch2,
          Name:Lunch1[Lunch2].Name,
          Options:Lunch1[Lunch2].Options,
          Price:Lunch1[Lunch2].Price
        });
      }
      this.setState({
        Lunch: newStateLunch
      });
    });
  }
  submit (item, price){
    const order={
      item:item,
      price: price
    }
    this.setState({
        orders:[...this.state.orders,order]
    },() => this.sumOrder())
 }

 sumOrder (){
   const priceArr =  this.state.orders.map ((el)=>el.price)
   const items = priceArr.reduce((sum,result)=>{
     return sum + result;
   });
   this.setState ({
     total:items
   });
 };

  render() {
  return (
   
      <div className="row no-gutters">
      <ClientName/>
        <div className="col">
         <br/>
         <h5 className="card-title">Comida/Cena</h5>
          <br/>
          <br/> 
          <Fragment>{this.state.Lunch.map((menuDetail,i) =>
           
            <div key={i} className="list-group list-group-flush col mt-4">
           
             <button className="list-group-item left d-flex justify-content-between align-items-center col-md-8" onClick={()=>{
                this.submit(menuDetail.Name, menuDetail.Price);
              }} type="submit">
            <ul>
              <p className="card-text-center">
                <div>
                
                  <p className="card-text"> {menuDetail.Name} {"$" +menuDetail.Price}</p>
                </div>
              </p>
            </ul>
       
             </button>
            </div>
               
         )}

        </Fragment>
      </div>  
      <div className="col">
              <br/>
            <h5 className="card-title">Orden</h5>
              <br/>
              <br/>
              <ul className="card-body-right col-md-12">
               <Order className="card-body-right col-md-8" menuList={this.state.orders}/>
              </ul>
              <p className="card-body-right col-md-8" >{"Total" + "$" + this.state.total}</p>
            
           </div>
       </div> 
    
  )    
  
 
     
}
}






export default showLunchMenu;
