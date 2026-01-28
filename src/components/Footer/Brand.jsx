import React from "react";
import logo from "../Header/logo.png";
import { Link } from "react-router-dom";

function Brand() {
  return (
    <>
      <div className="col-12 col-md-4 mb-4">
        <h4 className="fw-bold mb-3">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              style={{ height: "50px", width: "185px" }}
            />
          </Link>
        </h4>
        <p>
          Discover the world with curated travel experiences, expert guides, and
          unforgettable journeys.
        </p>
        <p>
          From weekend getaways to international adventures, we help you travel
          smarter, safer, and with complete peace of mind.
        </p>
      </div>
    </>
  );
}

export default Brand;
