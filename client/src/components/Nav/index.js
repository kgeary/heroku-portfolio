import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Nav(props) {
  return (
    <div>
      <NavLink to="/" activeClassName="active">About</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
    </div>
  );
}
export default Nav;