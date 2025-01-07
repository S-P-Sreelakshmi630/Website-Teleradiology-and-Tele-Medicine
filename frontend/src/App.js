import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Departments from './components/Departments';
import Pediatric from './components/Pediatric';
import Cardiology from './components/Cardiology';
import Ophthalmology from './components/Ophthalmology';
import Pulmonology from './components/Pulmonology';
import Oncology from './components/Oncology';
import Orthopaedic from './components/Orthopaedic';
import Neurology from './components/Neurology';
import Nephrology from './components/Nephrology';
import Radiology from './components/Radiology';
import Psychiatry from './components/Psychiatry';
import Dermatology from './components/Dermatology';
import BookAppointment from './components/BookAppointment';
import ContactUs from './components/ContactUs';
import DoctorDashboard from './components/DoctorDashboard';
import LabDashboard from './components/LabDashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true); // Update isAuthenticated state when login is successful
  };

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/doctor-dashboard" element={<PrivateRoute element={<DoctorDashboard />} />} />
        <Route path="/lab-dashboard" element={<PrivateRoute element={<LabDashboard />} />} />

        {/* Public Routes */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/pediatric" element={<Pediatric />} />
        <Route path="/cardiology" element={<Cardiology />} />
        <Route path="/ophthalmology" element={<Ophthalmology />} />
        <Route path="/pulmonology" element={<Pulmonology />} />
        <Route path="/oncology" element={<Oncology />} />
        <Route path="/orthopaedic" element={<Orthopaedic />} />
        <Route path="/neurology" element={<Neurology />} />
        <Route path="/nephrology" element={<Nephrology />} />
        <Route path="/radiology" element={<Radiology />} />
        <Route path="/psychiatry" element={<Psychiatry />} />
        <Route path="/dermatology" element={<Dermatology />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
