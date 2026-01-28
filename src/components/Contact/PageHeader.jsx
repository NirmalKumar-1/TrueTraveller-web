import React from "react";

function PageHeader() {
  return (
    <section
      className="text-white d-flex align-items-center"
      style={{
        minHeight: "65vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center">
        <h1 className="fw-bold display-5">Contact Us</h1>
        <p className="lead">We're here to help you plan your perfect trip</p>
      </div>
    </section>
  );
}

export default PageHeader;
