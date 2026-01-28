import React from "react";
import HeaderSection from "./HeaderSection";
import IntroSection from "./IntroSection";
import CTASection from "./CTASection";
import GuideCardsSection from "./GuideCardsSection";

function TravelGuide() {
  return (
    <section className="py-5 bg-light">
      <div className="container mt-5">
        {/* HEADER */}
        <HeaderSection />

        {/* INTRO CONTENT */}
        <IntroSection />

        {/* GUIDE CARDS */}
        <GuideCardsSection />

        {/* CTA SECTION */}
        <CTASection />
      </div>
    </section>
  );
}

export default TravelGuide;
