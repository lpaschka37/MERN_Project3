import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavTop(props) {
  const handleSignOut = () => {
    props.setuser("");
    localStorage.clear();
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar navbar-dark bg-dark container-fluid"
    >
      <Navbar.Brand href="/" className="navbar-brand primary-col">
        <i className="fas fa-store-alt"></i>Garyphenalia
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="top-nav">
          <NavDropdown
            title={
              <span className="primary-col">
                <i className="fas fa-align-justify"></i> Categories
              </span>
            }
            className="custom-drop"
            id="collapsible-nav-dropdown"
          >
            <NavDropdown.Item href="/#/Vinyl/productlist">
              Vinyl
            </NavDropdown.Item>
            <NavDropdown.Item href="/#/Gare Wares/productlist">
              Gare Wares
            </NavDropdown.Item>
            <NavDropdown.Item href="/#/Board Games/productlist">
              Board Games
            </NavDropdown.Item>
            <NavDropdown.Item href="/#/Party Supplies/productlist">
              Party Supplies
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/#/checkout" className="primary-col">
            <i className="fas fa-shopping-cart"></i> Cart
          </Nav.Link>
          <Nav.Link className="primary-col">
            <i className="fas fa-user"></i>
            {props.user ? props.user : ""}
          </Nav.Link>
          <Nav.Link
            href="/#/signin"
            className="primary-col"
            onClick={handleSignOut}
          >
            {props.user ? "Logout" : " Login"}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTop;

// Cart fx example, will remove//KL
// export default function Header(props) {
//   return (
//     <header className="block row center">
//       <div>
//         <a href="#/">
//           <h1>Small Shopping Cart</h1>
//         </a>
//       </div>
//       <div>
//         <a href="#/cart">
//           Cart{' '}
//           {props.countCartItems ? (
//             <button className="badge">{props.countCartItems}</button>
//           ) : (
//             ''
//           )}
//         </a>{' '}
//         <a href="#/signin"> SignIn</a>
//       </div>
//     </header>
//   );
// }
