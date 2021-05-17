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
        <NavDropdown title={<div style={{ display: "inline-block" }}><i className="fas fa-align-justify"></i>  Categories</div>} className="custom-drop" id="collapsible-nav-dropdown">
          <NavDropdown.Item href="#action/1.1">Vinyl</NavDropdown.Item>
          <NavDropdown.Item href="#action/1.2">Green Stuff</NavDropdown.Item>
          <NavDropdown.Item href="#action/1.3">Nathan</NavDropdown.Item>
          <NavDropdown.Item href="#action/1.4">Party Supplies</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#cart" className="primary-col"><i className="fas fa-shopping-cart"></i>  Cart</Nav.Link>
        <Nav.Link href="#cart" className="primary-col"><i className="fas fa-user"></i>  Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    {/* <div className="container-fluid">
      <a className="navbar-brand primary-col" href="/"><i className="fas fa-store-alt"></i>Garyphenalia</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="nav top-nav justify-content-end">
        <li className="nav-item dropdown active">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"><i className="fas fa-record-vinyl"></i><i className="fas fa-align-justify"></i>  Categories</a>
          <ul className="dropdown-menu custom-drop">
            <li className="list-custom"><a className="dropdown-item" href="category1.html">Vinyl</a></li>
            <li><a className="dropdown-item list-custom" href="category2.html">Green Stuff</a></li>
            <li><a className="dropdown-item list-custom" href="category3.html">Nathan</a></li>
            <li><a className="dropdown-item list-custom" href="category4.html">Party Supplies</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="checkout.html"><i className="fas fa-shopping-cart"></i>  Cart</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="signin.html" tabIndex="-1" aria-disabled="true"><i className="fas fa-user"></i>  Login</a>
        </li>
      </ul>
    </div> */}
  </Navbar>
  );
}

export default NavTop;
