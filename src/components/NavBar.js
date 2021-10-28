import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className='navbar'>
        <NavLink to='/'>Team Builder </NavLink>
        <br/>
        <NavLink to='/teams'>Saved Teams </NavLink>
        <br/>
        <NavLink to='/about'>About</NavLink>
        <br/>
    </div>
  );
}

export default NavBar;
