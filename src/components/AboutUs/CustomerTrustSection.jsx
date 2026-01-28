import React from "react";
import Review from "./Review";
import reviews from "./reviews";

function CustomerTrustSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h3 className="fw-bold text-center mb-3">
          Trusted by Travellers Worldwide
        </h3>
        <p className="text-muted text-center mb-5">
          Real experiences from people who explored the world with us
        </p>

        <div className="row g-4">
          {/* Review 1 */}
          <Review
            image={reviews[0].image}
            name={reviews[0].name}
            location={reviews[0].location}
            review={reviews[0].review}
          />

          {/* Review 2 */}
          <Review
            image={reviews[1].image}
            name={reviews[1].name}
            location={reviews[1].location}
            review={reviews[1].review}
          />

          {/* Review 3 */}
          <Review
            image={reviews[2].image}
            name={reviews[2].name}
            location={reviews[2].location}
            review={reviews[2].review}
          />
        </div>
      </div>
    </section>
  );
}

export default CustomerTrustSection;
