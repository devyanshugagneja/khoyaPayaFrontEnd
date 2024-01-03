import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../images/home-icon.png';

export default function Navbar() {
  return (
    <div className="fullPage">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={homeIcon} alt="Bootstrap" width="30" height="24" />
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About-Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Adhar Info
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Recognition
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact-Us
                </a>
              </li>

            </ul>
            <span className="navbar-text">
              <Link to="/login">
                <button>Login</button>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}