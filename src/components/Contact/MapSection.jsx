import React from "react";

function MapSection() {
  return (
    <section className="py-5">
      <div className="container">
        <h3 className="fw-bold text-center mb-4">Our Location</h3>

        <div className="ratio" style={{ height: "450px" }}>
          <iframe
            src="https://www.google.com/maps?q=Mumbai&output=embed"
            title="map"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
