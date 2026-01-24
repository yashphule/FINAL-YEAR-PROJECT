import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const PatientDashboard = () => {
  const navigate = useNavigate();

  const myAppointments = [
    { id: 1, doctor: 'Dr. Rajesh Mehta', specialty: 'Cardiology', time: '10:00 AM', date: '2024-01-20', status: 'Upcoming' },
    { id: 2, doctor: 'Dr. Sneha Desai', specialty: 'Dermatology', time: '03:00 PM', date: '2024-01-18', status: 'Completed' },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">❤️ HealthMate</div>
        <nav className="sidebar-nav">
          <a href="#" className="active">📊 Dashboard</a>
          <a href="#">📅 My Appointments</a>
          <a href="#">🔍 Find Doctors</a>
          <a href="#">📄 Medical Records</a>
          <a href="#">⚙️ Settings</a>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Patient Dashboard</h1>
          <div className="user-info">
            <span>Yash Phule</span>
            <div className="avatar">👤</div>
          </div>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Upcoming Appointments</h3>
            <p className="stat-number">1</p>
          </div>
          <div className="stat-card">
            <h3>Completed Visits</h3>
            <p className="stat-number">5</p>
          </div>
          <div className="stat-card">
            <h3>Prescriptions</h3>
            <p className="stat-number">3</p>
          </div>
          <div className="stat-card">
            <h3>Reports</h3>
            <p className="stat-number">8</p>
          </div>
        </div>

        <div className="quick-actions">
          <button className="action-card" onClick={() => navigate('/appointment')}>
            <span className="action-icon">📅</span>
            <h3>Book Appointment</h3>
            <p>Schedule a new appointment</p>
          </button>
          <button className="action-card">
            <span className="action-icon">🔍</span>
            <h3>Find Doctors</h3>
            <p>Search for specialists</p>
          </button>
          <button className="action-card">
            <span className="action-icon">📄</span>
            <h3>View Reports</h3>
            <p>Access medical records</p>
          </button>
        </div>

        <div className="appointments-section">
          <h2>My Appointments</h2>
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Specialty</th>
                <th>Time</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myAppointments.map(apt => (
                <tr key={apt.id}>
                  <td>{apt.doctor}</td>
                  <td>{apt.specialty}</td>
                  <td>{apt.time}</td>
                  <td>{apt.date}</td>
                  <td>
                    <span className={`status ${apt.status.toLowerCase()}`}>
                      {apt.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-btn">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;