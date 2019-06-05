
import React, { Fragment, Component } from 'react';

import firebase from '../firebase/startFb';
import ClientName from './ClientName';
import Order from './Order';
import BtnToKitchen from './BtnToKitchen';

class showBreakfastMenu extends Component  {
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
    this.deleteItem=this.deleteItem.bind(this);
  };
  
  componentDidMount(){
    const BreakfastRef = firebase.database().ref('Breakfast');
    BreakfastRef.on('value',(snapshot)=>{
      let Breakfast1 = snapshot.val();
      let newStateBreakfast = [];
      for (let Breakfast2 in Breakfast1){
        newStateBreakfast.push({
          id:Breakfast2,
          Name:Breakfast1[Breakfast2].Name,
          Options:Breakfast1[Breakfast2].Options,
          Price:Breakfast1[Breakfast2].Price
        });
      }
      this.setState({
        Breakfast: newStateBreakfast
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

  };

  deleteItem(e,menu){
    e.preventDefault(e)
    this.setState(prevState => ({
      orders: prevState.orders.filter(element=> element !==menu)
    }))
  } 
  

  sumOrder (){
    const priceArr =  this.state.orders.map ((el)=>el.price)
    const items = priceArr.reduce((sum,result)=>{
      return sum + result;
    });
    this.setState ({
      total: items
    });
  }




  render() {
  return ( 
     
        <div className="row no-gutters">
        <ClientName/>
          <div className="col">
         
            <br/>
            <h5 className="card-title">Desayuno</h5>
            <br/>
            <br/>
            <Fragment >{this.state.Breakfast.map((menuDetail,i) =>

              <div key={i} className="list-group list-group-flush col mt-4">
              <button className="list-group-item left d-flex justify-content-between align-items-center col-md-8" onClick={()=>{
                this.submit(menuDetail.Name, menuDetail.Price);
              }}>
            
                    <ul>
                      <div className="card-text-center">
                        <div>
                          
                          <p className="card-text">{menuDetail.Name} {"$"+menuDetail.Price} </p>
                         
                          
                        </div>
                      </div>
                    </ul>

              </button>
              </div>
              )      
              
              
            }
                
            </Fragment>
            </div>
            
            <div className="col">
              <br/>
            <h5 className="card-title">Orden</h5>
              <br/>
              <br/>
              <ul className="card-body-right col-md-12">
               <Order className="card-body-right col-md-8" menuList={this.state.orders} clickDelete={this.deleteItem}/>
              </ul>
              <p className="card-body-right col-md-8" >{"Total" + "$" + this.state.total}</p>
            {/*<div onClick = { this.sumOrder}>Total: ${this.state.total} </div>*/}
            
            <div className="col bg-transparent">
              
             </div> 
             {console.log(this.state.orders)}
              <BtnToKitchen order={this.state.orders} />

            </div>
           </div>
          
       
   
  )
 }
}



export default showBreakfastMenu;
