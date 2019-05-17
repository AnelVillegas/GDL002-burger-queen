import React from 'react';

import {Lunch} from './Lunch.json'


  const MenuLunch = (props) => (
    <div className ="main-content">
      <div className= "container">
        <h2> MENU DESAYUNO</h2>
         <div className="card">
           <div className="card-header">
            MENU
           </div>
           {Lunch.map((menuDetail, index) =>
            <ul className="list-group list-group-flush mt-4" key={index}>
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


export default MenuLunch;
