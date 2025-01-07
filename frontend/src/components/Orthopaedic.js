import React from 'react';
import SingleDepartment from './SingleDepartment';

const orthopaedicDoctors = [
    { name: 'Dr. Lucas Brown', hospital: 'Bone Health Hospital', specialization: 'Joint Replacement', fee: '$150' },
    { name: 'Dr. Mia White', hospital: 'Orthopaedic Specialists Clinic', specialization: 'Spinal Surgery', fee: '$140' },
    { name: 'Dr. Liam Clark', hospital: 'Advanced Orthopaedic Care', specialization: 'Sports Injuries', fee: '$160' },
    { name: 'Dr. Emma Scott', hospital: 'Bone Harmony Clinic', specialization: 'Pediatric Orthopaedics', fee: '$145' },
    { name: 'Dr. Ethan Wilson', hospital: 'Healthy Joints Hospital', specialization: 'Arthroscopic Surgery', fee: '$155' },
    { name: 'Dr. Olivia Harris', hospital: 'Orthopaedic Wellness Center', specialization: 'Trauma Surgery', fee: '$170' },
    { name: 'Dr. Noah Taylor', hospital: 'Bone Specialists Hospital', specialization: 'Bone Tumors', fee: '$165' },
    { name: 'Dr. Ava Carter', hospital: 'Orthopaedic Insight Clinic', specialization: 'Hand Surgery', fee: '$150' },
    { name: 'Dr. Daniel Hill', hospital: 'Complete Bone Care', specialization: 'Hip Replacement', fee: '$175' },
    { name: 'Dr. Sophia Brown', hospital: 'Advanced Orthopaedic Hospital', specialization: 'Knee Replacement', fee: '$160' },
    { name: 'Dr. Emily Green', hospital: 'Bone Wellness Hospital', specialization: 'Fracture Management', fee: '$130' },
    { name: 'Dr. Oliver Foster', hospital: 'Healthy Bones Clinic', specialization: 'Shoulder Surgery', fee: '$150' },
    { name: 'Dr. Amelia Brooks', hospital: 'Orthopaedic Excellence Center', specialization: 'Rehabilitation', fee: '$140' },
    { name: 'Dr. Liam Wilson', hospital: 'Orthopaedic Research Center', specialization: 'Bone Density', fee: '$155' },
    { name: 'Dr. Ethan Moore', hospital: 'Advanced Bone Clinic', specialization: 'General Orthopaedics', fee: '$145' },
];

const Orthopaedic = () => {
    return <SingleDepartment title="Orthopaedic" doctors={orthopaedicDoctors} />;
};

export default Orthopaedic;
