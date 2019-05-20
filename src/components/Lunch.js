import React, {Fragment} from 'react';
import {Lunch} from './Lunch.json';
import ClientName from './ClientName';


 const MenuLunch = (props) => {
  return (
    <div class="row no-gutters">
    <ClientName/>
    <div class="col-md-8">
      <br/>
    <h5 class="card-title">{props.title}</h5>
     <br/>
     <br/> 
    <Fragment>{Lunch.map((menuDetail) =>{
      return (
      <button class="card-body-center card col-md-4">
            <div>
              <p class="card-text-center">
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
    </div>
  )
      }






export default MenuLunch;
