import React from "react";

function PageHeaderSection() {
  return (
    <section
      className="text-white text-center d-flex align-items-center"
      style={{
        minHeight: "60vh",
        backgroundImage:
          "url(https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <h1 className="fw-bold display-5">Explore Destinations</h1>
        <p className="lead">Find your perfect place to travel</p>
      </div>
    </section>
  );
}

export default PageHeaderSection;
