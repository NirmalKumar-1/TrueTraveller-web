import React from "react";
import photos from "./photos";
import MemoryImgBox from "./MemoryImgBox";

function PhotosSection() {
  return (
    <section className="py-5">
      <div className="container">
        <h3 className="fw-bold text-center mb-5">Travel Memories</h3>

        <div className="row g-3">
          <MemoryImgBox image={photos[0]} />
          <MemoryImgBox image={photos[1]} />
          <MemoryImgBox image={photos[2]} />
          <MemoryImgBox image={photos[3]} />
          <MemoryImgBox image={photos[4]} />
          <MemoryImgBox image={photos[5]} />
          <MemoryImgBox image={photos[6]} />
          <MemoryImgBox image={photos[7]} />
          <MemoryImgBox image={photos[8]} />
          <MemoryImgBox image={photos[9]} />
          <MemoryImgBox image={photos[10]} />
          <MemoryImgBox image={photos[11]} />
        </div>
      </div>
    </section>
  );
}

export default PhotosSection;
