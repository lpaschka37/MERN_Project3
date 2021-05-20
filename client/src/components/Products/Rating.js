import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import _ from "lodash";
import API from "../../utils/API";

function Rating(props) {
  const { productId, ratings } = props;
  const [ratingValue, setRatingValue] = useState(0);
  const [showRating, setShowRating] = useState(false);
  const calculateRating = () => {
    return Math.floor(
      _.sumBy(ratings, (rating) => rating.rate) / ratings.length
    );
  };

  const enterRating = (selectedRating) => {
    setRatingValue(selectedRating);
    updateRating(selectedRating);
    setShowRating(false);
  };

  const updateRating = async (selectedRating) => {
    try {
      const prods = await API.updateRating(productId, selectedRating);
      console.log(prods);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div>
        <StarRatingComponent
          name="rate1"
          editing={false}
          starCount={5}
          value={calculateRating()}
        />
        <span onClick={() => setShowRating(true)}>Give Rating </span>
        {showRating && (
          <div>
            <StarRatingComponent
              name="rate2"
              starCount={5}
              value={ratingValue} // calRate(product.rating)
              onStarClick={enterRating.bind(enterRating)}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Rating;
