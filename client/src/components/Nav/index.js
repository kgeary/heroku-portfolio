import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Typography, Toolbar, Container, Drawer, Button, List } from "@material-ui/core";
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
            <Button
              style={{ color: "#99BBEE", borderColor: "#99BBEE" }}
              variant="outlined"
              onClick={toggleDrawer(true)}
            >
              MENU
            </Button>
            <Drawer open={isOpen} onClose={toggleDrawer(false)}>
              <List onClick={toggleDrawer(false)} style={{ display: "flex", flexDirection: "column" }}>
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