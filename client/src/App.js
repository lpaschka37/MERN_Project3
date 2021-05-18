import React, {useState,useEffect} from "react";
import "../src/pages/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import HomePage from "./components/HomePage/Homepage";
// import Header from "./components/Header/Header";

import API from "./utils/API";

import NavTop from "./components/NavTop/NavTop";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Vinyl from "./pages/Category1";
import Green from "./pages/Category2";
import Games from "./pages/Category3";
import Party from "./pages/Category4";
import SignIn from "./pages/Signin";
import CheckOut from "./pages/Checkout";

function App() {
  const [products, setProducts] = useState([]);

    // Loads all products into state
    const loadProducts = async () => {
    try {
      const prods = await API.getProducts();

      setProducts(prods.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    console.log("using effect");
    loadProducts();
  }, []);
  
  return (
    <Router>
      <NavTop />
      <Route exact path="/" component={Home} />
      <Route exact path="/vinyl" component={Vinyl} />
      <Route exact path="/green" component={Green} />
      <Route exact path="/games" component={Games} />
      <Route exact path="/party" component={Party} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/checkout" component={CheckOut} />
      <Footer />
    </Router>
  );
}

export default App;

/**
 * Need to decide on which pages are used, their names, etc
 */
