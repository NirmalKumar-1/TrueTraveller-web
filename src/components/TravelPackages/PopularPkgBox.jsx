import React from "react";

function PopularPkgBox({ image, alt, location, duration, price }) {
  return (
    <div className="col-md-4">
      <div className="card shadow h-100">
        <img src={image} className="card-img-top package-img" alt={alt} />
        <div className="card-body text-center">
          <h5 className="fw-bold">{location}</h5>
          <p>{duration}</p>
          <p className="fw-bold text-primary">₹{price}</p>
          <button className="btn btn-outline-primary">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default PopularPkgBox;
