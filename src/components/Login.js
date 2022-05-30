// import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/sidebar");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/sidebar");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="login-wraper">
        <div className="login-img-sec">
          <h1>Student Login</h1>
          <h4>make sure your account is secure</h4>
          <img
            src={process.env.PUBLIC_URL + "/images/Learning-online-05.jpg"}
          />
        </div>
        <div className="login-text">
          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <input
              type="text"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Type Your Password "
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="register-sec">
              <p>Dont have an Account?</p>
              <p className="register">
                <Link to="/register">Register</Link>
              </p>
            </div>
            <button className="btn">Login</button>
            <hr></hr>
            <div className="google-signin">
              <div className="google-logo">
                <img src={process.env.PUBLIC_URL + "/images/google.png"} />
              </div>
              <div className="google-text" onClick={handleGoogleSignIn}>
                <p>Sign In With Google</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
