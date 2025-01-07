import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import SingleDepartment from './SingleDepartment';

const radiologyDoctors = [
    { name: 'Dr. Grace Watson', hospital: 'Advanced Imaging Center', specialization: 'MRI Specialist', fee: '$220' },
    { name: 'Dr. Henry Parker', hospital: 'Radiology Excellence Hospital', specialization: 'CT Scan Expert', fee: '$210' },
    { name: 'Dr. Isabella Adams', hospital: 'Precision Imaging Clinic', specialization: 'Ultrasound Imaging', fee: '$200' },
    { name: 'Dr. James Stewart', hospital: 'Radiology Insights Clinic', specialization: 'Interventional Radiology', fee: '$230' },
    { name: 'Dr. Charlotte King', hospital: 'Diagnostic Imaging Hospital', specialization: 'Breast Imaging', fee: '$250' },
    { name: 'Dr. Benjamin Clark', hospital: 'Radiology First Clinic', specialization: 'X-Ray Specialist', fee: '$180' },
    { name: 'Dr. Zoe Bennett', hospital: 'Complete Imaging Solutions', specialization: 'Nuclear Medicine', fee: '$240' },
    { name: 'Dr. Lucas Martinez', hospital: 'Elite Radiology Care', specialization: 'Musculoskeletal Radiology', fee: '$200' },
    { name: 'Dr. Ava Collins', hospital: 'Radiology Wellness Center', specialization: 'Cardiovascular Imaging', fee: '$220' },
    { name: 'Dr. Elijah Wright', hospital: 'Healthy Imaging Hospital', specialization: 'Pediatric Radiology', fee: '$210' },
    { name: 'Dr. Sophie Lee', hospital: 'Radiology Experts Clinic', specialization: 'Chest Imaging', fee: '$190' },
    { name: 'Dr. Jack Carter', hospital: 'Imaging Harmony Hospital', specialization: 'Abdominal Imaging', fee: '$210' },
    { name: 'Dr. Amelia Green', hospital: 'Precision Radiology Center', specialization: 'Oncologic Imaging', fee: '$230' },
    { name: 'Dr. William Scott', hospital: 'Advanced Radiology Group', specialization: 'Spinal Imaging', fee: '$200' },
    { name: 'Dr. Mia Taylor', hospital: 'Radiology First Hospital', specialization: 'Emergency Radiology', fee: '$190' },
];

const Radiology = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleBookAppointment = () => {
    navigate('/rbook-appointment'); // Navigate to RBookAppointment page
  };

  return (
    <div>
      <SingleDepartment title="Radiology" doctors={radiologyDoctors} />
      <button onClick={handleBookAppointment}>Book Appointment</button>
    </div>
  );
};

export default Radiology;
