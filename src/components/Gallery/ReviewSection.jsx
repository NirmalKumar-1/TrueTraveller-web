import React from "react";
import ReviewBox from "./ReviewBox";
import reviews from "./reviews";

function ReviewSection() {
  return (
    <section className="py-5">
      <div className="container">
        <h3 className="fw-bold text-center mb-5">Shared by Travellers</h3>

        <div className="row g-4">
          {/* Card 1 */}
          <ReviewBox image={reviews[0].img} review={reviews[0].review} />
          {/* Card 2 */}
          <ReviewBox image={reviews[1].img} review={reviews[1].review} />
          {/* Card 3 */}
          <ReviewBox image={reviews[2].img} review={reviews[2].review} />
          {/* Card 4 */}
          <ReviewBox image={reviews[3].img} review={reviews[3].review} />
          {/* Card 5 */}
          <ReviewBox image={reviews[4].img} review={reviews[4].review} />
          {/* Card 6 */}
          <ReviewBox image={reviews[5].img} review={reviews[5].review} />
          {/* Card 7 */}
          <ReviewBox image={reviews[6].img} review={reviews[6].review} />
          {/* Card 8 */}
          <ReviewBox image={reviews[7].img} review={reviews[7].review} />
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
