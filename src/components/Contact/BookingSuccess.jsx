function BookingSuccess() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center my-5">
        <div className="col-md-10 text-center">
          <div className="p-5 mt-5 rounded shadow-lg bg-light">
            <h1 className="fw-bold text-success display-4 mb-4">
              🎉 Booking Request Submitted
            </h1>

            <p className="fs-4 mb-4">
              Thank you for choosing <strong>TrueTraveller</strong>. Our travel
              experts are already working on your request and will contact you
              shortly with the best options tailored just for you.
            </p>

            <p className="fs-5 text-muted">
              📞 Please keep your phone handy — we usually respond within
              <strong> 24 hours</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSuccess;
