import React from "react";

function PopularDesti({ image, alt, location, title, price }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow text-center">
        <img src={image} className="card-img-top h-75" alt={alt} />
        <div className="card-body">
          <h5 className="card-title">{location}</h5>
          <p className="card-text">{title}</p>
          <p className="fw-bold text-primary">₹{price}</p>
        </div>
        <div className="card-footer d-flex gap-2">
          <button className="btn btn-outline-primary w-50">View</button>
          <button className="btn btn-primary w-50">Book</button>
        </div>
      </div>
    </div>
  );
}

export default PopularDesti;
