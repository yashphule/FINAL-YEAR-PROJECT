import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('patient');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock authentication - replace with actual API call
    if (formData.email && formData.password) {
      if (userType === 'doctor') {
        navigate('/doctor-dashboard');
      } else {
        navigate('/patient-dashboard');
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>❤️ HealthMate</h1>
          <p>Welcome Back!</p>
        </div>

        <div className="user-type-selector">
          <button
            className={`type-btn ${userType === 'patient' ? 'active' : ''}`}
            onClick={() => setUserType('patient')}
          >
            👤 Patient Login
          </button>
          <button
            className={`type-btn ${userType === 'doctor' ? 'active' : ''}`}
            onClick={() => setUserType('doctor')}
          >
            👨‍⚕️ Doctor Login
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
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
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="submit-btn">
            Login as {userType === 'doctor' ? 'Doctor' : 'Patient'}
          </button>
        </form>

        <div className="auth-footer">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          <p><a href="/">← Back to Home</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;