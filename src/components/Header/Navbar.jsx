import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./logo.png";
import "../components.css";
import closeMenu from "./closeMenuFunc";
import Navlinks from "./Navlinks";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top px-4"
      style={{ background: "linear-gradient(135deg, #02C7E8, #212529)" }}
    >
      <Link className="navbar-brand fw-bold" to="/" onClick={closeMenu}>
        <img src={logo} alt="logo" style={{ height: "50px", width: "185px" }} />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <Navlinks />
    </nav>
  );
}

export default Navbar;
