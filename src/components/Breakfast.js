
import React, { Fragment, Component } from 'react';

import firebase from '../firebase/startFb';
import ClientName from './ClientName';
import Order from './Order';

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
     }, () => this.sumOrder())

  };

  sumOrder (){
    console.log('sumOrder', this.state.total);
    const priceArr =  this.state.orders.map((el)=>el.price)
    const items = priceArr.reduce((sum,result)=>{
      return sum + result;
    }, 0);
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
              
              
            })
                
            </Fragment>
            </div>
            
            <div className="col">
              <br/>
            <h5 className="card-title">Orden</h5>
              <br/>
              <br/>
            <ul className="list-group col-md-12">
              <Order className="card-body-right col-md-8" menuList={this.state.orders}/>
            </ul>
            
            <p>{this.state.total}</p>
            {/*<button onClick = { this.sumOrder}>Total: ${this.state.total} </button>*/}
            <p></p>
           </div>
        </div>
   
  )
 }
}



export default showBreakfastMenu;
