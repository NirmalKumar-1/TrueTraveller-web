import React from "react";
import PageHeaderSection from "./PageHeaderSection";
import AllDestSection from "./AllDestSection";
import MapSection from "./MapSection";

function Destinations() {
  return (
    <>
      {/* ===== PAGE HEADER / BANNER ===== */}
      <PageHeaderSection />

      {/* ===== ALL DESTINATIONS GRID ===== */}
      <AllDestSection />

      {/* ===== MAP SECTION ===== */}
      <MapSection />
    </>
  );
}

export default Destinations;
