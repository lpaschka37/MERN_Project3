import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import HomePage from "./components/HomePage/Homepage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import ProductListPage  from "./pages/Category4";
import CheckOut from "./pages/Checkout";
// import SignIn from "./pages/Signin";


  

function App() {

  return (

  <Router>
     <Header />
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/productlistpage" component={ProductListPage} />
        <Route exact path="/checkout" component={CheckOut} />
        {/* <Route exact path="/signin" component={SignIn} /> */}
      <Footer /> 
  </Router>
  );
}

export default App;
