import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { userContext } from "../../App";
import "./Header.css";
import '../../../node_modules/bootstrap/dist/js/bootstrap.min'

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <div className="header-style">
      <div className="container">
        <div className="">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand logo" href="#">
              Super Ride
            </Link>
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
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link to="/home" className="nav-link" href="#">
                  Home
                </Link>
                <Link to="/destination" className="nav-link" href="#">
                  Destination
                </Link>
                <Link to="/blog" className="nav-link" href="#">
                  Blog
                </Link>
                <Link to="/contact" className="nav-link" href="#">
                  Contact
                </Link>
                {loggedInUser.name ? (
                  <Link to="/" className="nav-link" href="#">
                    <h5>{loggedInUser.name}</h5>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="btn login-btn-style">Login</button>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
