import React from  'react';
import {Link} from 'react-router-dom';

const Button = () => {
   
    return(
        <ul className="button-menu">
        <li><Link className="button" to="/Breakfast">DESAYUNO</Link></li>
        <li><Link className="button" to="/Lunch" >COMIDA/CENA</Link></li>
        </ul>
    );
};


export default Button