import React, {Fragment} from 'react';


import {Lunch} from './Lunch.json'


 const MenuLunch = (props) => {
  return (
    <div>
    <h5 class="card-title">{props.title}</h5>
    <Fragment>{Lunch.map((menuDetail) =>{
      return (
      <button class="card-body card col-md-4">
            <div>
              <p class="card-text">
                <div>
                  <h5 className="card-title">{menuDetail.Name}</h5>
                  <p className="card-text"> ${menuDetail.Price}</p>
                </div>
              </p>
            </div>
       </button>
       )      
        })}
    </Fragment>
    </div>
  )
      }






export default MenuLunch;
