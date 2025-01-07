import React from 'react';
import SingleDepartment from './SingleDepartment';

const oncologyDoctors = [
    { name: 'Dr. Ava Thompson', hospital: 'Cancer Care Center', specialization: 'Breast Cancer Specialist', fee: '$180' },
    { name: 'Dr. Noah Harris', hospital: 'Oncology Specialists Hospital', specialization: 'Radiation Oncology', fee: '$190' },
    { name: 'Dr. Emma White', hospital: 'Cancer Wellness Clinic', specialization: 'Hematologic Oncology', fee: '$200' },
    { name: 'Dr. Oliver Green', hospital: 'Advanced Oncology Center', specialization: 'Pediatric Oncology', fee: '$175' },
    { name: 'Dr. Mia Carter', hospital: 'LifeCare Oncology Hospital', specialization: 'Gynecologic Oncology', fee: '$185' },
    { name: 'Dr. Liam Moore', hospital: 'Oncology First Clinic', specialization: 'Thoracic Oncology', fee: '$195' },
    { name: 'Dr. Sophia Brown', hospital: 'Complete Cancer Care', specialization: 'Colorectal Cancer', fee: '$180' },
    { name: 'Dr. Ethan Taylor', hospital: 'Oncology Excellence Hospital', specialization: 'Immuno-Oncology', fee: '$220' },
    { name: 'Dr. Emily Scott', hospital: 'Cancer Harmony Center', specialization: 'Skin Cancer', fee: '$170' },
    { name: 'Dr. Lucas Foster', hospital: 'Oncology Insight Clinic', specialization: 'Head and Neck Cancer', fee: '$190' },
    { name: 'Dr. Olivia Miller', hospital: 'Hope Oncology Center', specialization: 'Palliative Care', fee: '$165' },
    { name: 'Dr. Daniel Clark', hospital: 'Cancer Specialists Hospital', specialization: 'Liver Cancer', fee: '$200' },
    { name: 'Dr. Amelia Wilson', hospital: 'Oncology Harmony Clinic', specialization: 'Bone Marrow Transplants', fee: '$210' },
    { name: 'Dr. Sophia Hill', hospital: 'Cancer Research Center', specialization: 'Genetic Counseling', fee: '$180' },
    { name: 'Dr. Ethan Turner', hospital: 'Advanced Cancer Center', specialization: 'Blood Cancer', fee: '$190' },
];

const Oncology = () => {
    return <SingleDepartment title="Oncology" doctors={oncologyDoctors} />;
};

export default Oncology;
