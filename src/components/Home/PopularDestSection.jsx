import React from "react";
import PopularDesti from "./PopularDesti";
import dest from "./dest";

function PopularDestSection() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Popular Destinations</h2>

        <div className="row justify-content-center">
          {/* Paris */}
          <PopularDesti
            image={dest[0].image}
            alt={dest[0].alt}
            location={dest[0].location}
            title={dest[0].title}
            price={dest[0].price}
          />

          {/* Bali */}
          <PopularDesti
            image={dest[1].image}
            alt={dest[1].alt}
            location={dest[1].location}
            title={dest[1].title}
            price={dest[1].price}
          />

          {/* Dubai */}
          <PopularDesti
            image={dest[2].image}
            alt={dest[2].alt}
            location={dest[2].location}
            title={dest[2].title}
            price={dest[2].price}
          />
        </div>
      </div>
    </section>
  );
}

export default PopularDestSection;
