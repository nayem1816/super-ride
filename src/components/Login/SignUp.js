import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const SignUp = () => {
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
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          updateUserName(user.name);
          const newUserInfo = { ...user };
          newUserInfo.success = true;
          newUserInfo.message = "";
          setUser(newUserInfo);
          const { displayName, email } = userCredential.user;
          const loggedInUser = { name: displayName, email };
          console.log(loggedInUser);
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
  const updateUserName = (name) => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        console.log("Update Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="">
      <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
        {user.message}
      </p>
      {user.success && (
        <p style={{ color: "green", textAlign: "center", marginTop: "10px" }}>
          User Create Successfully <br />
          Now you go to{" "}
          <Link to="" style={{ color: "#F47040" }} to="/login">
            Login
          </Link>{" "}
          page and sign in
        </p>
      )}

      <div className="d-flex justify-content-center mt-2">
        <form className="form-style p-3" onSubmit={handelFormSubmit}>
          <h2 className="mb-4">Create an account</h2>
          <input
            onBlur={getDataOnBlur}
            className="name mb-3"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <br />
          <input
            onBlur={getDataOnBlur}
            className="email mb-3"
            type="text"
            name="email"
            placeholder="Email"
            required
          />
          <br />
          <input
            onBlur={getDataOnBlur}
            className="password mb-3"
            type="password"
            name="password"
            id=""
            placeholder="Password (6 characters and minimum 1 number)"
            required
          />
          <br />
          <input
            onBlur={getDataOnBlur}
            className="password mb-3"
            type="password"
            name="ConfirmPassword"
            id=""
            placeholder="Confirm Password"
            required
          />
          <br />
          <input
            className="mt-2 mb-3 submit-btn btn"
            type="submit"
            value="Create an account"
          />
          <br />
          <p className="text-center">
            Already have an account?
            <Link to="" style={{ color: "#F47040" }} to="/login">
              Login
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

export default SignUp;
