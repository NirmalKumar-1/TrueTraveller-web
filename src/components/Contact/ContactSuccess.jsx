import { Link } from "react-router-dom";

function ContactSuccess() {
  return (
    <div className="container py-5 text-center">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <h2 className="fw-bold text-success mb-3">
            ✅ Message Sent Successfully
          </h2>

          <p className="lead">
            Thank you for contacting <strong>TrueTraveller</strong>. Our team
            has received your message and will get back to you within{" "}
            <strong>24 hours</strong>.
          </p>

          <div className="alert alert-success mt-4">
            📩 Please keep an eye on your email for our response.
          </div>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <Link to="/" className="btn btn-primary">
              🌍 Go to Home
            </Link>
            <Link to="/destinations" className="btn btn-outline-secondary">
              ✈️ Explore Destinations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSuccess;
