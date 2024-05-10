import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import background from './background.jpg';
import { Paper, Typography } from '@mui/material';

const Profile = ({ username, email }) => {
  // Sample user data
  const user = {
    username: username,
    email: email,
    bio: 'Artist',
    artworkCount: 10 // Static artwork count
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Navbar */}
      <DashboardNavbar />
      {/* Profile */}
      <div style={{ flex: 1, position: 'relative' }}>
        {/* Background Image */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', overflow: 'hidden' }}>
          <img src={background} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* Profile Content */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: '#fff', paddingTop: '100px', width: '100%' }}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', maxWidth: '400px', margin: '0 auto' }}>
            <Typography variant="h4" gutterBottom>Welcome to Your Profile</Typography>
            <div style={{ marginBottom: '20px' }}>
              <Typography variant="h6" gutterBottom>Username:neeraj</Typography>
              <Typography variant="body1">{user.username}</Typography>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Typography variant="h6" gutterBottom>Email:neeraj@gmail.com</Typography>
              <Typography variant="body1">{user.email}</Typography>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Typography variant="h6" gutterBottom>Bio:</Typography>
              <Typography variant="body1">{user.bio}</Typography>
            </div>
            <div>
              <Typography variant="h6" gutterBottom>Artwork Count:</Typography>
              <Typography variant="body1">{user.artworkCount}</Typography>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Profile;
