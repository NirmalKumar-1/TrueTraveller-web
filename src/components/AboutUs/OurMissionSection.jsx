import React from "react";
import OurMission from "./OurMission";
import features from "./features";

function OurMissionSection() {
  return (
    <section className="bg-light py-5">
      <div className="container text-center">
        <h3 className="fw-bold mb-3">Our Mission</h3>
        <p className="text-muted mb-5">
          Helping travelers explore the world with confidence, comfort, and
          care.
        </p>

        <div className="row g-4">
          {/* Safe Travel */}
          <OurMission
            emoji={features[0].emoji}
            title={features[0].title}
            desc={features[0].desc}
          />
          {/* Best Pricing */}
          <OurMission
            emoji={features[1].emoji}
            title={features[1].title}
            desc={features[1].desc}
          />
          {/* Expert Guides */}
          <OurMission
            emoji={features[2].emoji}
            title={features[2].title}
            desc={features[2].desc}
          />
        </div>
      </div>
    </section>
  );
}

export default OurMissionSection;
