import React from 'react';
import { Link } from 'react-router-dom';

export default function GalleryNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="/">Gallery Gateway</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  to="/Gallery"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#!">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#!">
                      Popular Items
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#!">
                      New Arrivals
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <Link to="/profile" className="btn btn-outline-dark me-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-7 7v2a7 7 0 0 0 7 7h2a7 7 0 0 0 7-7v-2a7 7 0 0 0-7-7z" />
                </svg>
                Profile
              </Link>
              <Link to="/Cart" className="btn btn-outline-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart-fill"
                  viewBox="0 0 24 24" // Adjusted viewBox
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 0 1.5zm4 0a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm6 0a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5z"/>
                </svg>
                Cart
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
