import React from "react";
import { Link } from "react-router-dom";

function TravelGuideBox({ image, alt, heading, cardText1, cardText2 }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <img
          src={image}
          className="card-img-top"
          alt={alt}
          style={{ height: "250px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{heading}</h5>
          <p className="card-text">{cardText1}</p>
          <p className="card-text">{cardText2}</p>
          <Link to="/explore-travel-guide">
            <button className="btn btn-outline-primary mt-auto">
              Read Full Guide
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TravelGuideBox;
