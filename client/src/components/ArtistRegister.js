import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [artistName, setArtistName] = useState('');
  const [study, setStudy] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Perform validation here
    if (username && email && password && rePassword && artistName && study && age && gender && mobileNumber) {
      if (password === rePassword) {
        // You can perform additional validation if needed
        // If everything is valid, you can navigate to the next page
        navigate('/next-page');
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("All fields are required");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-md-7 intro-section">
            <div className="intro-content-wrapper">
              <h1 className="intro-title">Welcome to Gallery Gateway</h1>
            </div>
          </div>
          <div className="col-sm-6 col-md-5 form-section">
            <div className="login-wrapper">
              <h2 className="login-title">Register</h2>
              <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Re-type Password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} required />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Artist Name" value={artistName} onChange={(e) => setArtistName(e.target.value)} required />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Study" value={study} onChange={(e) => setStudy(e.target.value)} required />
                </div>
                <div className="form-group">
                  <input type="number" className="form-control" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
                </div>
                <div className="form-group">
                  <select className="form-control" value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="tel" className="form-control" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <input type="submit" className="btn login-btn" value="Register" />
                  <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
                </div>
              </form>
              <p className="login-wrapper-footer-text">Already have an account? <Link to="/login" className="text-reset">Login here</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
