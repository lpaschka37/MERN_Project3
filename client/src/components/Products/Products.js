/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Products(props) {
    return (
        <>
            <div class="row">
            {props.productList.map(product => 
                
                    <div class="card col-3">
                        <img src={product.productImage} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{product.productName}</h5>
                            <div class="price">{product.price}</div>
                        </div>
                        <div class="card-footer text-muted">
                            <button class="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                
            )}
            </div>
        </>
    )
}

export default Products;

// Created by Saranya