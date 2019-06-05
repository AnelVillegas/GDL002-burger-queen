import React, {Fragment} from 'react';
import firebase from "../firebase/startFb";

class Kitchen extends React.Component{

  constructor () {
    super()
    this.state = {
    chefOrders:[] //ordenes que llegan a la cocina para preparar
    }
  }

  componentWillMount(){ // este comoponente se ejcuta después del render, usa datos que extrae del render.
     
     function snapshotToArray (snapshot) {
       let orders =[] //se guardan los arrays de las ordenes de la iteración del sanpshot 
      
       snapshot.forEach(order => { //para sacar las ordenes en arrays distintos 
         const items = order.val();
         items.key = order.key;

         orders.push(items) //mete todo lo de items.

       });
       return orders
      }


     const dbFoodOrdersRef = firebase.database ().ref(); //traer firebase
     const foodOrdersRef = dbFoodOrdersRef.child("OrderKitchen/"); //ya tenemos la info 
     foodOrdersRef.on("value", ss=> { //on un metodo firebase para mostrar muchas veces, onace para una vez 
       const ordersForArray = snapshotToArray (ss);
       this.setState ({
         chefOrders: ordersForArray
       })

     })

  }

  render() {

    return(  
  <Fragment>
    <h2 className= "title">ORDENES POR PREPARAR</h2>
<div className="card">
  {this.state.chefOrders.map ((order,i)=>  
  <div>
    <div className="card-header">Orden #{i+1}</div>
    {order.map ((item,i)=>
      <div class="card-body">
        <p className="card-text">{item.item}</p>
      </div>
    )}
      <a href="#" class="btn btn-primary">Entregada</a>
  </div>
  )}
  </div>

  </Fragment>
    )

};
}


export default Kitchen;