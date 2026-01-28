import React from "react";

function OurMission({ emoji, title, desc }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 bg-dark text-white shadow border-0">
        <div className="card-body text-center">
          <div className="mb-3 fs-1 text-warning">{emoji}</div>
          <h5 className="fw-bold">{title}</h5>
          <p className="text-light opacity-75">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
