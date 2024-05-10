import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import dp from './dp.jpg';

const DashboardNavbar = () => {
 const [showDropdown, setShowDropdown] = useState(false);

 const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
 };

 return (
    <div className="side-navbar">
      <div className="navbar-header">
        <div className="profile-picture-container">
          <img src={dp} alt="Profile picture" className="profile-picture" />
          <span className="edit-icon">Edit</span>
        </div>
      </div>
      <ul>
        <li><Link to="/Profile" className="button">Profile</Link></li>
        <li><Link to="/billings" className="button">My Billings</Link></li>
        <li><Link to="/Gallery" className="button">Shop Now</Link></li>
        <li><Link to="/cart" className="button">My Cart</Link></li>
        <li><Link to="/logout" className="button">Logout</Link></li>
        <li className="dropdown">
          <button className="button" onClick={toggleDropdown}>My Artwork</button>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/MyArts" className="dropdown-item">My Arts</Link>
              <Link to="/addart" className="dropdown-item">Add my Art</Link>
              <Link to="#" className="dropdown-item">Edit Art</Link>
              <Link to="#" className="dropdown-item">Remove my art</Link>
            </div>
          )}
        </li>
      </ul>
    </div>
 );
};

export default DashboardNavbar;
