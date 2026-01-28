import React from "react";
import WhyChooseUs from "./WhyChooseUs";
import whyChooseUsInfo from "./whyChooseUsInfo";

function WhyChooseUsSection() {
  return (
    <section
      className="py-5"
      style={{ background: "linear-gradient(135deg, #02C7E8, #212529)" }}
    >
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">Why Choose Us</h2>
        <p className="mb-5 opacity-75">
          We make your journeys memorable with comfort, safety, and expert
          planning.
        </p>

        <div className="row justify-content-center g-4">
          {/* Expert Guides */}
          <WhyChooseUs
            title={whyChooseUsInfo[0].title}
            desc={whyChooseUsInfo[0].desc}
          />
          {/* Best Prices */}
          <WhyChooseUs
            title={whyChooseUsInfo[1].title}
            desc={whyChooseUsInfo[1].desc}
          />
          {/* Safe Travel */}
          <WhyChooseUs
            title={whyChooseUsInfo[2].title}
            desc={whyChooseUsInfo[2].desc}
          />
          {/* 24/7 Support */}
          <WhyChooseUs
            title={whyChooseUsInfo[3].title}
            desc={whyChooseUsInfo[3].desc}
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
