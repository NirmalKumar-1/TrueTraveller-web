import React from "react";
import PageHeaderSection from "./PageHeaderSection";
import PopularPKGSection from "./PopularPKGSection";
import AllPKGSection from "./AllPKGSection";

function TravelPackages() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <PageHeaderSection />

      {/* ===== FEATURED PACKAGES ===== */}
      <PopularPKGSection />

      {/* ===== ALL PACKAGES ===== */}
      <AllPKGSection />
    </>
  );
}

export default TravelPackages;
