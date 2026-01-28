import React from "react";
import PopularPKG from "./PopularPKG";
import PopularPkgBox from "./PopularPkgBox";

function PopularPKGSection() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Popular Packages</h2>

        <div className="row g-4">
          {/* Santorini */}
          <PopularPkgBox
            image={PopularPKG[0].image}
            alt={PopularPKG[0].alt}
            location={PopularPKG[0].location}
            duration={PopularPKG[0].duration}
            price={PopularPKG[0].price}
          />

          {/* Tokyo */}
          <PopularPkgBox
            image={PopularPKG[1].image}
            alt={PopularPKG[1].alt}
            location={PopularPKG[1].location}
            duration={PopularPKG[1].duration}
            price={PopularPKG[1].price}
          />

          {/* Maldives */}
          <PopularPkgBox
            image={PopularPKG[2].image}
            alt={PopularPKG[2].alt}
            location={PopularPKG[2].location}
            duration={PopularPKG[2].duration}
            price={PopularPKG[2].price}
          />
        </div>
      </div>
    </section>
  );
}

export default PopularPKGSection;
