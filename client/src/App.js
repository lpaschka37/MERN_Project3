import React from "react";
import "./pages/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import HomePage from "./components/HomePage/Homepage";
// import Header from "./components/Header/Header";
import NavTop from "./components/NavTop/NavTop";
import Footer from "./components/Footer/Footer";
import ProductListPage from "./pages/Category4";
import CheckOut from "./pages/Checkout";
// import SignIn from "./pages/Signin";

// import Home from "./pages/Home";
// import ProductListPage  from "./pages/Category4";
// import CheckOut from "./pages/Checkout";

function App() {
  return (

  <Router>
     <NavTop />
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/productlistpage" component={ProductListPage} />
        <Route exact path="/checkout" component={CheckOut} />
        {/* <Route exact path="/signin" component={SignIn} /> */}
      <Footer />
  </Router>
  );
}

export default App;
