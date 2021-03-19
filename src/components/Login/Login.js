import React from "react";
import { Link } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";
import "./Login.css";

const Login = () => {
    const getDataOnBlur = (e) => {
        let isValid = true;
        console.log(e.target.name, e.target.value);
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
            console.log('successfully');
        }
    }
    const handelFormSubmit = () => {

    }
  return (
    <div className="">
      <div className="d-flex justify-content-center mt-5">
        <form className="form-style p-3" onSubmit={handelFormSubmit}>
          <h2 className="mb-4">Login</h2>
          <input onBlur={getDataOnBlur} className="email mb-3" name="email" type="text" placeholder="Email" />
          <br />
          <input onBlur={getDataOnBlur}
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
            <Link to='' style={{ color: "#F47040" }} to="/signUp">
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
