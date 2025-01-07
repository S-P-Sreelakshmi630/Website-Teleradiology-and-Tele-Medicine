import React from 'react';
import SingleDepartment from './SingleDepartment';

const nephrologyDoctors = [
    { name: 'Dr. Mia White', hospital: 'Kidney Health Hospital', specialization: 'Dialysis Specialist', fee: '$170' },
    { name: 'Dr. Liam Brown', hospital: 'Advanced Kidney Care', specialization: 'Kidney Transplant', fee: '$190' },
    { name: 'Dr. Olivia Green', hospital: 'Nephrology Specialists Clinic', specialization: 'Hypertension', fee: '$150' },
    { name: 'Dr. Ethan Harris', hospital: 'Healthy Kidney Center', specialization: 'Glomerulonephritis', fee: '$160' },
    { name: 'Dr. Sophia Wilson', hospital: 'Kidney Insight Hospital', specialization: 'Pediatric Nephrology', fee: '$140' },
    { name: 'Dr. Daniel Taylor', hospital: 'Nephrology First Clinic', specialization: 'Chronic Kidney Disease', fee: '$155' },
    { name: 'Dr. Amelia Carter', hospital: 'Complete Kidney Care', specialization: 'Renal Nutrition', fee: '$145' },
    { name: 'Dr. Lucas Moore', hospital: 'Kidney Harmony Hospital', specialization: 'Urology-Nephrology', fee: '$165' },
    { name: 'Dr. Emma Scott', hospital: 'Kidney Specialists Clinic', specialization: 'Acute Kidney Injury', fee: '$175' },
    { name: 'Dr. Noah Brown', hospital: 'Advanced Kidney Center', specialization: 'Fluid and Electrolyte Disorders', fee: '$185' },
    { name: 'Dr. Ethan Brooks', hospital: 'Healthy Kidney Care', specialization: 'Kidney Stone Management', fee: '$150' },
    { name: 'Dr. Emily Taylor', hospital: 'Nephrology Excellence Center', specialization: 'Hemodialysis', fee: '$165' },
    { name: 'Dr. Ava Foster', hospital: 'Kidney Focus Hospital', specialization: 'Peritoneal Dialysis', fee: '$180' },
    { name: 'Dr. Lucas Hill', hospital: 'Kidney Wellness Hospital', specialization: 'Renal Biopsy', fee: '$195' },
    { name: 'Dr. Sophia Miller', hospital: 'Nephrology Research Center', specialization: 'Polycystic Kidney Disease', fee: '$200' },
];

const Nephrology = () => {
    return <SingleDepartment title="Nephrology" doctors={nephrologyDoctors} />;
};

export default Nephrology;
