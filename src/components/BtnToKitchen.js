import React from  'react';
import firebase from "../firebase/startFb";


export class BtnToKitchen extends React.Component{

    constructor (){
        super()
        this.updateOrderToFirebase = this.updateOrderToFirebase.bind(this);
    }

    updateOrderToFirebase = props => {
        let order = this.props.order; // se trae el estado del boton de enviar orden
        console.log(order)  
        const foodOrderFirebase = firebase.database().ref(); // conecta al servicio de dtabase de firebase
        const foodOrder = foodOrderFirebase.child("OrderKitchen").push(order); 
        return foodOrder;
    }


   render(){
       console.log(this.props)
           return(
              <div>
               <div>
                <button className ="btn btn-outline-danger col-md-8" type="submit" data-toggle="modal" data-target="#exampleModalCenter" onClick={this.updateOrderToFirebase}>Enviar a cocina</button>
                </div>
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Orden enviada exitosamente
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <span aria-hidden="true">&times;</span>
                            
                        </div>
                        </div>
                    </div>
                   </div>
                
                </div>
           )}
}
       




export default BtnToKitchen