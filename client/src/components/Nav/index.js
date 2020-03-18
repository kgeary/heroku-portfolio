import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Typography, Toolbar, Container, Drawer, List } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import "./style.css";




function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <AppBar position="static" color="default" className="appBar">
      <Toolbar className="toolbar">
        <Container className="navContainer">
          <Typography variant="h4" noWrap className="navBrand">
            Kevin Geary
          </Typography>
          <nav className="large-screen">
            <NavLink to="/" className="navLink" exact activeClassName="active">About</NavLink>
            <NavLink to="/contact" className="navLink" activeClassName="active">Contact</NavLink>
            <NavLink to="/portfolio" className="navLink" activeClassName="active">Portfolio</NavLink>
          </nav>
          <nav className="small-screen">
            <IconButton edge="start" onClick={toggleDrawer(true)} style={{ color: "#99BBEE", borderColor: "#99BBEE" }} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Drawer open={isOpen} onClose={toggleDrawer(false)}>
              <List onClick={toggleDrawer(false)} className="mobileList">
                <span className="mobileTitle">Navigation</span>
                <NavLink to="/" className="mobileLink" exact activeClassName="active">About</NavLink>
                <NavLink to="/contact" className="mobileLink" activeClassName="active">Contact</NavLink>
                <NavLink to="/portfolio" className="mobileLink" activeClassName="active">Portfolio</NavLink>
              </List>
            </Drawer>
          </nav>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
export default Nav;