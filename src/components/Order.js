import React from "react";

export class Order extends React.Component{
    render(){
        const Order = this.props.menuList.map((menu, i) => {
            return(
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center col-md-8">
                    <p>{menu.item}</p>
                        <span>{"$"+ menu.price}</span>
                </li>
            )
        })
        return(
            Order
        )
    }
}

export default Order;