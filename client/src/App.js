import React from "react";
import HomePage from "./components/HomePage/Homepage";
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductListPage  from "./pages/Category4";
import CheckOut from "./pages/Checkout";


function App() {

  return (
    <div>
   
      <ProductListPage />
      <CheckOut />
      
    
    </div>
  )
}

export default App;
