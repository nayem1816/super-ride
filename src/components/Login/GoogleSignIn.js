import React from "react";
import { Link } from "react-router-dom";
import "./GoogleSignIn.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";

const GoogleSignIn = () => {
  return (
    <div>
      <div className="">
        <h4>Or</h4>
      </div>
      <div className="mt-4">
        <Link className="btn google-btn-style"><FontAwesomeIcon className="fb-Icon" icon={faGoogle} size="2x" /><span>Continue with Google</span></Link>
      </div>
    </div>
  );
};

export default GoogleSignIn;
