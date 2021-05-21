import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";

import CategoryJumbotron from "../components/Jumbotron/CategoryJumbotron";

function SigninPage(props) {
  const history = useHistory();
  // State
  const [formRegister, setFormRegister] = useState({});
  const [formSignin, setFormSignin] = useState({});

  // Get state passed down via props
  const signedInUser = props.user;
  const setSignedInUser = props.setuser;

  function handleInputChange(event, formType) {
    const { name, value } = event.target;
    if (formType === "signin") {
      setFormSignin({ ...formSignin, [name]: value });
    } else if (formType === "register") {
      setFormRegister({ ...formRegister, [name]: value });
    }
  }

  function handleFormSubmit(event, formType) {
    event.preventDefault();
    console.log("submit, ", formType);
    if (formType === "signin") {
      API.loginUser({
        username: formSignin.username,
        password: formSignin.password,
      })
        .then((res) => {
          if (res.data.err) {
            alert(res.data.err);
          } else {
            loginUser(res.data.username);
            history.push("/");
          }
        })
        .catch((err) => console.log(err));
    } else if (formType === "register") {
      API.saveUsers({
        username: formRegister.username,
        email: formRegister.email,
        password: formRegister.password,
      })
        .then((res) => {
          if (res.data.err) {
            alert(res.data.err);
          } else {
            loginUser(res.data.username);
            history.push("/");
          }
        })
        .catch((err) => console.log("signin error,", err.data));
    }
  }

  function loginUser(username) {
    setSignedInUser(username);
    localStorage.setItem("user", username);
  }

  function handleSignOut() {
    setSignedInUser("");
    localStorage.clear();
  }

  return (
    <empty>
      <CategoryJumbotron
        title={"Login Page"}
        subtitle={"Register or sign in."}
      />
      <div className="album py-5 bg-dark-custom">
        <div className="container-fluid">
          {!signedInUser ? (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card shadow-sm mb-4">
                  <div className="card-body custom-card-dark">
                    <h4 className="card-title">Sign In</h4>
                    <p className="card-text-form">
                      Sign in with your username and password to complete your
                      transaction.
                    </p>

                    {/* Sign In */}
                    <form style={{ color: "#fff" }}>
                      <div className="row">
                        <label
                          htmlFor="inputUN"
                          className="col-sm-4 col-form-label"
                        >
                          User Name
                        </label>
                        <div className="col-sm-12">
                          <input
                            onChange={(e) => handleInputChange(e, "signin")}
                            name="username"
                            type="username"
                            className="form-control"
                            id="inputUNsignin"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label
                          htmlFor="inputPW"
                          className="col-sm-4 col-form-label"
                        >
                          Password
                        </label>
                        <div className="col-sm-12">
                          <input
                            onChange={(e) => handleInputChange(e, "signin")}
                            name="password"
                            type="password"
                            className="form-control"
                            id="inputPWsignin"
                          />
                        </div>
                      </div>
                      <button
                        onClick={(e) => handleFormSubmit(e, "signin")}
                        disabled={!(formSignin.username && formSignin.password)}
                        type="submit"
                        className="home-btn form-btn"
                      >
                        Sign in
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card h-200 shadow-sm mb-4">
                  <div className="card-body custom-card-dark">
                    <h4 className="card-title">Create a User</h4>
                    <p className="card-text-form">
                      First time? You will need to create a user in order to
                      complete your transaction.
                    </p>

                    {/* Register */}
                    <form style={{ color: "#fff" }}>
                      <div className="row">
                        <label
                          htmlFor="inputUN"
                          className="col-sm-4 col-form-label"
                        >
                          Username
                        </label>
                        <div className="col-sm-12">
                          <input
                            onChange={(e) => handleInputChange(e, "register")}
                            name="username"
                            type="username"
                            className="form-control"
                            id="inputUN"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label
                          htmlFor="inputPW"
                          className="col-sm-4 col-form-label"
                        >
                          Password
                        </label>
                        <div className="col-sm-12">
                          <input
                            onChange={(e) => handleInputChange(e, "register")}
                            name="password"
                            type="password"
                            className="form-control"
                            id="inputPW"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label
                          for="inputEmail"
                          className="col-sm-4 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-sm-12">
                          <input
                            onChange={(e) => handleInputChange(e, "register")}
                            name="email"
                            type="email"
                            className="form-control"
                            id="inputEmail"
                          />
                        </div>
                      </div>
                      {/* <!-- <div className="row">
                          <label for="inputPH" className="col-sm-4 col-form-label">Phone</label>
                          <div className="col-sm-12">
                            <input type="phone" className="form-control" id="inputPH">
                          </div>
                        </div>                                  --> */}
                      <button
                        onClick={(e) => handleFormSubmit(e, "register")}
                        disabled={
                          !(
                            formRegister.username
                            && formRegister.password
                            && formRegister.email
                          )
                        }
                        type="submit"
                        className="home-btn form-btn"
                      >
                        Create user
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card shadow-sm mb-4">
                  <div className="card-body custom-card-dark">
                    <h4 className="card-title">
                      Currently signed in as {signedInUser}
                    </h4>
                    <button
                      onClick={handleSignOut}
                      type="submit"
                      className="home-btn form-btn card-title"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </empty>
  );
}

export default SigninPage;
