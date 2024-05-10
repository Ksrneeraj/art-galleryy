import React, { useState } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/DashboardComponents/Profile';
import Dashboard2 from './components/DashboardComponents/Dashboard2';
import MyBillings from './components/DashboardComponents/MyBillings';
import MyCart from './components/DashboardComponents/MyCart';
import Logout from './components/DashboardComponents/Logout';
import AddArtwork from './components/DashboardComponents/AddArtwork';
import MyArts from './components/DashboardComponents/MyArts';
import UpdateArtwork from './components/DashboardComponents/UpdateArtwork';

function App() {
 const [username, setUsername] = useState(null);

 const handleLogin = (user) => {
    setUsername(user);
 };
 

 return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Login" element={<Login setUserData={handleLogin} />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/About" element={<About />} />
          <Route path="/dashboard" element={<Dashboard2 user={username} />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/billings" element={<MyBillings />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/addart" element={<AddArtwork />} />
          <Route path="/MyArts" element={<MyArts/>} />
          <Route path="/updateartwork" element={<UpdateArtwork/>} />
        </Routes>
      </div>
    </Router>
 );
}

export default App;
