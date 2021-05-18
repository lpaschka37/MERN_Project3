import React from "react";
//import FontAwesome from "react-fontawesome";
import "../../style.css";


function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a  className="navbar-brand" href="home.html"><i  className="fas fa-store-alt"></i>Garyphernalia</a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button> */}
                <ul className="nav top-nav justify-content-end">          
                <li className="nav-item dropdown active">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><i className="fas fa-record-vinyl"></i><i className="fas fa-align-justify"></i>  Categories</a>
                    <ul className="dropdown-menu custom-drop">
                    <li className="list-custom"><a className="dropdown-item" href="category1.html">Vinyl</a></li>
                    <li><a className="dropdown-item list-custom" href="category2.html">Random Stuff</a></li>
                    <li><a className="dropdown-item list-custom" href="category3.html">Board Games</a></li>
                    <li><a className="dropdown-item list-custom" href="category4.html">Party Supplies</a></li>              
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="checkout.html"><i className="fas fa-shopping-cart"></i>  Cart</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="signin.html" tabindex="-1" aria-disabled="true"><i className="fas fa-user"></i>  Login</a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Logout</a>
                </li> */}
                </ul>
            </div>
            </nav>
        </header>
    );
}

export default Header;
