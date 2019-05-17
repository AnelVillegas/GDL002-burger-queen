import React from  'react';
import {Link} from 'react-router-dom';

const Button = () => {
   
    return(
        <div>
        <button><Link className="button" to="/Breakfast">DESAYUNO</Link></button>
        <button><Link className="button" to="/Lunch" >COMIDA/CENA</Link></button>
        </div>
    );
};


export default Button