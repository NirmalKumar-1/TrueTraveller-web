import React from "react";
import { useState } from "react";
import packages from "./packages";

function AllPKGSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(packages.length / itemsPerPage);
  const currentPackages = packages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">All Travel Packages</h2>

        <div className="row g-4">
          {currentPackages.map((pkg, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="card shadow text-center h-100">
                <img
                  src={pkg.img}
                  alt={pkg.name}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h6 className="fw-bold">{pkg.name}</h6>
                  <p className="text-primary fw-bold">{pkg.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <nav className="mt-5">
          <ul className="pagination justify-content-center">
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              return (
                <li
                  key={page}
                  className={`page-item ${currentPage === page ? "active" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default AllPKGSection;
