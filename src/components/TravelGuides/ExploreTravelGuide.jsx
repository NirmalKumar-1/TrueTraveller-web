import React from "react";

function ExploreTravelGuide() {
  return (
    <div className="container py-5">
      {/* HEADER */}
      <div className="text-center mb-5 mt-5">
        <h1 className="fw-bold">🌍 Travel Guides</h1>
        <p className="text-muted fs-5">
          Discover hand-picked travel guides, itineraries, and expert tips to
          help you plan unforgettable journeys.
        </p>
      </div>

      {/* DESTINATION CARDS */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img
              src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg"
              className="card-img-top"
              alt="Paris"
            />
            <div className="card-body">
              <h5 className="fw-bold">Paris</h5>
              <p className="text-muted">
                A complete guide to the City of Lights.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img
              src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
              className="card-img-top"
              alt="Bali"
            />
            <div className="card-body">
              <h5 className="fw-bold">Bali</h5>
              <p className="text-muted">
                Tropical escapes, culture, and adventure.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img
              src="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg"
              className="card-img-top"
              alt="Dubai"
            />
            <div className="card-body">
              <h5 className="fw-bold">Dubai</h5>
              <p className="text-muted">
                Luxury travel, shopping, and modern wonders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RULES & GUIDELINES */}
      <div className="mt-5">
        <h3 className="fw-bold text-center mb-4">
          📌 Travel Rules & Guidelines
        </h3>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-semibold mb-3">🛂 Documentation</h5>
              <ul className="text-muted mb-0">
                <li>Carry a valid passport and visa (if required)</li>
                <li>Keep digital and physical copies of documents</li>
                <li>Ensure passport validity is at least 6 months</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-semibold mb-3">💉 Health & Safety</h5>
              <ul className="text-muted mb-0">
                <li>Check vaccination requirements for your destination</li>
                <li>Carry necessary medications and prescriptions</li>
                <li>Follow local safety guidelines and laws</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-semibold mb-3">🏨 Accommodation</h5>
              <ul className="text-muted mb-0">
                <li>Confirm hotel bookings before travel</li>
                <li>Check check-in and check-out timings</li>
                <li>Review cancellation policies carefully</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-semibold mb-3">💳 Payments & Budget</h5>
              <ul className="text-muted mb-0">
                <li>Carry international cards and local currency</li>
                <li>Inform your bank before international travel</li>
                <li>Track expenses to stay within budget</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreTravelGuide;
