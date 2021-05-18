/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React from "react";
import CategoryJumbotron from "../components/Jumbotron/CategoryJumbotron";
import Products from "../components/Products/Products";

function ProductListPage(props) {
  return (
    <>
      <CategoryJumbotron title={"Welcome to party supply page"} subtitle={"Please select from party supplies below and add to cart."}/>
          <div className="album py-5 bg-dark-custom">
              <div className="container">
                  <Products productList={partyItems}/>
              </div>
          </div>

    </>
  );
}

const partyItems = [
  {
    productImage: "",
    productName: "Ballons",
    description: "Party ballons to pop",
    price: "2$",
    seller: "Dollar Tree",
    rating: "3"
  },
  {
    productImage: "",
    productName: "string curls",
    description: "string curls to design",
    price: "5$",
    seller: "Party city",
    rating: "4"
  },
  {
    productImage: "",
    productName: "pinata",
    description: "Pinata to broke ",
    price: "10$",
    seller: "Hobby Lobby",
    rating: "4"
  },
];

export default ProductListPage;

// Created by saranya
