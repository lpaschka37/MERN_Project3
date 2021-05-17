import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
// import ProductListPage  from "./pages/Category4";
// import CheckOut from "./pages/Checkout";

import NavTop from "./components/NavTop/NavTop";
import Footer from "./components/Footer/Footer";

import "./pages/style.css";

function App() {
  return (
    <div>
      <NavTop />
      <Home />
      <Footer />
      {/* <ProductListPage />
      <CheckOut /> */}

    </div>
  );
}

export default App;
