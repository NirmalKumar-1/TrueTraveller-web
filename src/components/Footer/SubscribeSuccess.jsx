import { Link } from "react-router-dom";

function SubscribeSuccess() {
  return (
    <div className="container text-center py-5">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <h2 className="fw-bold text-success mb-3">
            🎉 Subscription Successful!
          </h2>

          <p className="lead mb-4">
            Thank you for subscribing to the{" "}
            <strong>TrueTraveller Newsletter</strong>. You’ll now receive
            exclusive travel deals, destination guides, and insider tips
            directly to your inbox.
          </p>

          <div className="card border-success shadow-sm mt-4 text-center">
            <div className="card-body">
              <h5 className="fw-bold text-success mb-4">
                📬 What to expect in your inbox
              </h5>

              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  💸 <strong>Exclusive Deals</strong>
                  <br />
                  <small className="text-muted">
                    Best travel offers & discounts
                  </small>
                </li>

                <li className="mb-3">
                  🗺️ <strong>Top Destinations</strong>
                  <br />
                  <small className="text-muted">
                    Curated itineraries & guides
                  </small>
                </li>

                <li className="mb-3">
                  ✈️ <strong>Expert Tips</strong>
                  <br />
                  <small className="text-muted">Smart travel advice</small>
                </li>

                <li>
                  🚀 <strong>Early Access</strong>
                  <br />
                  <small className="text-muted">
                    Be first to explore new trips
                  </small>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-muted mt-4">
            Didn’t receive an email? Please check your spam folder or add
            <strong> support@truetraveller.com</strong> to your contacts.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <Link to="/" className="btn btn-primary">
              🌍 Explore Destinations
            </Link>
            <Link to="/contact" className="btn btn-outline-secondary">
              📞 Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeSuccess;
