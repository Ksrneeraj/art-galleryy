import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/login.css';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRepass] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (name && email && pass && repass) {
      if (pass === repass) {
        if (pass.length >= 8) {
          setName("");
          setEmail("");
          setPass("");
          setRepass("");
          navigate('/login');
          alert("Account created successfully!");
        } else {
          alert("Password needs to have at least 8 characters");
          setPass("");
          setRepass("");
        }
      } else {
        alert("The passwords do not match");
        setPass("");
        setRepass("");
      }
    } else {
      alert("All values must be filled!");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 col-md-7 intro-section">
          <div className="intro-content-wrapper">
            <h1 className="intro-title">Welcome to Gallery Gateway</h1>
          </div>
          <div className="intro-section-footer">
            <nav className="footer-nav"> {/* Change na to nav */}
              <Link to="#!">Facebook</Link> {/* Replace <a> with <Link> */}
              <Link to="#!">Twitter</Link> {/* Replace <a> with <Link> */}
              <Link to="#!">Gmail</Link> {/* Replace <a> with <Link> */}
            </nav>
          </div>
        </div>
        <div className="col-sm-6 col-md-5 form-section">
          <div className="login-wrapper">
            <h2 className="login-title">Register</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name" className="sr-only">Username</label>
                <input type="text" name="name" id="name" className="form-control" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" className="sr-only">Password</label>
                <input type="password" name="password" id="password" className="form-control" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="re-password" className="sr-only">Confirm Password</label>
                <input type="password" name="re-password" id="re-password" className="form-control" placeholder="Re-type password" value={repass} onChange={(e) => setRepass(e.target.value)} required />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-5">
                <input name="login" id="login" className="btn login-btn" type="button" value="Register" onClick={handleOnSubmit} />
                <Link to="#!" className="forgot-password-link">Forgot Password?</Link> {/* Replace <a> with <Link> */}
              </div>
            </form>
            <p className="login-wrapper-footer-text">Already have an account? <Link to="/Login" className="text-reset">Login here</Link></p> {/* Replace <a> with <Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
