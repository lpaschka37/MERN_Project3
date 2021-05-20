/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
// import Rating from "./Rating";
import StarRatingComponent from "react-star-rating-component";
import _ from "lodash";
import API from "../../utils/API";

function Products(props) {
  const [ratingValue, setRatingValue] = useState(0);
  const [showGiveRating, setShowGiveRating] = useState(false);
  const [product, setProduct] = useState(props.product);
  const [showRated, setShowRated] = useState(false);

  const cart = props.cart;
  const setCart = props.setCart;

  useEffect(() => {
    setProduct(props.product);
  }, [props]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const calculateRating = () => Math.floor(
    _.sumBy(product.ratings, (rating) => rating.rate) / product.ratings.length
  );

  const enterRating = (selectedRating) => {
    setRatingValue(selectedRating);
    updateRating(selectedRating);
    setShowGiveRating(false);
    setShowRated(true);
  };

  // Sending latest star to API
  const updateRating = async (selectedRating) => {
    try {
      const prod = await API.updateRating(product._id, selectedRating);
      setProduct(prod.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const addToCart = (event, productData) => {
    event.preventDefault();
    setCart((cartT) => [...cartT, productData]);
  };

  return (
    <>
      <div className="col prod-card">
        <div className="card shadow-sm mb-4">
          <img
            src={`/images/${product.productImage}`}
            className="card-img-height card-img-top img-fluid"
            alt="placeholder"
          />
          <div className="card-body">
            <h5 className="card-title-product">{product.productName}</h5>
            <div className="prod-desc">
              <p className="card-text-product">{product.description}</p>
            </div>
            <div className="card-price" style={{ fontWeight: "bold" }}> Price: ${product.price}</div>
            <div className="d-flex align-items-center mb-3">
              <StarRatingComponent
                name="rate1"
                editing={false}
                starCount={5}
                value={calculateRating()}
                className=""
              />
              {showRated ? (
                <div className="col-3 mx-1 text-left" style={{ fontWeight: "bold" }}>Rated</div>
              ) : (
                <div className="col-3 mx-1 text-left" onClick={() => setShowGiveRating(true)}>
                  <button className="rate-btn">Rate Product</button>
                </div>
              )}
              {showGiveRating && (

                <div className="px-4 mt-3 col-6">
                  <span className="fst-italic fw-light">
                    choose rating
                  </span>
                  <StarRatingComponent
                    name="rate2" starCount={5}
                    value={ratingValue}
                    onStarClick={enterRating.bind(enterRating)}
                  />
                </div>
              )}
            </div>
            <button onClick={(e) => addToCart(e, product)} className="btn cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;

// Cart fx not complete yet-------------KL
// export default function Product(props) {
//   const { product, onAdd } = props;
//   return (
//     <div>
//       <img className="small" src={product.image} alt={product.name} />
//       <h3>{product.name}</h3>
//       <div>${product.price}</div>
//       <div>
//         <button onClick={() => onAdd(product)}>Add To Cart</button>
//       </div>
//     </div>
//   );
// }
