import React from "react";
import { NavLink } from "react-router-dom";

function Footer(props) {
  return (
    <div className="Footer">
      <NavLink to="/" className="navLink" activeClassName="active">About</NavLink>
      <NavLink to="/contact" className="navLink" activeClassName="active">Contact</NavLink>
      <NavLink to="/portfolio" className="navLink" activeClassName="active">Portfolio</NavLink>
    </div>
  );
}
export default Footer;