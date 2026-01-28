import React from "react";

function HeroSection() {
  return (
    <section
      className="text-white d-flex align-items-center"
      style={{
        minHeight: "60vh",
        backgroundImage:
          "url(https://images.pexels.com/photos/10614856/pexels-photo-10614856.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center">
        <h1 className="fw-bold display-5">About Us</h1>
        <p className="lead">Discover who we are & why we travel</p>
      </div>
    </section>
  );
}

export default HeroSection;
