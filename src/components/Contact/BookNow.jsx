import React from "react";
import { useNavigate } from "react-router-dom";

function BookNow() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // stop reload
    navigate("/booking-success"); // redirect page
  };
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h3 className="fw-bold text-center mb-5">Plan Your Trip</h3>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <select className="form-select" defaultValue="" required>
                <option disabled value="">
                  Trip Type
                </option>
                <option>Adventure</option>
                <option>Family</option>
                <option>Honeymoon</option>
              </select>
            </div>

            <div className="col-md-4">
              <select className="form-select" defaultValue="" required>
                <option disabled value="">
                  Destination
                </option>
                <option>Paris</option>
                <option>Bali</option>
                <option>Dubai</option>
              </select>
            </div>

            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                required
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="col-md-4">
              <select className="form-select" defaultValue="" required>
                <option disabled value="">
                  Travellers
                </option>
                <option>1-2</option>
                <option>3-5</option>
                <option>6+</option>
              </select>
            </div>

            <div className="col-md-4">
              <select className="form-select" defaultValue="" required>
                <option disabled value="">
                  Budget
                </option>
                <option>₹50,000</option>
                <option>₹1,00,000</option>
                <option>₹2,00,000+</option>
              </select>
            </div>

            <div className="col-md-4 d-grid">
              <button className="btn btn-success">Book Now</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookNow;
