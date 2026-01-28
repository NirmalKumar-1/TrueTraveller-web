import React from "react";
import HeroSection from "./HeroSection";
import OurStorySection from "./OurStorySection";
import OurMissionSection from "./OurMissionSection";
import CustomerTrustSection from "./CustomerTrustSection";

function AboutUs() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection />

      {/* OUR STORY */}
      <OurStorySection />

      {/* OUR MISSION */}
      <OurMissionSection />

      {/* CUSTOMER TRUST */}
      <CustomerTrustSection />
    </>
  );
}

export default AboutUs;
