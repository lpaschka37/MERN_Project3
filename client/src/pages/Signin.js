import React from "react";
import CategoryJumbotron from "../components/Jumbotron/CategoryJumbotron";

function SigninPage() {
  return (
    <empty>
      <CategoryJumbotron
          title={"Checkout Page"}
          subtitle={
            "You will either need to login in or create a user in order to complete your checkout."
          }
        />
      <div className="album py-5 bg-dark-custom">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card shadow-sm mb-4">
                <div className="card-body custom-card-dark">
                  <h4 className="card-title">Sign In</h4>
                  <p className="card-text-form">Sign in with your username and password to complete your transaction.</p>
                  <form style= {{ color: "#fff" }}>
                    <div className="row">
                      <label for="inputUN" className="col-sm-4 col-form-label">User Name</label>
                      <div className="col-sm-12">
                        <input type="username" className="form-control" id="inputUN"/>
                      </div>
                    </div>
                    <div className="row">
                      <label for="inputPW" className="col-sm-4 col-form-label">Password</label>
                      <div className="col-sm-12">
                        <input type="password" className="form-control" id="inputPW"/>
                      </div>
                    </div>
                    <button type="submit" className="home-btn form-btn">Sign in</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card h-200 shadow-sm mb-4">
                <div className="card-body custom-card-dark">
                  <h4 className="card-title">Create a User</h4>
                  <p className="card-text-form">First time? You will need to create a user in order to complete your transaction.</p>
                  <form style= {{ color: "#fff" }}>
                    <div className="row">
                      <label for="inputUN" className="col-sm-4 col-form-label">Username</label>
                      <div className="col-sm-12">
                        <input type="username" className="form-control" id="inputUN"/>
                      </div>
                    </div>
                    <div className="row">
                      <label for="inputPW" className="col-sm-4 col-form-label">Password</label>
                      <div className="col-sm-12">
                        <input type="password" className="form-control" id="inputPW"/>
                      </div>
                    </div>
                    <div className="row">
                      <label for="inputEmail" className="col-sm-4 col-form-label">Email</label>
                      <div className="col-sm-12">
                        <input type="email" className="form-control" id="inputEmail"/>
                      </div>
                    </div>
                    {/* <!-- <div className="row">
                          <label for="inputPH" className="col-sm-4 col-form-label">Phone</label>
                          <div className="col-sm-12">
                            <input type="phone" className="form-control" id="inputPH">
                          </div>
                        </div>                                  --> */}
                    <button type="submit" className="home-btn form-btn">Create user</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </empty>

  );
}

export default SigninPage;
