import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Footer(props) {
  return (
    <footer className="Footer">
      <NavLink to="/" className="navLink" exact activeClassName="active">About</NavLink>
      <NavLink to="/contact" className="navLink" activeClassName="active">Contact</NavLink>
      <NavLink to="/portfolio" className="navLink" activeClassName="active">Portfolio</NavLink>
    </footer>
  );
}
export default Footer;