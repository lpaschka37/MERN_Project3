import React from "react";
import StarRatingComponent from 'react-star-rating-component';

function ProductDetails(props) {
  const { clickedProductDetails, showProductModal, setShowProductModal } = props;   //destructure
  return (
    <>
    <div className="modal fade show" id="exampleModal" style={{display: `${showProductModal ? 'block' : 'none'}`,height:'unset'}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {clickedProductDetails.productName}
            </h5>
            <button type="button" className="close" onClick={()=>setShowProductModal(!showProductModal)}>
              <span>&times;</span>
            </button>
          </div>
          
          <div className="modal-body">
                <div><img src={clickedProductDetails.productImage} class="card-img-top" alt="..." /></div>
                <div>{clickedProductDetails.price}</div>
                <div>
                    <StarRatingComponent 
                        name="rate2" 
                        editing={false}
                        // renderStarIcon={() => <span></span>}
                        starCount={5}
                        value={clickedProductDetails.rating}  
                    />
                </div>
                <div>{clickedProductDetails.description}</div>
            </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal-backdrop show" onClick={()=>setShowProductModal(!showProductModal)}></div>
    </>
  );
}

export default ProductDetails;

//Created by Saranya for PDP(product detail page)
