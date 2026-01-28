import React from "react";

function WhyChooseUs({ title, desc }) {
  return (
    <div className="col-md-3 col-sm-6">
      <div
        className="h-100 p-4 rounded-4 shadow"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="mb-3 fs-1">✔</div>
        <h5 className="fw-bold">{title}</h5>
        <p className="small opacity-75 mb-0">{desc}</p>
      </div>
    </div>
  );
}

export default WhyChooseUs;
