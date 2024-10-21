import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';
import { logout } from '../Config'; 

const Navbar = () => {
  const navigate = useNavigate(); 

  const handleLogout = async () => {
    try {
      await logout(); 
      navigate('/'); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          <Link to="/" className="logo-link">ShopStudio</Link>
        </h1>
      </div>
      <div className="nav-links">
        <Link to="/Home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/contact">Contact Us</Link>
        <a href="#" onClick={handleLogout}>X</a>
      </div>
    </nav>
  );
};

export default Navbar;
