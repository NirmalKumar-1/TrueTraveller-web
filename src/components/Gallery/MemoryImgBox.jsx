import React from "react";

function MemoryImgBox({ image }) {
  return (
    <div className="col-md-3 col-sm-6 d-flex justify-content-center">
      <img
        src={image}
        className="img-fluid rounded shadow-sm"
        alt="Travel Memories"
        style={{ height: "240px", objectFit: "cover" }}
      />
    </div>
  );
}

export default MemoryImgBox;
