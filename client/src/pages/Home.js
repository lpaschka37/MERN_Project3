import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState();

  // Loads all products into state
  const loadProducts = async () => {
    try {
      const prods = await API.getProducts();
      setProducts(prods.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // get all categories without duplicate
  const getAllCategory = () => {
    const allCategories = products.map((product) => product.category);
    const uniqueCategory = new Set(allCategories); // return Gare Wares,Vinyl,Party Supplies, Board Games
    return Array.from(uniqueCategory);
  };

  // useEffect
  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    setCategories(getAllCategory());
  }, [products]);

  const getIconClassForCategory = (category) => {
    let iconClass = "";
    if (category === "Vinyl") {
      iconClass = "fa-compact-disc";
    } else if (category === "Party Supplies") {
      iconClass = "fa-gifts";
    } else if (category === "Board Games") {
      iconClass = "fa-dice";
    } else if (category === "Gare Wares") {
      iconClass = "fa-grin-wink";
    } else {
      iconClass = "fa-recycle";
    }
    return iconClass;
  };

  return (
    <>
      <div
        id="CarouselExampleCaptions"
        className="carousel"
        data-bs-ride="Carousel"
      >
        {/* <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/header.png"
              className="d-block w-100"
              alt="Slide one"
            />
            <div className="carousel-caption d-md-block mb-8"></div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/wrinkle2.jpg"
              className="d-block w-100"
              alt="Slide 2"
            />
            <div className="carousel-caption d-md-block">
              <h1>Welcome to Garyphenalia</h1>
              <p>
                You made it to the best and wierest shopping experience on the
                internet, please choose a category below and begin your journey!
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* // category section */}
      {categories && (
        <div className="py-5 bg-dark-custom">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 col-lg-12">
              {categories.map((category) => (
                <div className="col-lg-3 mb-3">
                  <a href={`/#/${category}/productlist`}>
                    <div className="card custom-card-dark">
                      <div className="icon">
                        <i
                          className={`fas ${getIconClassForCategory(category)}`}
                        ></i>
                      </div>
                      <h4 className="card-title p-2">{category}</h4>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
