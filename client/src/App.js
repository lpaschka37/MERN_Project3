import React, { useState, useEffect } from "react";
import "./pages/style.css";
import { HashRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import NavTop from "./components/NavTop/NavTop";
import Footer from "./components/Footer/Footer";
import ProductListPage from "./pages/ProductListPage";
import CheckOut from "./pages/Checkout";
import SignIn from "./pages/Signin";
// import Cart from "./pages/Cart";           Cart fx not ready yet--kl

function App() {
  // Setting global user logged in state
  const [signedIn, setSignedIn] = useState("");
  const [cart, setCart] = useState([]);

  function updateTemp() {
    console.log("reloading localStorage");
    const loggedInUser = localStorage.getItem("user");
    const savedCart = localStorage.getItem("cart");
    console.log("localS savedCart", savedCart);
    setSignedIn(loggedInUser || null);
    setCart(JSON.parse(savedCart) || []);
  }

  useEffect(() => {
    updateTemp();
  }, []);

  return (
    // Put Products into state
    <Router>
      <NavTop user={signedIn} setuser={setSignedIn} cart={cart} update={updateTemp}/>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/:category/productlist"
        component={(props) => (
          <ProductListPage {...props} cart={cart} setCart={setCart} user={signedIn} update={updateTemp} />
        )}
      />
      <Route
        exact
        path="/checkout"
        component={(props) => (
          <CheckOut {...props} cart={cart} setCart={setCart} update={updateTemp} />
        )}
      />
      <Route
        exact
        path="/signin"
        render={(props) => (
          <SignIn {...props} user={signedIn} setuser={setSignedIn} update={updateTemp} />
        )}
      />
      <Footer />
    </Router>
  );
}

export default App;
