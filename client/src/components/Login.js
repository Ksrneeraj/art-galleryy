import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/login.css';

export default function Login({ setUserData }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log("Logging in with:", username, email, password);
      // Simulate login (replace with actual login logic later)
      const userData = { username, email }; // Create user data object
      setUserData(userData); // Update parent component state
      navigate(`/dashboard?username=${username}`);
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in");
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted with:", username, email, password); // Check inputs
    handleLogin();
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500&display=swap" rel="stylesheet" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-md-7 intro-section">
            <div className="brand-wrapper">
              {/* <img id='hue360Logo' src={hue360} alt="hue360Logo" /> */}
            </div>
            <div className="intro-content-wrapper">
              <h1 className="intro-title">Welcome to Gallery Gateway</h1>
            </div>
            <div className="intro-section-footer">
              <nav className="footer-nav">
                <a href="#!">Facebook</a>
                <a href="#!">Twitter</a>
                <a href="#!">Gmail</a>
              </nav>
            </div>
          </div>
          <div className="col-sm-6 col-md-5 form-section">
            <div className="login-wrapper">
              <h2 className="login-title">Sign in</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username" className="sr-only">Username</label>
                  <input type="text" name="username" id="username" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" name="email" id="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input type="password" name="password" id="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <button type="submit" className="btn login-btn">Login</button>
                  <Link to="/forgotPassword" className="forgot-password-link">Forgot Password?</Link>
                </div>
              </form>
              <p className="login-wrapper-footer-text">Need an account? <Link to="/register" className="text-reset">Sign-up here</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
