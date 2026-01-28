import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./HeroSection.jsx";
import PopularDestSection from "./PopularDestSection.jsx";
import WhyChooseUsSection from "./WhyChooseUsSection.jsx";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection />

      {/* POPULAR DESTINATIONS */}
      <PopularDestSection />

      {/* WHY CHOOSE US */}
      <WhyChooseUsSection />
    </>
  );
}

export default Home;
