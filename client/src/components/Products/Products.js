
import React,{useState} from "react";
import StarRatingComponent from 'react-star-rating-component';
import ProductDetails from "./ProductDetails"

function Products(props) {


    // const[showProductModal ,setShowProductModal] = useState(false)
    // const[clickedProductDetails ,setclickedProductDetails] = useState()

    const productClick = (product) => {
        // console.log('coming in')
        // setShowProductModal(!showProductModal)
        // setclickedProductDetails(product)
    }
    // console.log(showProductModal,clickedProductDetails)
    
    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {props.productList.map(product =>
                <div className="col"> 
                    <div className="card shadow-sm mb-4" onClick={()=>productClick(product)}>
                        <img src={product.productImage} className="card-img-height card-img-top img-fluid" alt="placeholder" />
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
                                    // renderStarIcon={() => <span></span>}
                                    starCount={5}
                                    value={product.rating}  
                                />
                            </div>
                            <button className="btn cart-btn">Add to Cart</button>
                        </div>
                    </div>
                    </div>
                )}
            </div>
            {/* {showProductModal && <ProductDetails clickedProductDetails={clickedProductDetails} showProductModal={showProductModal} setShowProductModal={setShowProductModal} />} */}
        </>
    )
}

export default Products;

