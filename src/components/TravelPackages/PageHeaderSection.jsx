import React from "react";

function PageHeaderSection() {
  return (
    <section className="bg-light py-5">
      <div className="container text-center mt-5">
        <h1 className="fw-bold">Travel Packages</h1>
        <p className="text-muted">Choose your perfect trip</p>

        {/* Search & Filters */}
        <div className="row justify-content-center mt-4 g-3">
          <div className="col-md-4">
            <select className="form-select">
              <option value="" disabled selected>
                Select Destination
              </option>
              <option>Bali, Indonesia</option>
              <option>Dubai, UAE</option>
              <option>Paris, France</option>
              <option>London, UK</option>
              <option>New York, USA</option>
              <option>Santorini, Greece</option>
              <option>Tokyo, Japan</option>
              <option>Maldives</option>
            </select>
          </div>

          <div className="col-md-2">
            <select className="form-select">
              <option value="" disabled selected>
                Package Type
              </option>
              <option>Honeymoon</option>
              <option>Family</option>
              <option>Adventure</option>
              <option>Luxury</option>
              <option>Budget</option>
              <option>Solo</option>
            </select>
          </div>

          <div className="col-md-2">
            <select className="form-select">
              <option value="" disabled selected>
                Duration
              </option>
              <option>1–3 Days</option>
              <option>4–6 Days</option>
              <option>7–9 Days</option>
              <option>10–14 Days</option>
              <option>15+ Days</option>
            </select>
          </div>

          <div className="col-md-2">
            <select className="form-select">
              <option value="" disabled selected>
                Budget
              </option>
              <option>Under ₹50,000</option>
              <option>₹50,000 – ₹1,00,000</option>
              <option>₹1,00,000 – ₹2,00,000</option>
              <option>₹2,00,000 – ₹5,00,000</option>
              <option>₹5,00,000+</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHeaderSection;
