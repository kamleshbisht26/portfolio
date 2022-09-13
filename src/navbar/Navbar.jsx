import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
   <div className="nav_wrap">
    <div className="nav-left">
        <span className='logo'>TECHY-WEB</span>
        <span className="toggle">toggle</span>
    </div>

    <div className="nav-right">
     <div className="links">
     <NavLink className="navbar-item" activeClassName="is-active" to="/">
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/service"
            >
              Services
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/experience"
            >
              Experience
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/portfolio"
            >
              Portfolio
            </NavLink>

            

     </div>
     <button className="button">Contact</button>
    </div>
   </div>
  )
}

export default Navbar
