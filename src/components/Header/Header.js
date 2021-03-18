import React from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          Super Ride
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="" className="nav-link" href="#">
              Home
            </Link>
            <Link to="" className="nav-link" href="#">
              Destination
            </Link>
            <Link to="" className="nav-link" href="#">
              Blog
            </Link>
            <Link to=""
              className="nav-link"
              href="#"
            >
              Contact
            </Link>
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
