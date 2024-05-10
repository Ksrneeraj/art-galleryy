import Header from './Header'; // Import the Header component

const Dashboard = () => {
  return (
    <div>
       {/* Include the DashboardNavbar component */}
      <Header /> {/* Include the Header component */}
      <h1>Dashboard</h1>
      {/* Additional dashboard content */}
    </div>
  );
};

export default Dashboard;
