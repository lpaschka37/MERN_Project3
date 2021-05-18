import React from "react";
import CategoryJumbotron from "../components/Jumbotron/CategoryJumbotron";
import Products from "../components/Products/Products";
import _ from 'lodash'

function CheckOut(props) {
    const total = _.sumBy(ItemInCarts, (ItemInCart) => ItemInCart.price*ItemInCart.addToCart.quantity)

    return(
        <>
            <CategoryJumbotron title={'Checkout Page'} subtitle={'You will either need to login in or create a user in order to complete your checkout.'}/>
            <div className="row">
                <div className="col-9">billing comes here</div>

               <div className="col-lg-3 col-md-2 col-sm-12">
                   <div className="card shadow-sm">
                        <div className="custom-card-dark p-4">
                            <div className="col-md-12 order-md-2 mb-4"></div>
                                <h3 className="d-flex justify-content-between align-items-center mb-3">
                                    Your cart summary
                                    <span className="badge badge-secondary badge-pill">3</span>
                                </h3>



                                <ul className="list-group mb-3"> 
                                    <li className="list-group-item d-flex justify-content-between lh-condensed"></li>
                                        {ItemInCarts.map(ItemInCart => <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0">{ItemInCart.productName}</h6>
                                                <img style={{maxWidth:"20%"}} src={ItemInCart.productImage} alt="..." />
                                            <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted">${(ItemInCart.price)*(ItemInCart.addToCart.quantity)}</span>
                                        {/* <div className="row">
                                            <div className="col-2"> <img src={ItemInCart.productImage} alt="..."  height="50px" width="50px" /> </div>
                                            <div className="col-6">{ItemInCart.productName} <br />Qty : {ItemInCart.addToCart.quantity}</div>
                                            <div className="col-4 text-right d-flex justify-content-end">${(ItemInCart.price)*(ItemInCart.addToCart.quantity)}</div> 
                                        </div> */}
                                    </li> )}
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Total (USD)</span>
                                        <strong>${total}</strong>
                                    </li>
                                </ul>
                        </div>
                    </div>
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