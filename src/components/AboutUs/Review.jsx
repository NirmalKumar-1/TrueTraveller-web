import React from "react";

function Review({ image, name, location, review }) {
  return (
    <div className="col-md-4">
      <div className="card bg-dark text-white shadow border-0 h-100">
        <div className="card-body text-center py-4">
          <img
            src={image}
            alt={name}
            className="rounded-circle mb-3 border border-2 border-light"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />

          <p className="mb-2 text-warning">⭐⭐⭐⭐⭐</p>

          <p className="fst-italic text-light opacity-75">{review}</p>

          <h6 className="fw-bold mb-0">{name}</h6>
          <small className="text-light opacity-50">{location}</small>
        </div>
      </div>
    </div>
  );
}

export default Review;
