import React from "react";

function OurStorySection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <img
              src="https://images.pexels.com/photos/16166124/pexels-photo-16166124.jpeg"
              className="img-fluid rounded shadow border-5"
              alt="Our Team"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">
              Our Journey Started With a Passion for Travel
            </h3>
            <p>
              TrueTraveller was founded to make travel simple, safe, and
              unforgettable. We believe travel connects cultures, people, and
              stories.
            </p>
            <ul>
              <li>Trusted travel experts</li>
              <li>Carefully curated destinations</li>
              <li>Customer-first experiences</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStorySection;
