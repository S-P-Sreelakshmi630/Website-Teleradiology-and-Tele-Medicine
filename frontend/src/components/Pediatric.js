import React from 'react';
import SingleDepartment from './SingleDepartment';

const pediatricDoctors = [
    { name: 'Dr. Emily Brown', hospital: 'Child Care Hospital', specialization: 'Neonatology', fee: '$120' },
    { name: 'Dr. John Smith', hospital: 'Healthy Kids Clinic', specialization: 'Pediatric Neurology', fee: '$100' },
    { name: 'Dr. Sarah Green', hospital: 'Bright Future Hospital', specialization: 'Pediatric Cardiology', fee: '$150' },
    { name: 'Dr. Alex Turner', hospital: 'Little Stars Hospital', specialization: 'Pediatric Orthopedics', fee: '$110' },
    { name: 'Dr. Clara Hill', hospital: 'Happy Kids Clinic', specialization: 'Pediatric Gastroenterology', fee: '$125' },
    { name: 'Dr. David Wilson', hospital: 'Child Wellbeing Center', specialization: 'Pediatric Endocrinology', fee: '$130' },
    { name: 'Dr. Olivia White', hospital: 'Kids Health Hospital', specialization: 'Pediatric Oncology', fee: '$140' },
    { name: 'Dr. James Brown', hospital: 'Little Angels Hospital', specialization: 'General Pediatrics', fee: '$90' },
    { name: 'Dr. Mia Carter', hospital: 'Child Care Plus', specialization: 'Pediatric Allergy', fee: '$115' },
    { name: 'Dr. Liam Miller', hospital: 'Childhood Wellness Center', specialization: 'Pediatric Dermatology', fee: '$105' },
    { name: 'Dr. Sophia Green', hospital: 'Healthy Childhood Hospital', specialization: 'Pediatric Pulmonology', fee: '$135' },
    { name: 'Dr. Lucas Scott', hospital: 'Bright Kids Clinic', specialization: 'Pediatric Rheumatology', fee: '$125' },
    { name: 'Dr. Amelia Jones', hospital: 'Child Health Hub', specialization: 'Pediatric Cardiology', fee: '$120' },
    { name: 'Dr. Ethan Taylor', hospital: 'Healthy Life Pediatrics', specialization: 'Pediatric Urology', fee: '$145' },
    { name: 'Dr. Emma Davis', hospital: 'Future Care Hospital', specialization: 'General Pediatrics', fee: '$95' },
];

const Pediatric = () => {
    return <SingleDepartment title="Pediatrics" doctors={pediatricDoctors} />;
};

export default Pediatric;
