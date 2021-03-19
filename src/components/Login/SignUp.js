import React from "react";
import { Link } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";
import "./Login.css";

const SignUp = () => {
    const getDataOnBlur = (e) => {
        let isValid = true;
        if (e.target.name === 'email') {
            const validEmail = /\S+@\S+\.\S+/.test(e.target.value);
            isValid = validEmail;
        }
        if (e.target.name === 'password') {
            const validPasswordLength = e.target.value.length >=6;
            const validPassword = /(?=.*\d)/.test(e.target.value);
            isValid = validPassword && validPasswordLength;
        }
        if (isValid) {
            console.log("submit");
        }
    }
  return (
    <div className="">
      <div className="d-flex justify-content-center mt-5">
        <form className="form-style p-3" action="">
          <h2 className="mb-4">Create an account</h2>
          <input onBlur={getDataOnBlur} className="name mb-3" type="text" name="name" placeholder="Name" required />
          <br />
          <input onBlur={getDataOnBlur}
            className="email mb-3"
            type="text" name="email"
            placeholder="Email" required
          />
          <br />
          <input onBlur={getDataOnBlur}
            className="password mb-3"
            type="password"
            name="password"
            id=""
            placeholder="Password" required
          />
          <br />
          <input onBlur={getDataOnBlur}
            className="password mb-3"
            type="password"
            name="password"
            id=""
            placeholder="Confirm Password" required
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
            <Link to='' style={{ color: "#F47040" }} to="/login">
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
