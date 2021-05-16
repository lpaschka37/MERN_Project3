
import React,{useState} from "react";
import StarRatingComponent from 'react-star-rating-component';
import ProductDetails from "./ProductDetails"

function Products(props) {


    const[showProductModal ,setShowProductModal] = useState(false)
    const[clickedProductDetails ,setclickedProductDetails] = useState()

    const productClick = (product) => {
        // console.log('coming in')
        setShowProductModal(!showProductModal)
        setclickedProductDetails(product)
    }
    console.log(showProductModal,clickedProductDetails)
    
    return (
        <>
            <div class="row">
                {props.productList.map(product => 
                    <div class="card col-3 m-2" onClick={()=>productClick(product)}>
                        <img src={product.productImage} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{product.productName}</h5>
                            <div class="price">{product.price}</div>
                            <div>
                                <StarRatingComponent 
                                    name="rate2" 
                                    editing={false}
                                    // renderStarIcon={() => <span></span>}
                                    starCount={5}
                                    value={product.rating}  
                                />
                            </div>
                            <button class="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                )}
            </div>
            {showProductModal && <ProductDetails clickedProductDetails={clickedProductDetails} showProductModal={showProductModal} setShowProductModal={setShowProductModal} />}
        </>
    )
}

export default Products;

// Created by Saranya