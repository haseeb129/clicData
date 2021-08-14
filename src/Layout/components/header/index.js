import React from "react";
import "./header.css";
import Logo from "../../../assests/OnlyLogo.png";
import { Navbar, Nav, NavLink, FormControl, Form } from "react-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="md" className="navbar-wrapper">
      <Navbar.Brand href="/">
        <img src={Logo} className="d-inline-block align-top brand-image" />
        ciPARTHENON Docs
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavLink
            to="dummy1"
            activeStyle={{ color: "pink" }}
            className="navlink"
          >
            Documentation
          </NavLink>
          <NavLink className="navlink">Tutorials</NavLink>
          <NavLink className="navlink">API Reference</NavLink>
          <NavLink className="navlink">FAQ</NavLink>
          <NavLink className="navlink">Release Notes</NavLink>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2 search-bar"
            aria-label="Search"
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
