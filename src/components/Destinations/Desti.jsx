import React from "react";

function Desti({ image, alt, location }) {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="card shadow h-100 text-center">
        <img src={image} className="card-img-top img-fluid" alt={alt} />
        <div className="card-body">
          <h6 className="fw-bold">{location}</h6>
        </div>
      </div>
    </div>
  );
}

export default Desti;
