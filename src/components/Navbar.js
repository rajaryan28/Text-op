import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  
  return (
    <div>
      <nav className={`navbar  navbar-expand-lg bg-body-tertiary`} data-bs-theme={`${props.mode}`}>
      <div className="container-fluid ">
      <NavLink className={`navbar-brand`}to="/"><img src={props.navlogo} alt="" />{props.title}</NavLink>
       <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
       </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className={`nav-link`} aria-current="page" to="/">{props.home}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link`} to="/about">{props.about}</NavLink>
        </li>
        
        

      </ul>
      <div className="form-check form-switch my-2">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:`${props.mode==='dark'?'white':''}`}}>Enable Dark Mode</label>
</div>
    </div>
    </div>
    </nav>
</div>
  )
}

Navbar.defaultProps={
    title:"Title",
    home:"Home",
    about:"About"
}






