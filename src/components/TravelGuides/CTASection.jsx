import React from "react";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <div className="bg-white p-5 mt-5 rounded shadow text-center">
      <h3 className="fw-bold">Ready to Plan Your Next Adventure?</h3>
      <p className="text-muted mt-2">
        Explore our complete collection of travel guides and start your journey
        with confidence. Let us help you turn your travel dreams into
        unforgettable memories.
      </p>
      <Link to="/explore-travel-guide">
        <button className="btn btn-primary btn-lg mt-3">
          Explore All Travel Guides
        </button>
      </Link>
    </div>
  );
}

export default CTASection;
