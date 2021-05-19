import React from "react";
import "../src/pages/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import NavTop from "./components/NavTop/NavTop";
import Footer from "./components/Footer/Footer";
import ProductListPage from "./pages/ProductListPage";
import CheckOut from "./pages/Checkout";
import SignIn from "./pages/Signin";

function App() {
  return (
    // Put Products into state
    <Router>
      <NavTop />
      <Route exact path="/" component={Home} />
      <Route exact path="/:category/productlist" component={ProductListPage} />
      <Route exact path="/checkout" component={CheckOut} />
      <Route exact path="/signin" component={SignIn} />
      <Footer />
    </Router>
  );
}

export default App;
