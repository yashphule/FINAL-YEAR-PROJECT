import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Your Health, Our Priority",
      description: "Experience world-class healthcare with our expert doctors and state-of-the-art facilities. Book your appointment in just a few clicks.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Book Appointments Instantly",
      description: "Skip the queues. Connect with top doctors online and get the care you deserve, anytime, anywhere.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Healthcare Made Simple",
      description: "From consultation to treatment, we've got you covered. Your wellness journey starts here.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="top-bar">
          <div className="contact-info">
            <span className="contact-item">
              <span className="icon">📞</span>
              <span>+91 20 1234 5678</span>
            </span>
            <span className="contact-item">
              <span className="icon">✉️</span>
              <span>contact@healthmate.com</span>
            </span>
            <span className="contact-item">
              <span className="icon">📍</span>
              <span>Pune, Maharashtra</span>
            </span>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon facebook" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="social-icon twitter" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="social-icon instagram" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>
          </div>
        </div>

        <nav className="navbar">
          <div className="logo">
            <span className="logo-icon">🏥</span>
            <span className="logo-text">HealthMate</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="auth-buttons">
            <button className="login-btn" onClick={() => navigate('/login')}>
              <span>Login</span>
            </button>
            <button className="signup-btn" onClick={() => navigate('/signup')}>
              <span>Sign Up</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ background: slides[currentSlide].gradient }}>
        <button className="slider-btn prev" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="slider-btn next" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className="hero-content">
          <div className="hero-text">
            <div className="badge">🎯 Trusted by 10,000+ Patients</div>
            <h1 className="hero-title">{slides[currentSlide].title}</h1>
            <p className="hero-description">{slides[currentSlide].description}</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => navigate('/appointment')}>
                <span>Book Appointment</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <button className="btn btn-secondary">
                <span>Learn More</span>
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Expert Doctors</p>
              </div>
              <div className="stat">
                <h3>10K+</h3>
                <p>Happy Patients</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="floating-card card-1">
                <span className="card-icon">💊</span>
                <span className="card-text">Medicines</span>
              </div>
              <div className="floating-card card-2">
                <span className="card-icon">🩺</span>
                <span className="card-text">Checkup</span>
              </div>
              <div className="floating-card card-3">
                <span className="card-icon">📋</span>
                <span className="card-text">Reports</span>
              </div>
              <img src="https://via.placeholder.com/500x600/f0f0f0/666?text=Doctor" alt="Doctor" />
            </div>
          </div>
        </div>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Info Cards */}
      <section className="info-cards">
        <div className="card card-emergency">
          <div className="card-icon-wrapper">
            <div className="card-icon">📞</div>
          </div>
          <div className="card-content">
            <h3>Emergency Call</h3>
            <p className="card-number">+91 20 1234 5678</p>
            <p className="card-subtitle">Available 24/7</p>
          </div>
        </div>

        <div className="card card-location">
          <div className="card-icon-wrapper">
            <div className="card-icon">📍</div>
          </div>
          <div className="card-content">
            <h3>Our Location</h3>
            <p className="card-number">Pune, Maharashtra</p>
            <p className="card-subtitle">India</p>
          </div>
        </div>

        <div className="card card-ambulance">
          <div className="card-icon-wrapper">
            <div className="card-icon">🚑</div>
          </div>
          <div className="card-content">
            <h3>Ambulance</h3>
            <p className="card-number">+91 20 1234 5678</p>
            <p className="card-subtitle">Emergency Service</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="section-header">
          <span className="section-badge">Simple Process</span>
          <h2>How It Works!</h2>
          <p>Get started with HealthMate in just 3 simple steps</p>
        </div>
        
        <div className="steps">
          <div className="step">
            <div className="step-number">
              <span>01</span>
            </div>
            <div className="step-icon">👤</div>
            <h3>Create Account</h3>
            <p>Sign up as a patient or doctor in seconds</p>
          </div>
          
          <div className="step-connector"></div>
          
          <div className="step">
            <div className="step-number">
              <span>02</span>
            </div>
            <div className="step-icon">📅</div>
            <h3>Book Appointment</h3>
            <p>Choose your preferred doctor and time slot</p>
          </div>
          
          <div className="step-connector"></div>
          
          <div className="step">
            <div className="step-number">
              <span>03</span>
            </div>
            <div className="step-icon">💊</div>
            <h3>Get Treatment</h3>
            <p>Visit the hospital or consult online</p>
          </div>
        </div>

        <div className="cta-section">
          <button className="cta-btn" onClick={() => navigate('/signup')}>
            Get Started Now
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🏥</span>
              <span className="logo-text">HealthMate</span>
            </div>
            <p>Your trusted partner in healthcare. Book appointments with top doctors instantly.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Doctors</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📞 +91 20 1234 5678</li>
              <li>✉️ contact@healthmate.com</li>
              <li>📍 Pune, Maharashtra</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 HealthMate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;