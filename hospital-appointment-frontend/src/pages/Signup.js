import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('patient');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    // Doctor specific fields
    specialization: '',
    licenseNumber: '',
    experience: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Mock registration - replace with actual API call
    console.log('Registration data:', { ...formData, userType });
    alert(`${userType === 'doctor' ? 'Doctor' : 'Patient'} registered successfully!`);
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="auth-container signup-container">
        <div className="auth-header">
          <h1>❤️ HealthMate</h1>
          <p>Create Your Account</p>
        </div>

        <div className="user-type-selector">
          <button
            className={`type-btn ${userType === 'patient' ? 'active' : ''}`}
            onClick={() => setUserType('patient')}
          >
            👤 Patient Signup
          </button>
          <button
            className={`type-btn ${userType === 'doctor' ? 'active' : ''}`}
            onClick={() => setUserType('doctor')}
          >
            👨‍⚕️ Doctor Signup
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {userType === 'doctor' && (
            <>
              <div className="form-group">
                <label>Specialization</label>
                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Specialization</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="general">General Medicine</option>
                </select>
              </div>

              <div className="form-group">
                <label>Medical License Number</label>
                <input
                  type="text"
                  name="licenseNumber"
                  placeholder="Enter your license number"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Years of Experience</label>
                <input
                  type="number"
                  name="experience"
                  placeholder="Years of experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" required />
              I agree to Terms & Conditions
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Sign Up as {userType === 'doctor' ? 'Doctor' : 'Patient'}
          </button>
        </form>

        <div className="auth-footer">
          <p>Already have an account? <a href="/login">Login</a></p>
          <p><a href="/">← Back to Home</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;