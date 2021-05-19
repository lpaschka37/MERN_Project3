import React from "react";
import StarRatingComponent from "react-star-rating-component";

function Products(props) {
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {props.productList.map((product) => (
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
                <div className="card-text-product">Price: {product.price}</div>
                <div>
                  <StarRatingComponent
                    name="rate2"
                    editing={false}
                    starCount={5}
                    value={product.rating}
                  />
                </div>
                <button className="btn cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
