import React from "react";

function CategoryJumbotron(props) {
  return (
    <section className="py-5 text-center container-fluid hero">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">{props.title}</h1>
          <p style={{ color: "white" }} className="lead">{props.subtitle}</p>
          {/* <a href="#" className="btn btn-primary my-2">Main call to action</a> */}
          {/* <a href="#" className="btn btn-secondary my-2">Secondary action</a> */}
        </div>
      </div>
    </section>
  );
}

export default CategoryJumbotron;

// Creaeted by Saranya
