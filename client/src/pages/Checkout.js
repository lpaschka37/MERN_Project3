import React from "react";
import CategoryJumbotron from "../components/Jumbotron/CategoryJumbotron";
import Products from "../components/Products/Products";
import _ from 'lodash'

function CheckOut(props) {
    const total = _.sumBy(ItemInCarts, (ItemInCart) => ItemInCart.price*ItemInCart.addToCart.quantity)

    return(
        <>
            <CategoryJumbotron />
            <div className="row">
                <div className="col-8"><Products productList={RecentlyViewed}/></div>

                <div className="col-4">
                    <ul className="list-group"> 
                        {ItemInCarts.map(ItemInCart => <li className="list-group-item">
                            <div className="row">
                                <div className="col-2"> <img src={ItemInCart.productImage} alt="..."  height="50px" width="50px" /> </div>
                                <div className="col-6">{ItemInCart.productName} <br />Qty : {ItemInCart.addToCart.quantity}</div>
                                <div className="col-4 text-right d-flex justify-content-end">${(ItemInCart.price)*(ItemInCart.addToCart.quantity)}</div> 
                            </div>
                        </li> )}
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-2">Total:</div>
                                <div className="col-10 text-right d-flex justify-content-end">${total}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default CheckOut;

const RecentlyViewed = [
    {
    "productImage":"",
    "productName":"Ballons",
    "description":"Party ballons to pop",
    "price":"2$",
    "seller":"Dollar Tree",
    "rating":3
    },
    {
    "productImage":"",
    "productName":"string curls",
    "description":"string curls to design",
    "price":"5$",
    "seller":"Party city",
    "rating":"4"
    },
]

const ItemInCarts = [
    {
    "productImage":"",
    "productName":"Ballons",
    "description":"Party ballons to pop",
    "price":5,
    "seller":"Dollar Tree",
    "rating":3,
    "addToCart": {
        'quantity': 3
        }
    },
    {
    "productImage":"",
    "productName":"string curls",
    "description":"string curls to design",
    "price":5,
    "seller":"Party city",
    "rating":4,
    "addToCart": {
        'quantity': 3
        }
    },
]