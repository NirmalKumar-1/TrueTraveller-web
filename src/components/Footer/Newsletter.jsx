import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Newsletter() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // HTML required already validates empty email
    if (!email) return;

    navigate("/subscribed");
  };
  return (
    <>
      <div className="col-12 col-md-5 mb-4">
        <h4 className="fw-semibold mb-3">Newsletter</h4>
        <p>Subscribe to get travel deals and updates.</p>

        <div className="row">
          <form action="" className="d-flex" onSubmit={handleSubmit}>
            <div className="col-8 pe-1">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-4 ps-1">
              {/*  */}
              <button className="btn btn-primary w-100">Subscribe</button>
            </div>
          </form>
        </div>

        {/* Social Icons */}
        <div className="row mt-3">
          <div className="col d-flex gap-3 fs-5">
            <i
              className="bi bi-airplane-fill text-success"
              style={{ cursor: "pointer" }}
            ></i>
            <i
              className="bi bi-discord text-primary"
              style={{ cursor: "pointer" }}
            ></i>
            <i
              className="bi bi-geo-alt-fill text-danger"
              style={{ cursor: "pointer" }}
            ></i>
            <i
              className="bi bi-twitter-x text-light"
              style={{ color: "#9d9414", cursor: "pointer" }}
            ></i>
            <i
              className="bi bi-instagram"
              style={{ color: "#ed15b3", cursor: "pointer" }}
            ></i>
            <i
              className="bi bi-facebook"
              style={{ color: "#1560ed", cursor: "pointer" }}
            ></i>
            <i
              className="bi bi-whatsapp text-success"
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
