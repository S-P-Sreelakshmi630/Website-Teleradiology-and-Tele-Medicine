import React from 'react';
import SingleDepartment from './SingleDepartment';

const cardiologyDoctors = [
    { name: 'Dr. Alan Carter', hospital: 'Heart Care Hospital', specialization: 'Interventional Cardiology', fee: '$200' },
    { name: 'Dr. Sarah Miles', hospital: 'Healthy Heart Clinic', specialization: 'Echocardiography', fee: '$180' },
    { name: 'Dr. Brian Johnson', hospital: 'Cardiac Wellness Center', specialization: 'Pediatric Cardiology', fee: '$190' },
    { name: 'Dr. Olivia Davis', hospital: 'Heart Specialists Hospital', specialization: 'Heart Failure Management', fee: '$210' },
    { name: 'Dr. Lucas Brown', hospital: 'Heart Rhythm Center', specialization: 'Electrophysiology', fee: '$220' },
    { name: 'Dr. Amelia Green', hospital: 'Advanced Heart Hospital', specialization: 'Cardiac Imaging', fee: '$195' },
    { name: 'Dr. Noah Taylor', hospital: 'Healthy Pulse Clinic', specialization: 'Preventive Cardiology', fee: '$170' },
    { name: 'Dr. Ava Wilson', hospital: 'Heart and Vascular Hospital', specialization: 'General Cardiology', fee: '$160' },
    { name: 'Dr. Liam Scott', hospital: 'Cardio Life Hospital', specialization: 'Adult Congenital Heart Disease', fee: '$230' },
    { name: 'Dr. Emily Hill', hospital: 'Heart Diagnostics Center', specialization: 'Cardiothoracic Surgery', fee: '$250' },
    { name: 'Dr. Ella Miller', hospital: 'Pulse Care Hospital', specialization: 'Cardiac Rehabilitation', fee: '$175' },
    { name: 'Dr. Daniel White', hospital: 'Heart Focus Clinic', specialization: 'Heart Transplantation', fee: '$300' },
    { name: 'Dr. Charlotte Brown', hospital: 'Cardiac Research Center', specialization: 'Hypertension Management', fee: '$185' },
    { name: 'Dr. Ethan Carter', hospital: 'Heart Health Hospital', specialization: 'Heart Valve Disease', fee: '$220' },
    { name: 'Dr. Mia Green', hospital: 'Vascular and Heart Center', specialization: 'Coronary Artery Disease', fee: '$200' },
];

const Cardiology = () => {
    return <SingleDepartment title="Cardiology" doctors={cardiologyDoctors} />;
};

export default Cardiology;
