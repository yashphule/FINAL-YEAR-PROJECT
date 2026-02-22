import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <span className="contact-item">
              <span className="icon">📞</span>
              +91 20 1234 5678
            </span>
            <span className="contact-item">
              <span className="icon">✉️</span>
              contact@healthmate.com
            </span>
            <span className="contact-item">
              <span className="icon">📍</span>
              Pune, Maharashtra
            </span>
          </div>
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#twitter" aria-label="Twitter">🐦</a>
            <a href="#instagram" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>
      
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <span className="logo-icon">🏥</span>
            <span className="logo-text">HealthMate</span>
          </div>
          
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link active">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#doctors" className="nav-link">Doctors</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          
          <div className="nav-buttons">
            <button className="btn-login">Login</button>
            <button className="btn-signup">Sign Up</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
