import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";
// import ProductListPage  from "./pages/Category4";
// import CheckOut from "./pages/Checkout";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <div>
      <Header />
      <Home />
      <Footer />
      {/* <ProductListPage />
      <CheckOut /> */}
    
    </div>
  )
}

export default App;
