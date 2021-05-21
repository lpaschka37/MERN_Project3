/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from "react";
import CategoryJumbotron from "../components/Jumbotron/CategoryJumbotron";
import Products from "../components/Products/Products";
import API from "../utils/API";

function ProductListPage(props) {
  const [category, setCategory] = useState([props.match.params.category]);

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
    setCategory(props.match.params.category);
    loadProductsByCategory();
  }, [props, category]);

  return (
    <>
      <CategoryJumbotron
        title={`Welcome to ${category} Products`}
        subtitle={`Please select from ${category} below and add to cart.`}
      />
      <div className="album py-5 bg-dark-custom">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {productLists.map((product) => (
              <Products product={product} user={props.user} cart={props.cart} setCart={props.setCart} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductListPage;
