import React from "react";
// import FontAwesome from 'react-fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="text-muted py-5 bg-dark">
      <div className="container">
        <p className="float-end mb-1">
          <button className="ft-icon" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}> <FontAwesomeIcon style={{ fontsize: "40px;" }} icon={faArrowCircleUp} /> </button>
        </p>
        <p style={{ color: "white" }} className="mb-1">&copy;2021 University of Minnesota - Fullstack Bootcamp</p>

      </div>
    </footer>
  );
}

export default Footer;
