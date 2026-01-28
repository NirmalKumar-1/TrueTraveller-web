import React from "react";

function IntroSection() {
  return (
    <div className="row align-items-center mb-5">
      <div className="col-md-6">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          className="img-fluid rounded shadow"
          alt="Travel Guide"
        />
      </div>
      <div className="col-md-6">
        <h3 className="fw-bold mb-3 mt-3 mt-md-0">
          Why Follow Our Travel Guides?
        </h3>
        <p>
          Traveling is more than just visiting new places — it’s about creating
          meaningful experiences. Our guides are crafted by travel experts and
          seasoned explorers to ensure you make the most of every journey.
        </p>
        <p>
          Whether you’re a solo traveler, a couple, or a family planning your
          next adventure, our guides cover everything from destination insights
          to hidden gems and local secrets.
        </p>
        <ul className="list-unstyled">
          <li>✔ Expert-curated travel advice</li>
          <li>✔ Budget-friendly and luxury travel tips</li>
          <li>✔ Local culture, food & etiquette</li>
          <li>✔ Safety and travel planning essentials</li>
        </ul>
      </div>
    </div>
  );
}

export default IntroSection;
