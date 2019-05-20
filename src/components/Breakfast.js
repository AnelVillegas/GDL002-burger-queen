import React, { Fragment } from 'react';

import {Breakfast} from './Breakfast.json'
import ClientName from './ClientName'

const MenuBreakfast = (props) => {

  return ( 
 
    <div class="row no-gutters">
    <ClientName/>
    <div class="col-md-8">
    <br/>
    <h5 class="card-title">{props.title}</h5>
     <br/>
    <br/>
    <Fragment >{Breakfast.map((menuDetail) =>{
      return (
      <button className="card-body-center card col-md-4">
    
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

    // <div className ="main-content">
    //   <div className= "container">
    //     <h2 className="title"> {props.title}</h2>
    //      <div className="card">
    //        {Breakfast.map((menuDetail, index) =>
    //         <ul className="list-group list-group-flush" key={index}>
    //         <button className="list-group-item">
    //             <h5 className="card-title">{menuDetail.Name}</h5>
    //             <p className="card-text">{menuDetail.Price}</p>
    //         </button>
    //     </ul>
    //         )
    //     }
    //      </div>
    //   </div>
    // </div>
// );


export default MenuBreakfast;
