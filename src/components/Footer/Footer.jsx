import React from "react";
import Brand from "./Brand";
import QuickLinks from "./QuickLinks";
import Newsletter from "./Newsletter";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          {/* Brand */}
          <Brand />

          {/* Quick Links */}
          <QuickLinks />

          {/* Newsletter */}
          <Newsletter />
        </div>

        <hr className="border-secondary my-4" />

        <p className="text-center mb-0 pb-4">
          © {new Date().getFullYear()} TrueTraveller. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
