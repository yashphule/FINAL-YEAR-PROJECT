import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const navigate = useNavigate();

  // Government Hospitals in Pune with their doctors
  const hospitals = [
    {
      id: 'sassoon',
      name: 'Sassoon General Hospital',
      departments: [
        {
          name: 'Cardiology',
          doctors: ['Dr. Rajesh Mehta', 'Dr. Suresh Patil', 'Dr. Anjali Deshmukh']
        },
        {
          name: 'Orthopedics',
          doctors: ['Dr. Amit Sharma', 'Dr. Pradeep Kulkarni', 'Dr. Neha Joshi']
        },
        {
          name: 'General Medicine',
          doctors: ['Dr. Vijay Kumar', 'Dr. Sneha Desai', 'Dr. Rahul Pawar']
        },
        {
          name: 'Pediatrics',
          doctors: ['Dr. Priya Patel', 'Dr. Madhuri Bhosale', 'Dr. Sanjay Jadhav']
        },
        {
          name: 'Gynecology',
          doctors: ['Dr. Kavita Rao', 'Dr. Sunita Shinde', 'Dr. Meera Kulkarni']
        },
        {
          name: 'Neurology',
          doctors: ['Dr. Anil Deshmukh', 'Dr. Prakash Gaikwad', 'Dr. Swati Naik']
        },
        {
          name: 'Dermatology',
          doctors: ['Dr. Pooja Sharma', 'Dr. Ramesh Patil', 'Dr. Deepa Joshi']
        },
        {
          name: 'ENT',
          doctors: ['Dr. Sachin Bhosale', 'Dr. Manisha Kulkarni', 'Dr. Nitin Pawar']
        }
      ]
    },
    {
      id: 'yashwantrao',
      name: 'Yashwantrao Chavan Memorial Hospital',
      departments: [
        {
          name: 'Cardiology',
          doctors: ['Dr. Ashok Jadhav', 'Dr. Rekha Desai', 'Dr. Mahesh Kulkarni']
        },
        {
          name: 'Orthopedics',
          doctors: ['Dr. Santosh Pawar', 'Dr. Vaishali Shinde', 'Dr. Ganesh Patil']
        },
        {
          name: 'General Medicine',
          doctors: ['Dr. Kiran Bhosale', 'Dr. Anita Joshi', 'Dr. Sunil Gaikwad']
        },
        {
          name: 'Pediatrics',
          doctors: ['Dr. Archana Kulkarni', 'Dr. Rajendra Naik', 'Dr. Smita Deshmukh']
        },
        {
          name: 'Gynecology',
          doctors: ['Dr. Vandana Patil', 'Dr. Shobha Jadhav', 'Dr. Nisha Pawar']
        },
        {
          name: 'Neurology',
          doctors: ['Dr. Mohan Desai', 'Dr. Pallavi Kulkarni', 'Dr. Ravi Shinde']
        },
        {
          name: 'Dermatology',
          doctors: ['Dr. Shalini Bhosale', 'Dr. Yogesh Patil', 'Dr. Aarti Joshi']
        },
        {
          name: 'ENT',
          doctors: ['Dr. Dilip Gaikwad', 'Dr. Rupali Naik', 'Dr. Ajay Deshmukh']
        }
      ]
    },
    {
      id: 'kamala-nehru',
      name: 'Kamala Nehru Hospital',
      departments: [
        {
          name: 'Gynecology',
          doctors: ['Dr. Lata Kulkarni', 'Dr. Savita Patil', 'Dr. Madhavi Desai']
        },
        {
          name: 'Pediatrics',
          doctors: ['Dr. Suhas Bhosale', 'Dr. Manali Joshi', 'Dr. Prakash Shinde']
        },
        {
          name: 'General Medicine',
          doctors: ['Dr. Ashwini Pawar', 'Dr. Nikhil Jadhav', 'Dr. Seema Kulkarni']
        },
        {
          name: 'Dermatology',
          doctors: ['Dr. Tanvi Deshmukh', 'Dr. Arun Patil', 'Dr. Priyanka Naik']
        }
      ]
    },
    {
      id: 'naidu',
      name: 'Naidu Hospital',
      departments: [
        {
          name: 'Orthopedics',
          doctors: ['Dr. Vinod Kulkarni', 'Dr. Shilpa Desai', 'Dr. Manoj Patil']
        },
        {
          name: 'General Medicine',
          doctors: ['Dr. Hemant Bhosale', 'Dr. Jyoti Joshi', 'Dr. Sagar Pawar']
        },
        {
          name: 'Cardiology',
          doctors: ['Dr. Ramesh Gaikwad', 'Dr. Nita Shinde', 'Dr. Vivek Jadhav']
        },
        {
          name: 'ENT',
          doctors: ['Dr. Sandeep Kulkarni', 'Dr. Kaveri Patil', 'Dr. Amol Deshmukh']
        }
      ]
    },
    {
      id: 'aundh-civil',
      name: 'Aundh Civil Hospital',
      departments: [
        {
          name: 'General Medicine',
          doctors: ['Dr. Satish Naik', 'Dr. Varsha Kulkarni', 'Dr. Rohit Desai']
        },
        {
          name: 'Pediatrics',
          doctors: ['Dr. Anand Patil', 'Dr. Shruti Bhosale', 'Dr. Ketan Joshi']
        },
        {
          name: 'Orthopedics',
          doctors: ['Dr. Deepak Pawar', 'Dr. Sonali Shinde', 'Dr. Tushar Jadhav']
        },
        {
          name: 'Dermatology',
          doctors: ['Dr. Namrata Kulkarni', 'Dr. Bhushan Patil', 'Dr. Ritu Deshmukh']
        }
      ]
    },
    {
      id: 'bhosari',
      name: 'Bhosari Sub-District Hospital',
      departments: [
        {
          name: 'General Medicine',
          doctors: ['Dr. Milind Gaikwad', 'Dr. Aparna Naik', 'Dr. Sachin Kulkarni']
        },
        {
          name: 'Gynecology',
          doctors: ['Dr. Jayashree Patil', 'Dr. Usha Desai', 'Dr. Rajesh Bhosale']
        },
        {
          name: 'Pediatrics',
          doctors: ['Dr. Swapnil Joshi', 'Dr. Megha Pawar', 'Dr. Avinash Shinde']
        },
        {
          name: 'Cardiology',
          doctors: ['Dr. Pandurang Jadhav', 'Dr. Sarika Kulkarni', 'Dr. Nitin Deshmukh']
        }
      ]
    }
  ];

  const [formData, setFormData] = useState({
    hospital: '',
    department: '',
    doctor: '',
    appointmentDate: '',
    timeSlot: '',
    symptoms: '',
    firstName: '',
    lastName: '',
    gender: '',
    birthdate: '',
    phone: '',
    email: '',
    aadharNumber: '',
    bloodGroup: '',
    maritalStatus: '',
    occupation: '',
    streetAddress: '',
    streetAddress2: '',
    city: 'Pune',
    state: 'Maharashtra',
    zipCode: '',
    emergencyContact: '',
    emergencyPhone: '',
    emergencyRelation: '',
    visited: '',
    allergies: '',
    currentMedications: '',
    previousSurgeries: '',
    chronicDiseases: ''
  });

  const [availableDepartments, setAvailableDepartments] = useState([]);
  const [availableDoctors, setAvailableDoctors] = useState([]);

  const timeSlots = [
    '09:00 AM - 09:30 AM',
    '09:30 AM - 10:00 AM',
    '10:00 AM - 10:30 AM',
    '10:30 AM - 11:00 AM',
    '11:00 AM - 11:30 AM',
    '11:30 AM - 12:00 PM',
    '02:00 PM - 02:30 PM',
    '02:30 PM - 03:00 PM',
    '03:00 PM - 03:30 PM',
    '03:30 PM - 04:00 PM',
    '04:00 PM - 04:30 PM',
    '04:30 PM - 05:00 PM'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // When hospital is selected, update available departments
    if (name === 'hospital') {
      const selectedHospital = hospitals.find(h => h.id === value);
      if (selectedHospital) {
        setAvailableDepartments(selectedHospital.departments);
        setAvailableDoctors([]);
        setFormData(prev => ({
          ...prev,
          hospital: value,
          department: '',
          doctor: ''
        }));
      }
    }

    // When department is selected, update available doctors
    if (name === 'department') {
      const selectedDept = availableDepartments.find(d => d.name === value);
      if (selectedDept) {
        setAvailableDoctors(selectedDept.doctors);
        setFormData(prev => ({
          ...prev,
          department: value,
          doctor: ''
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Form Data:', formData);
    
    const selectedHospital = hospitals.find(h => h.id === formData.hospital);
    
    alert(`✅ Appointment Request Submitted Successfully!

Hospital: ${selectedHospital?.name}
Department: ${formData.department}
Doctor: ${formData.doctor}
Date: ${formData.appointmentDate}
Time: ${formData.timeSlot}

📱 You will receive a confirmation SMS and Email within 24 hours.
📋 Please bring your Aadhar card and previous medical records.`);
    
    navigate('/');
  };

  return (
    <div className="appointment-form-page">
      {/* Header */}
      <header className="form-header">
        <div className="logo" onClick={() => navigate('/')}>
          🏥 HealthMate
        </div>
        <nav className="header-nav">
          <a href="/">Home</a>
          <a href="#">Hospitals</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="header-actions">
          <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
          <button className="book-btn">Book Appointment</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="form-wrapper">
        <div className="form-container">
          {/* Title Section */}
          <div className="form-title-section">
            <h1>Government Hospital Appointment Form</h1>
            <p className="form-subtitle">Book your appointment at Pune's Government Hospitals - Free/Subsidized Healthcare for All</p>
          </div>

          {/* Info Banner */}
          <div className="info-banner">
            <span className="info-icon">ℹ️</span>
            <p>Please bring your Aadhar Card and any previous medical records on the day of appointment</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Hospital & Appointment Details */}
            <section className="form-section">
              <div className="section-header">
                <span className="section-icon">🏥</span>
                <h2>Hospital & Appointment Details</h2>
              </div>

              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Select Government Hospital *</label>
                  <select 
                    name="hospital" 
                    value={formData.hospital} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="">Choose a Hospital</option>
                    {hospitals.map(hospital => (
                      <option key={hospital.id} value={hospital.id}>
                        {hospital.name}
                      </option>
                    ))}
                  </select>
                  <small>Select the government hospital nearest to you</small>
                </div>

                <div className="form-group">
                  <label>Department *</label>
                  <select 
                    name="department" 
                    value={formData.department} 
                    onChange={handleChange} 
                    required
                    disabled={!formData.hospital}
                  >
                    <option value="">Select Department</option>
                    {availableDepartments.map((dept, index) => (
                      <option key={index} value={dept.name}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                  <small>Choose the medical department</small>
                </div>

                <div className="form-group">
                  <label>Select Doctor *</label>
                  <select 
                    name="doctor" 
                    value={formData.doctor} 
                    onChange={handleChange} 
                    required
                    disabled={!formData.department}
                  >
                    <option value="">Select Doctor</option>
                    {availableDoctors.map((doctor, index) => (
                      <option key={index} value={doctor}>
                        {doctor}
                      </option>
                    ))}
                  </select>
                  <small>Choose your preferred doctor</small>
                </div>

                <div className="form-group">
                  <label>Appointment Date *</label>
                  <input
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                  <small>Select a date (Monday to Saturday)</small>
                </div>

                <div className="form-group">
                  <label>Preferred Time Slot *</label>
                  <select name="timeSlot" value={formData.timeSlot} onChange={handleChange} required>
                    <option value="">Select Time Slot</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  <small>Morning: 9 AM - 12 PM | Evening: 2 PM - 5 PM</small>
                </div>

                <div className="form-group full-width">
                  <label>Symptoms / Reason for Visit *</label>
                  <textarea
                    name="symptoms"
                    rows="4"
                    placeholder="Please describe your symptoms or reason for appointment in detail..."
                    value={formData.symptoms}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <small>Provide detailed information to help the doctor prepare</small>
                </div>
              </div>
            </section>

            {/* Personal Information */}
            <section className="form-section">
              <div className="section-header">
                <span className="section-icon">👤</span>
                <h2>Personal Information</h2>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Gender *</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Date of Birth *</label>
                  <input
                    type="date"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Mobile Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="10 digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                  />
                  <small>10 digit mobile number (for SMS confirmation)</small>
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Aadhar Number *</label>
                  <input
                    type="text"
                    name="aadharNumber"
                    placeholder="12 digit Aadhar number"
                    value={formData.aadharNumber}
                    onChange={handleChange}
                    pattern="[0-9]{12}"
                    maxLength="12"
                    required
                  />
                  <small>12 digit Aadhar number (mandatory)</small>
                </div>

                <div className="form-group">
                  <label>Blood Group</label>
                  <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Marital Status</label>
                  <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
                    <option value="">Select Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="widowed">Widowed</option>
                    <option value="divorced">Divorced</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Occupation</label>
                  <input
                    type="text"
                    name="occupation"
                    placeholder="Your occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>

            {/* Address Information */}
            <section className="form-section">
              <div className="section-header">
                <span className="section-icon">📍</span>
                <h2>Address Information</h2>
              </div>

              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Street Address *</label>
                  <input
                    type="text"
                    name="streetAddress"
                    placeholder="House No., Building Name, Street"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <input
                    type="text"
                    name="streetAddress2"
                    placeholder="Area, Landmark (Optional)"
                    value={formData.streetAddress2}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>PIN Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="411001"
                    value={formData.zipCode}
                    onChange={handleChange}
                    pattern="[0-9]{6}"
                    maxLength="6"
                    required
                  />
                  <small>6 digit PIN code</small>
                </div>
              </div>
            </section>

            {/* Emergency Contact */}
            <section className="form-section">
              <div className="section-header">
                <span className="section-icon">🚨</span>
                <h2>Emergency Contact</h2>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Emergency Contact Name *</label>
                  <input
                    type="text"
                    name="emergencyContact"
                    placeholder="Full Name"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Relationship *</label>
                  <select name="emergencyRelation" value={formData.emergencyRelation} onChange={handleChange} required>
                    <option value="">Select Relationship</option>
                    <option value="spouse">Spouse</option>
                    <option value="parent">Parent</option>
                    <option value="sibling">Sibling</option>
                    <option value="child">Child</option>
                    <option value="friend">Friend</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Emergency Contact Phone *</label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    placeholder="10 digit mobile number"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Medical History */}
            <section className="form-section">
              <div className="section-header">
                <span className="section-icon">🏥</span>
                <h2>Medical History</h2>
              </div>

              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Have you visited this hospital before? *</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="visited"
                        value="yes"
                        checked={formData.visited === 'yes'}
                        onChange={handleChange}
                        required
                      />
                      <span>Yes (I have previous records)</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="visited"
                        value="no"
                        checked={formData.visited === 'no'}
                        onChange={handleChange}
                        required
                      />
                      <span>No (First time visit)</span>
                    </label>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Known Allergies</label>
                  <textarea
                    name="allergies"
                    rows="3"
                    placeholder="List any known allergies (medicines, food, etc.)"
                    value={formData.allergies}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-group full-width">
                  <label>Current Medications</label>
                  <textarea
                    name="currentMedications"
                    rows="3"
                    placeholder="List any medications you are currently taking"
                    value={formData.currentMedications}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-group full-width">
                  <label>Previous Surgeries</label>
                  <textarea
                    name="previousSurgeries"
                    rows="3"
                    placeholder="List any previous surgeries with approximate dates"
                    value={formData.previousSurgeries}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-group full-width">
                  <label>Chronic Diseases</label>
                  <textarea
                    name="chronicDiseases"
                    rows="3"
                    placeholder="List any chronic diseases (Diabetes, Hypertension, Asthma, etc.)"
                    value={formData.chronicDiseases}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </section>

            {/* Terms and Conditions */}
            <section className="form-section">
              <div className="terms-box">
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span>I hereby declare that the information provided above is true and correct to the best of my knowledge</span>
                  </label>
                </div>

                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span>I agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a> of the hospital</span>
                  </label>
                </div>

                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>I would like to receive appointment reminders and health tips via SMS and Email</span>
                  </label>
                </div>
              </div>
            </section>

            {/* Important Instructions */}
            <div className="important-notes">
              <h3>📋 Important Instructions:</h3>
              <ul>
                <li>Please arrive 15 minutes before your scheduled appointment time</li>
                <li>Bring your original Aadhar card and a photocopy</li>
                <li>Carry any previous medical records, prescriptions, or test reports</li>
                <li>Consultation fees: Free for BPL card holders, ₹10-50 for others</li>
                <li>Appointments are subject to doctor availability</li>
                <li>You will receive a confirmation SMS within 24 hours</li>
              </ul>
            </div>

            {/* Form Actions */}
            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={() => navigate('/')}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Submit Appointment Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;