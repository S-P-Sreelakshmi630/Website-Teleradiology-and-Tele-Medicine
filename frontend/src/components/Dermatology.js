import React from 'react';
import SingleDepartment from './SingleDepartment';

const dermatologyDoctors = [
    { name: 'Dr. Charlotte Evans', hospital: 'Skin Wellness Hospital', specialization: 'Cosmetic Dermatology', fee: '$130' },
    { name: 'Dr. Liam Scott', hospital: 'Dermacare Clinic', specialization: 'Pediatric Dermatology', fee: '$120' },
    { name: 'Dr. Mia Walker', hospital: 'Skin Health Center', specialization: 'Dermatologic Surgery', fee: '$150' },
    { name: 'Dr. Noah Wilson', hospital: 'Skin and Hair Clinic', specialization: 'Trichology', fee: '$140' },
    { name: 'Dr. Ava Martinez', hospital: 'Advanced Skin Hospital', specialization: 'General Dermatology', fee: '$125' },
    { name: 'Dr. Lucas White', hospital: 'Dermatology and Skin Care Center', specialization: 'Acne Treatment', fee: '$115' },
    { name: 'Dr. Emma Lewis', hospital: 'Skin Wellness Clinic', specialization: 'Eczema and Psoriasis', fee: '$135' },
    { name: 'Dr. Oliver Brown', hospital: 'Healthy Skin Hospital', specialization: 'Skin Cancer Treatment', fee: '$160' },
    { name: 'Dr. Sophia Taylor', hospital: 'Skin Diagnostics Center', specialization: 'Laser Skin Treatments', fee: '$145' },
    { name: 'Dr. Ethan Green', hospital: 'Skin Specialists Hospital', specialization: 'Anti-Aging Treatments', fee: '$150' },
];

const Dermatology = () => {
    return <SingleDepartment title="Dermatology" doctors={dermatologyDoctors} />;
};

export default Dermatology;
