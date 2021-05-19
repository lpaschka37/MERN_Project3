import React, { useState, useEffect } from "react";
import CategoryJumbotron from "../components/Jumbotron/CategoryJumbotron";
import Products from "../components/Products/Products";
import API from "../utils/API";

function ProductListPage(props) {
  const category = props.match.params.category;

  const [productList, setProductList] = useState([]);

  // Loads all products into state
  const loadProductsByCategory = async () => {
    try {
      const prods = await API.getProductsByCategory(category);
      setProductList(prods.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  //useEffect
  useEffect(() => {
    loadProductsByCategory();
  }, []);

  console.log(productList);

  return (
    <>
      <CategoryJumbotron
        title={`Welcome to ${category} Products`}
        subtitle={`Please select from ${category} below and add to cart.`}
      />
      <div class="album py-5 bg-dark-custom">
        <div class="container">
          <Products productList={productList} />
        </div>
      </div>
    </>
  );
}

export default ProductListPage;
