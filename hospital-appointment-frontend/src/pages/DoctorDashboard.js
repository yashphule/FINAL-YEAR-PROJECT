import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const DoctorDashboard = () => {
  const navigate = useNavigate();

  const appointments = [
    { id: 1, patient: 'Rahul Sharma', time: '10:00 AM', date: '2024-01-15', status: 'Confirmed' },
    { id: 2, patient: 'Priya Patel', time: '11:30 AM', date: '2024-01-15', status: 'Pending' },
    { id: 3, patient: 'Amit Kumar', time: '02:00 PM', date: '2024-01-15', status: 'Confirmed' },
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
          <a href="#">📅 Appointments</a>
          <a href="#">👥 Patients</a>
          <a href="#">📝 Prescriptions</a>
          <a href="#">⚙️ Settings</a>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Doctor Dashboard</h1>
          <div className="user-info">
            <span>Dr. Rajesh Mehta</span>
            <div className="avatar">👨‍⚕️</div>
          </div>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Today's Appointments</h3>
            <p className="stat-number">8</p>
          </div>
          <div className="stat-card">
            <h3>Total Patients</h3>
            <p className="stat-number">156</p>
          </div>
          <div className="stat-card">
            <h3>Pending Reviews</h3>
            <p className="stat-number">12</p>
          </div>
          <div className="stat-card">
            <h3>Revenue (Month)</h3>
            <p className="stat-number">₹45,000</p>
          </div>
        </div>

        <div className="appointments-section">
          <h2>Today's Appointments</h2>
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Time</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(apt => (
                <tr key={apt.id}>
                  <td>{apt.patient}</td>
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

export default DoctorDashboard;