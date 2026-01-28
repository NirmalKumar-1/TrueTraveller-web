import React from "react";
import PhotosSection from "./PhotosSection";
import VideoSection from "./VideoSection";
import ReviewSection from "./ReviewSection";
import HeaderSection from "./HeaderSection";

function Gallery() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <HeaderSection />

      {/* ===== PHOTO MEMORIES ===== */}
      <PhotosSection />

      {/* ===== VIDEO SECTION===== */}
      <VideoSection />

      {/* ===== USER REVIEWS ===== */}
      <ReviewSection />
    </>
  );
}

export default Gallery;
