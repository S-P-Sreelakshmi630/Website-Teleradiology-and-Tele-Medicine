import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication data if needed (e.g., tokens)
    // Redirect to login page
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MEDI-CONNECT</div>
      <ul className="navbar-links">
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
