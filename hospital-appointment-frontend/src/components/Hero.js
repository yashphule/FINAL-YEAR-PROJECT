import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="trust-badge">
            <span className="badge-icon">✓</span>
            <span>Trusted by 10,000+ Patients</span>
          </div>
          
          <h1 className="hero-title">
            Your Health, Our Priority
          </h1>
          
          <p className="hero-description">
            Experience world-class healthcare with our expert doctors and state-of-the-art facilities. 
            Book your appointment in just a few clicks.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">
              Book Appointment →
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Doctors</p>
            </div>
            <div className="stat-item">
              <h3>10K+</h3>
              <p>Happy Patients</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card card-reports">
            <span className="card-icon">📋</span>
            <span>Reports</span>
          </div>
          <div className="floating-card card-medicines">
            <span className="card-icon">💊</span>
            <span>Medicines</span>
          </div>
          <div className="floating-card card-checkup">
            <span className="card-icon">🩺</span>
            <span>Checkup</span>
          </div>
          <img src="/doctor.png" alt="Doctor" className="doctor-image" />
        </div>
      </div>
      
      <div className="carousel-controls">
        <button className="carousel-btn prev">‹</button>
        <button className="carousel-btn next">›</button>
      </div>
    </section>
  );
};

export default Hero;
