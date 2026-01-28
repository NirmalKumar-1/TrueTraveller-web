import React from "react";

function HeaderSection() {
  return (
    <section
      className="text-white d-flex align-items-center"
      style={{
        minHeight: "60vh",
        backgroundImage:
          "url(https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center">
        <h1 className="fw-bold display-5">Gallery</h1>
        <p className="lead">Travel photos, reels & unforgettable moments</p>
      </div>
    </section>
  );
}

export default HeaderSection;
