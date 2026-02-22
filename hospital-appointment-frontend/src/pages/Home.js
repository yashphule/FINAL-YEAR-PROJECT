import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive healthcare solutions for you and your family</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🩺</div>
              <h3>General Consultation</h3>
              <p>Expert medical advice from experienced doctors</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔬</div>
              <h3>Diagnostics</h3>
              <p>Advanced diagnostic services and lab tests</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💊</div>
              <h3>Pharmacy</h3>
              <p>Quality medicines delivered to your doorstep</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚑</div>
              <h3>Emergency Care</h3>
              <p>24/7 emergency medical services</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Telemedicine</h3>
              <p>Online consultations from anywhere</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Health Records</h3>
              <p>Secure digital health record management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="doctors" id="doctors">
        <div className="container">
          <h2 className="section-title">Our Expert Doctors</h2>
          <p className="section-subtitle">Meet our team of experienced healthcare professionals</p>
          
          <div className="doctors-grid">
            <div className="doctor-card">
              <div className="doctor-image">👨‍⚕️</div>
              <h3>Dr. Rajesh Kumar</h3>
              <p className="specialty">Cardiologist</p>
              <p className="experience">15+ years experience</p>
              <button className="book-btn" onClick={() => navigate('/appointment')}>Book Appointment</button>
            </div>
            <div className="doctor-card">
              <div className="doctor-image">👩‍⚕️</div>
              <h3>Dr. Priya Sharma</h3>
              <p className="specialty">Pediatrician</p>
              <p className="experience">12+ years experience</p>
              <button className="book-btn" onClick={() => navigate('/appointment')}>Book Appointment</button>
            </div>
            <div className="doctor-card">
              <div className="doctor-image">👨‍⚕️</div>
              <h3>Dr. Amit Patel</h3>
              <p className="specialty">Orthopedic</p>
              <p className="experience">18+ years experience</p>
              <button className="book-btn" onClick={() => navigate('/appointment')}>Book Appointment</button>
            </div>
            <div className="doctor-card">
              <div className="doctor-image">👩‍⚕️</div>
              <h3>Dr. Sneha Desai</h3>
              <p className="specialty">Dermatologist</p>
              <p className="experience">10+ years experience</p>
              <button className="book-btn" onClick={() => navigate('/appointment')}>Book Appointment</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose HealthMate?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Expert Doctors</h3>
              <p>Highly qualified and experienced medical professionals</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏥</div>
              <h3>Modern Facilities</h3>
              <p>State-of-the-art medical equipment and infrastructure</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Affordable Care</h3>
              <p>Quality healthcare at competitive prices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🕐</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock medical assistance and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Book your appointment today and experience quality healthcare</p>
          <button className="cta-btn" onClick={() => navigate('/appointment')}>
            Book Appointment Now →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
