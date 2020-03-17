import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Typography, Toolbar, Container } from "@material-ui/core";
import "./style.css";

function Nav(props) {
  return (
    <AppBar position="static" color="default" className="appBar">
      <Toolbar className="toolbar">
        <Container className="navContainer">
          <Typography variant="h4" noWrap className="navBrand">
            Kevin Geary
          </Typography>
          <nav>
            <NavLink to="/" className="navLink" exact activeClassName="active">About</NavLink>
            <NavLink to="/contact" className="navLink" activeClassName="active">Contact</NavLink>
            <NavLink to="/portfolio" className="navLink" activeClassName="active">Portfolio</NavLink>
          </nav>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
export default Nav;