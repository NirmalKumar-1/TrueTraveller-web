import React from "react";
import { useNavigate } from "react-router-dom";

function ContactInfo() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh
    navigate("/contact-success"); // redirect
  };
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-5">
          {/* LEFT: CONTACT DETAILS */}
          <div className="col-md-5">
            <div className="p-4 rounded shadow-sm bg-light h-100">
              <h4 className="fw-bold mb-4">📬 Get in Touch</h4>

              <div className="d-flex align-items-start mb-3">
                <span className="fs-4 me-3">📍</span>
                <div>
                  <p className="fw-semibold mb-1">Office Address</p>
                  <p className="text-muted mb-0">
                    123 Travel Street, Mumbai, India
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <span className="fs-4 me-3">📞</span>
                <div>
                  <p className="fw-semibold mb-1">Phone</p>
                  <p className="text-muted mb-0">+91 98765 43210</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <span className="fs-4 me-3">✉️</span>
                <div>
                  <p className="fw-semibold mb-1">Email</p>
                  <p className="text-muted mb-0">support@truetraveller.com</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <span className="fs-4 me-3">⏰</span>
                <div>
                  <p className="fw-semibold mb-1">Working Hours</p>
                  <p className="text-muted mb-0">
                    Mon – Sat: 9:00 AM – 7:00 PM
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3 fs-4">
                <i className="fab fa-facebook text-primary"></i>
                <i className="fab fa-instagram text-danger"></i>
                <i className="fab fa-twitter text-info"></i>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="col-md-7">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="fw-bold mb-4">Send a Message</h4>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      minLength={3}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      required
                      minLength={10}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      required
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Message"
                      required
                      minLength={3}
                    ></textarea>
                  </div>

                  <button className="btn btn-primary w-100">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
