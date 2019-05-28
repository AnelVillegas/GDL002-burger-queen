import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => (

    <nav>
      <h2 className="logo"><a className="logo-link" href="#">{props.title}</a></h2>
      <ul className="nav-menu">
        <li><Link className="nav-menu__link" to="/">Inicio</Link></li>
        <li><Link className="nav-menu__link" to="/Kitchen">Cocina</Link></li>
       </ul>
  </nav>
);


export default Navbar;