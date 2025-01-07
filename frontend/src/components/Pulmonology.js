import React from 'react';
import SingleDepartment from './SingleDepartment';

const pulmonologyDoctors = [
    { name: 'Dr. Oliver Davis', hospital: 'Breath Well Hospital', specialization: 'Asthma Specialist', fee: '$130' },
    { name: 'Dr. Amelia Brooks', hospital: 'Lung Health Center', specialization: 'Chronic Obstructive Pulmonary Disease (COPD)', fee: '$140' },
    { name: 'Dr. Noah Brown', hospital: 'Airway Care Clinic', specialization: 'Bronchoscopy Specialist', fee: '$150' },
    { name: 'Dr. Sophia Moore', hospital: 'Advanced Respiratory Hospital', specialization: 'Interstitial Lung Disease', fee: '$160' },
    { name: 'Dr. Liam Clark', hospital: 'Healthy Lungs Clinic', specialization: 'Pulmonary Hypertension', fee: '$140' },
    { name: 'Dr. Emily Wilson', hospital: 'Lung Specialists Hospital', specialization: 'Lung Cancer', fee: '$180' },
    { name: 'Dr. Ethan Wright', hospital: 'Breath Easy Hospital', specialization: 'Sleep Apnea', fee: '$135' },
    { name: 'Dr. Ava Scott', hospital: 'Lung Wellness Center', specialization: 'Pulmonary Rehabilitation', fee: '$145' },
    { name: 'Dr. Olivia Hill', hospital: 'Respiratory Health Hospital', specialization: 'Critical Care Pulmonology', fee: '$170' },
    { name: 'Dr. Daniel Turner', hospital: 'Healthy Airway Hospital', specialization: 'Tuberculosis', fee: '$125' },
    { name: 'Dr. Mia Carter', hospital: 'Complete Lung Care', specialization: 'Respiratory Therapy', fee: '$120' },
    { name: 'Dr. Sophia Miller', hospital: 'Lung Focus Clinic', specialization: 'Bronchiectasis', fee: '$150' },
    { name: 'Dr. Ethan Taylor', hospital: 'Respiratory Insight Center', specialization: 'Pediatric Pulmonology', fee: '$135' },
    { name: 'Dr. Emily Brown', hospital: 'Lung Harmony Hospital', specialization: 'Cystic Fibrosis', fee: '$145' },
    { name: 'Dr. Liam Scott', hospital: 'Advanced Breathing Care', specialization: 'Occupational Lung Disease', fee: '$140' },
];

const Pulmonology = () => {
    return <SingleDepartment title="Pulmonology" doctors={pulmonologyDoctors} />;
};

export default Pulmonology;
