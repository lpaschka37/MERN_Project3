import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


function NavTop() {
  return (
  <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark bg-dark container-fluid">
    <Navbar.Brand href="#home" className="navbar-brand primary-col"><i className="fas fa-store-alt"></i>Garyphenalia</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav className="top-nav">
        <NavDropdown title={<span className="primary-col"><i className="fas fa-align-justify"></i>  Categories</span>} className="custom-drop" id="collapsible-nav-dropdown">
          <NavDropdown.Item href="#action/1.1">Vinyl</NavDropdown.Item>
          <NavDropdown.Item href="#action/1.2">Green Stuff</NavDropdown.Item>
          <NavDropdown.Item href="#action/1.3">Nathan</NavDropdown.Item>
          <NavDropdown.Item href="#action/1.4">Party Supplies</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#cart" className="primary-col"><i className="fas fa-shopping-cart"></i>  Cart</Nav.Link>
        <Nav.Link href="#cart" className="primary-col"><i className="fas fa-user"></i>  Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavTop;
