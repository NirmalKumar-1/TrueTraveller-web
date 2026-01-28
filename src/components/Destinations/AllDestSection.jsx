import React from "react";
import Desti from "./Desti";
import dest from "./dest";

function AllDestSection() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">All Destinations</h2>

        <div className="row g-4">
          {/* Bali */}
          <Desti
            image={dest[0].image}
            alt={dest[0].alt}
            location={dest[0].location}
          />

          {/* Dubai */}
          <Desti
            image={dest[1].image}
            alt={dest[1].alt}
            location={dest[1].location}
          />

          {/* London */}
          <Desti
            image={dest[2].image}
            alt={dest[2].alt}
            location={dest[2].location}
          />

          {/* Paris */}
          <Desti
            image={dest[3].image}
            alt={dest[3].alt}
            location={dest[3].location}
          />

          {/* New York */}
          <Desti
            image={dest[4].image}
            alt={dest[4].alt}
            location={dest[4].location}
          />

          {/* Santorini */}
          <Desti
            image={dest[5].image}
            alt={dest[5].alt}
            location={dest[5].location}
          />

          {/* Tokyo */}
          <Desti
            image={dest[6].image}
            alt={dest[6].alt}
            location={dest[6].location}
          />

          {/* Maldives */}
          <Desti
            image={dest[7].image}
            alt={dest[7].alt}
            location={dest[7].location}
          />
        </div>
      </div>
    </section>
  );
}

export default AllDestSection;
