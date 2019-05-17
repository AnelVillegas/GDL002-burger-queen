import React from 'react';

import {Breakfast} from './Breakfast.json'


const MenuBreakfast = (props) => (
    <div className ="main-content">
      <div className= "container">
        <h2> MENU DESAYUNO</h2>
         <div className="card">
           <div className="card-header">
            MENU
           </div>
           {Breakfast.map((menuDetail, index) =>
            <ul className="list-group list-group-flush" key={index}>
            <button className="list-group-item">
                <h5 className="card-title">{menuDetail.Name}</h5>
                <p className="card-text">{menuDetail.Price}</p>
            </button>
        </ul>
            )
        }
         </div>
      </div>
    </div>
);


export default MenuBreakfast;
