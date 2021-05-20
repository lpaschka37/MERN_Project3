/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from "react";
import CategoryJumbotron from "../components/Jumbotron/CategoryJumbotron";
import Products from "../components/Products/Products";
import API from "../utils/API";

function ProductListPage(props) {
  const category = props.match.params.category;

  const [productLists, setProductLists] = useState([]);

  // Loads all products into state
  const loadProductsByCategory = async () => {
    try {
      const prods = await API.getProductsByCategory(category);
      setProductLists(prods.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // useEffect
  useEffect(() => {
    loadProductsByCategory();
  }, [props]);

  return (
    <>
      <CategoryJumbotron
        title={`Welcome to ${category} Products`}
        subtitle={`Please select from ${category} below and add to cart.`}
      />
      <div class="album py-5 bg-dark-custom">
        <div class="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {productLists.map((product) => (
              <Products product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductListPage;
