import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./GoogleSignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/app";
import "firebase/auth";
import { userContext } from "../../App";

const GoogleSignIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handelGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <div className="">
        <h4>Or</h4>
      </div>
      <div className="mt-4">
        <button onClick={handelGoogleSignIn} className="btn google-btn-style">
          <FontAwesomeIcon className="fb-Icon" icon={faGoogle} size="2x" />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default GoogleSignIn;
