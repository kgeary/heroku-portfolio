import React from "react";
import { NavLink } from "react-router-dom";

function Footer(props) {
  return (
    <div>
      <h1>Footer</h1>
      <NavLink to="/" activeClassName="active">About</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
    </div>
  );
}
export default Footer;