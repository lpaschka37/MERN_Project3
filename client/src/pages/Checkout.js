import React from "react";
import CategoryJumbotron from "../components/Jumbotron/CategoryJumbotron";
import Products from "../components/Products/Products";
import _ from "lodash";

function CheckOut(props) {
  const total = _.sumBy(
    ItemInCarts,
    (ItemInCart) => ItemInCart.price * ItemInCart.addToCart.quantity
  );

  return (
    <>
      <CategoryJumbotron
        title={"Checkout Page"}
        subtitle={
          "You will either need to login in or create a user in order to complete your checkout."
        }
      />
      <div className="album py-5 bg-dark-custom">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/* <div classNameName="col-9">billing comes here</div> */}
            <div className="col-lg-9 col-md-6 col-sm-12">
              <div style={{ color: "white" }} className="card shadow-sm">
                <div className="custom-card-dark p-4">
                  <h3 className="mb-3">Billing address</h3>
                  <form className="needs-validation" novalidate>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder=""
                          value=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder=""
                          value=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label for="username">Username</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">@</span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Username"
                          required
                        />
                        <div
                          className="invalid-feedback"
                          style={{ width: "100%;" }}
                        >
                          Your username is required.
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label for="email">
                        Email <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="you@example.com"
                      />
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>

                    <div className="mb-3">
                      <label for="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>

                    <div className="mb-3">
                      <label for="address2">
                        Address 2 <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-5 mb-3">
                        <label for="country">Country</label>
                        <select
                          className="custom-select d-block w-100"
                          id="country"
                          required
                        >
                          <option value="">Choose...</option>
                          <option>United States</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label for="state">State</label>
                        <select
                          className="custom-select d-block w-100"
                          id="state"
                          required
                        >
                          <option value="">Choose...</option>
                          <option>Alabama</option>
                          <option>Alaska</option>
                          <option>Arizona</option>
                          <option>Arkansas</option>
                          <option>California</option>
                          <option>Colorado</option>
                          <option>Connecticut</option>
                          <option>Delaware</option>
                          <option>Florida</option>
                          <option>Georgia</option>
                          <option>Hawaii</option>
                          <option>Idaho</option>
                          <option>Illinois</option>
                          <option>Indiana</option>
                          <option>Iowa</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">Zip code required.</div>
                      </div>
                    </div>
                    <hr className="mb-4" />
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="same-address"
                      />
                      <label className="custom-control-label" for="same-address">
                        Shipping address is the same as my billing address
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="save-info"
                      />
                      <label className="custom-control-label" for="save-info">
                        Save this information for next time
                      </label>
                    </div>
                  </form>
                  {/* <!-- <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div> --> */}
                </div>
              </div>
              <div style={{ color: "white" }} className="card shadow-sm">
                <div className="custom-card-dark p-4">
                  <h3 className="mb-3">Payment</h3>
                  <div className="d-block my-3">
                    <div className="custom-control custom-radio">
                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="custom-control-input"
                        checked
                        required
                      />
                      <label className="custom-control-label" for="credit">
                        Credit card
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="custom-control-input"
                        required
                      />
                      <label className="custom-control-label" for="free">
                        Free
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        id="paypal"
                        name="paymentMethod"
                        type="radio"
                        className="custom-control-input"
                        required
                      />
                      <label className="custom-control-label" for="Make an offer">
                        Dodge Coin
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label for="cc-name">Name on card</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-name"
                        placeholder=""
                        required
                      />
                      <small className="text-muted">
                        Full name as displayed on card
                      </small>
                      <div className="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label for="cc-number">Credit card number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-number"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-sm-6 mb-3">
                      <label for="cc-expiration">Expiration</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-expiration"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        Expiration date required
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3">
                      <label for="cc-expiration">CVV</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-cvv"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">Security code required</div>
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <button className="btn form-btn btn-lg" type="submit">
                    Checkout
                  </button>
                  <button
                    style={{ backgroundColor: "red" }}
                    className="btn form-btn btn-lg"
                    type="submit"
                  >
                    Cancel
                  </button>
                  {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    < /div> */}
                </div>
              </div>
            </div>

            {/* Your cart summary */}
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
                    {ItemInCarts.map((ItemInCart) => (
                      <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                          <h6 className="my-0">{ItemInCart.productName}</h6>
                          <img
                            style={{ maxWidth: "20%" }}
                            src={ItemInCart.productImage}
                            alt="..."
                          />
                          <small className="text-muted">
                            Brief description
                          </small>
                        </div>
                        <span className="text-muted">
                          ${ItemInCart.price * ItemInCart.addToCart.quantity}
                        </span>
                        {/* <div className="row">
                                            <div className="col-2"> <img src={ItemInCart.productImage} alt="..."  height="50px" width="50px" /> </div>
                                            <div className="col-6">{ItemInCart.productName} <br />Qty : {ItemInCart.addToCart.quantity}</div>
                                            <div className="col-4 text-right d-flex justify-content-end">${(ItemInCart.price)*(ItemInCart.addToCart.quantity)}</div> 
                                        </div> */}
                      </li>
                    ))}
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Total (USD)</span>
                      <strong>${total}</strong>
                    </li>
                  </ul>
                </div>
              </div>
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
    productImage: "",
    productName: "Ballons",
    description: "Party ballons to pop",
    price: "2$",
    seller: "Dollar Tree",
    rating: 3,
  },
  {
    productImage: "",
    productName: "string curls",
    description: "string curls to design",
    price: "5$",
    seller: "Party city",
    rating: "4",
  },
];

const ItemInCarts = [
  {
    productImage: "",
    productName: "Ballons",
    description: "Party ballons to pop",
    price: 5,
    seller: "Dollar Tree",
    rating: 3,
    addToCart: {
      quantity: 3,
    },
  },
  {
    productImage: "",
    productName: "string curls",
    description: "string curls to design",
    price: 5,
    seller: "Party city",
    rating: 4,
    addToCart: {
      quantity: 3,
    },
  },
];
