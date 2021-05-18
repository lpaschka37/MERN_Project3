import React from "react";

import header1 from "../images/header.png";
import header2 from "../images/dark_wrinkle2.jpg";

function Home() {
  return (
    <div id="carouselExampleCaptions" className="carousel" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={header1} className="d-block w-100" alt="Slide one" />
          <div className="carousel-caption d-md-block mb-8">
          </div>
        </div>
        <div className="carousel-item">
          <img src={header2} className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption d-md-block">
            <h1>Welcome to Garyphenalia</h1>
            <p>You made it to the best and wierest shopping experience on the internet, please choose a category below and begin your journey!</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home;
