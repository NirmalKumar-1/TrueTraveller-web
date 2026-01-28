import React from "react";

function ReviewBox({ image, review }) {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="card h-100 shadow text-center">
        <img
          src={image}
          alt="Traveller"
          className="card-img-top"
          style={{ height: "220px", objectFit: "cover" }}
        />
        <div className="card-body d-flex align-items-center justify-content-center">
          <p className="mb-0 fst-italic">{review}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewBox;
