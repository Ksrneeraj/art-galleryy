import React from 'react';
import { Link } from 'react-router-dom';

const MyCart = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h1 style={{ color: 'red' }}>You are Logged out!</h1>
      <h2><Link to="/">Go back Home</Link></h2>
    </div>
  );
}

export default MyCart;
