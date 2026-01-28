import React from "react";
import { Link } from "react-router-dom";
import closeMenu from "./closeMenuFunc";

function Navlinks() {
  return (
    <div className="collapse navbar-collapse text-center" id="navbarNav">
      <ul className="navbar-nav ms-auto gap-3">
        <li className="nav-item options">
          <Link className="nav-link" to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li className="nav-item options">
          <Link className="nav-link" to="/destinations" onClick={closeMenu}>
            Destinations
          </Link>
        </li>

        <li className="nav-item options">
          <Link className="nav-link" to="/packages" onClick={closeMenu}>
            Travel Packages
          </Link>
        </li>

        <li className="nav-item options">
          <Link className="nav-link" to="/about" onClick={closeMenu}>
            About Us
          </Link>
        </li>

        <li className="nav-item options">
          <Link className="nav-link" to="/guides" onClick={closeMenu}>
            Travel Guides
          </Link>
        </li>

        <li className="nav-item options">
          <Link className="nav-link" to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>
        </li>

        <li className="nav-item options">
          <Link className="nav-link" to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navlinks;
