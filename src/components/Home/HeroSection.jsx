import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section
      className="position-relative d-flex align-items-center text-white py-5"
      style={{
        minHeight: "80vh",
        backgroundImage:
          "url(https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "#04030091",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        className="container text-center position-relative"
        style={{ zIndex: 2, position: "relative" }}
      >
        <h1
          className="fw-bold"
          style={{
            fontFamily: "Bonheur Royale",
            fontSize: "clamp(42px, 8vw, 100px)",
            color: "#ffffff",
          }}
        >
          Explore The World
        </h1>

        <p
          className="lead"
          style={{ fontSize: "clamp(18px, 3vw, 30px)", color: "#ffffffcc" }}
        >
          Discover amazing places with us and explore unforgettable journeys
          around the world.
        </p>

        <p
          className="mb-4"
          style={{
            letterSpacing: "1px",
            color: "#ffffffcc",
            fontSize: "clamp(14px, 2vw, 18px)",
          }}
        >
          Travel with comfort, safety, and unforgettable experiences curated by
          experts.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Link to="/packages">
            <button
              className="btn btn-primary btn-lg"
              style={{ color: "#ffffffbb" }}
            >
              Explore Now
            </button>
          </Link>
          <Link to="/contact">
            <button className="btn btn-outline-light btn-lg">Contact Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
