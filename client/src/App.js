import React, {useState,useEffect} from "react";
import "../src/pages/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import API from "./utils/API";

//import HomePage from "./components/HomePage/Homepage";
import Header from "./components/Header/Header";
import NavTop from "./components/NavTop/NavTop";
import Footer from "./components/Footer/Footer"
import ProductListPage  from "./pages/Category4";
import CheckOut from "./pages/Checkout";
// import SignIn from "./pages/Signin";

// import Home from "./pages/Home";
// import ProductListPage  from "./pages/Category4";
// import CheckOut from "./pages/Checkout";

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
    // Put Products into state
  <Router>
     <NavTop />
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/productlistpage" component={ProductListPage} />
        <Route exact path="/checkout" component={CheckOut} />
        {/* <Route exact path="/signin" component={SignIn} /> */}
      <Footer /> 
      <div>{products.length ? (products[0].description) : ("nothing")}</div>
  </Router>
  );
}

export default App;
