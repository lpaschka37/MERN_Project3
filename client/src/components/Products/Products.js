import React, { useState } from "react";
// import Rating from "./Rating";
import StarRatingComponent from "react-star-rating-component";
import _ from "lodash";
import API from "../../utils/API";

function Products(props) {
  const [ratingValue, setRatingValue] = useState(0);
  const [showGiveRating, setShowGiveRating] = useState(false);
  const [product, setProduct] = useState(props.product);
  const [showRated, setShowRated] = useState(false);

  const calculateRating = () => {
    return Math.floor(
      _.sumBy(product.ratings, (rating) => rating.rate) / product.ratings.length
    );
  };

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

  return (
    <>
      <div className="col">
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
            <div className="card-text-product">Price: $ {product.price}</div>
            <div className="d-flex align-items-center mb-3">
              <StarRatingComponent
                name="rate1"
                editing={false}
                starCount={5}
                value={calculateRating()}
                className=""
              />
              {showRated ? (
                <div className="col-3 mx-1 text-left">Rated</div>
              ) : (
                <div
                  className="col-3 mx-1 text-left"
                  onClick={() => setShowGiveRating(true)}
                >
                  Give Rating
                </div>
              )}
              {showGiveRating && (
                <div className="border px-2 col-6">
                  <span className="fst-italic fw-light">
                    click star to rate
                  </span>
                  <StarRatingComponent
                    name="rate2"
                    starCount={5}
                    value={ratingValue} 
                    onStarClick={enterRating.bind(enterRating)}
                  />
                </div>
              )}
            </div>
            <button className="btn cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;


//Cart fx not complete yet-------------KL
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