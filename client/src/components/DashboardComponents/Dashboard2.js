import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import './Dashboard.css';

class Dashboard extends React.Component {
  render() {
    const queryParams = new URLSearchParams(window.location.search);
    const user = queryParams.get('username');
    return (
      <div className="dashboard-container">
        <DashboardNavbar />
        <div className="main-content">
          <h1>Welcome, {user} to Gallery Gateway</h1>
        </div>
      </div>
    );
  }
}

export default Dashboard;
