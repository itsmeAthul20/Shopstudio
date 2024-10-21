import React from 'react';
import '../Styles/Footer.css'; 


const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-container">
   
        <div className="footer-section about">
          <h2>ShopStudio</h2>
          <p>ShopStudio is your one-stop shop for the best products, carefully curated and delivered to your doorstep.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/About">About Us</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/Homw">Home</a></li>
          </ul>
        </div>

       
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 ShopStudio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
