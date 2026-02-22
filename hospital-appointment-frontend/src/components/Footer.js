import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">
            <span className="logo-icon">🏥</span>
            HealthMate
          </h3>
          <p className="footer-description">
            Your trusted healthcare partner providing world-class medical services 
            with compassion and excellence.
          </p>
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#twitter" aria-label="Twitter">🐦</a>
            <a href="#instagram" aria-label="Instagram">📷</a>
            <a href="#linkedin" aria-label="LinkedIn">in</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Our Doctors</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#appointments">Book Appointment</a></li>
            <li><a href="#emergency">Emergency Care</a></li>
            <li><a href="#diagnostics">Diagnostics</a></li>
            <li><a href="#pharmacy">Pharmacy</a></li>
            <li><a href="#telemedicine">Telemedicine</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-list">
            <li>
              <span className="icon">📍</span>
              Pune, Maharashtra, India
            </li>
            <li>
              <span className="icon">📞</span>
              +91 20 1234 5678
            </li>
            <li>
              <span className="icon">✉️</span>
              contact@healthmate.com
            </li>
            <li>
              <span className="icon">🕐</span>
              24/7 Available
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 HealthMate. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
