import React from "react";

export class Order extends React.Component{

     deleteItem = (e,i) => {

        this.props.clickDelete(e,i)

     }
    render(){
        const Order = this.props.menuList.map((menu, i) => {
            return(
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center col-md-8">
                    <p>{menu.item}</p>
                        <span>{"$"+ menu.price}</span>
                        <button className="btn btn-outline-danger col-md-1" onClick={(e) => this.deleteItem(e,menu)}>x</button>
                </li>
            )
            })
        return(
            Order
        )
    }
}


export default Order;