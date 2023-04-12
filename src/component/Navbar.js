import React from 'react';
//import App from './App';
import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default function Navbar(props) {
return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    {/* < a className="navbar-brand" hr="/">{props.heading}</a> */}
    
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">{props.about}</Link>
        </li>
       
       
        <li className="nav-item">
          
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    

    </>
)

}

Navbar.propTypes={

  heading : propTypes.string,
  home : propTypes.string
}

Navbar.defaultProps={
  heading : "You have forgot Navbar add"
}