import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';
import { logout } from '../Config'; 

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout(); 
      navigate('/'); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          <Link to="/Home" className="logo-link">ShopStudio</Link>
        </h1>
      </div>

      {}
      <div className="center-links">
        <Link to="/Home" className="nav-button">Home</Link>
        <Link to="/about" className="nav-button">About Us</Link>
        <Link to="/cart" className="nav-button">Cart</Link>
        <Link to="/contact" className="nav-button">Contact Us</Link>
      </div>

      {}
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>

      {}
      <div className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/login" className="nav-button">Admin</Link>
        <a href="#" onClick={handleLogout} className="nav-button">Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;
