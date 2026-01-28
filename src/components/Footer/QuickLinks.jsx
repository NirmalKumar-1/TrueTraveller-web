import React from "react";
import { Link } from "react-router-dom";

function QuickLinks() {
  return (
    <>
      <div className="col-12 col-md-3 mb-4 ps-md-5">
        <h4 className="fw-semibold mb-3">Quick Links</h4>
        <ul className="list-unstyled">
          <li className="mb-2">
            <Link to="/" className="text-decoration-none text-white">
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/destinations"
              className="text-decoration-none text-white"
            >
              Destinations
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/packages" className="text-decoration-none text-white">
              Travel Packages
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-decoration-none text-white">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default QuickLinks;
