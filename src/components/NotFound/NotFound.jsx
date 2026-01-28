import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-3 fw-bold">404</h1>
      <h3 className="mb-3">Page Not Found</h3>
      <p className="text-muted">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link to="/" className="btn btn-primary mt-3">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;