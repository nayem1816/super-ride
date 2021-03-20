import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { userContext } from "../../App";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
    success: false,
  });
  const getDataOnBlur = (e) => {
    let isValid = true;
    if (e.target.name === "email") {
      const validEmail = /\S+@\S+\.\S+/.test(e.target.value);
      isValid = validEmail;
    }
    if (e.target.name === "password") {
      const validPasswordLength = e.target.value.length >= 6;
      const validPassword = /(?=.*\d)/.test(e.target.value);
      isValid = validPassword && validPasswordLength;
    }
    if (isValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handelFormSubmit = (e) => {
    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          const newUserInfo = { ...user };
          newUserInfo.success = true;
          newUserInfo.message = "";
          setUser(newUserInfo);
          const {displayName, email} = userCredential.user;
          const SignedInUser = {name: displayName, email}
          setLoggedInUser(SignedInUser);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          const errorMessage = error.message;
          newUserInfo.message = errorMessage;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };
  return (
    <div className="">
      <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
        {user.message}
      </p>
      {user.success && (
        <p style={{ color: "green", textAlign: "center", marginTop: "10px" }}>
          User Login Successfully
        </p>
      )}
      <div className="d-flex justify-content-center mt-2">
        <form className="form-style p-3" onSubmit={handelFormSubmit}>
          <h2 className="mb-4">Login</h2>
          <input
            onBlur={getDataOnBlur}
            className="email mb-3"
            name="email"
            type="text"
            placeholder="Email"
          />
          <br />
          <input
            onBlur={getDataOnBlur}
            className="password mb-3"
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />
          <br />
          <input type="checkbox" name="remember" id="" />
          <label htmlFor="remember" className="remember-me-style">
            Remember Me
          </label>
          <Link to="" className="forget-style">
            Forgot Password
          </Link>
          <br />
          <input
            className="mt-2 mb-3 submit-btn btn"
            type="submit"
            value="Login"
          />
          <br />
          <p className="text-center">
            Don’t have an account?
            <Link to="" style={{ color: "#F47040" }} to="/signUp">
              Create an account
            </Link>
          </p>
        </form>
      </div>
      <div className="google-part">
        <GoogleSignIn></GoogleSignIn>
      </div>
    </div>
  );
};

export default Login;
