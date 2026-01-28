import React from "react";

function VideoAndReelsBox({ image }) {
  return (
    <div className="col-md-4">
      <div className="card shadow h-100">
        <img src={image} className="card-img-top" alt="Travel Video" />
        <div className="card-body text-center">
          <button className="btn btn-outline-primary">▶ Play Video</button>
        </div>
      </div>
    </div>
  );
}

export default VideoAndReelsBox;
