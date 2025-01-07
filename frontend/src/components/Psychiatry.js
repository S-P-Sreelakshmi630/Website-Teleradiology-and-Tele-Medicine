import React from 'react';
import SingleDepartment from './SingleDepartment';

const psychiatryDoctors = [
    { name: 'Dr. Jane Smith', hospital: 'Mental Health Institute', specialization: 'Clinical Psychiatry', fee: '$150' },
    { name: 'Dr. Robert Black', hospital: 'Mind Wellness Clinic', specialization: 'Child and Adolescent Psychiatry', fee: '$160' },
    { name: 'Dr. Sophia Johnson', hospital: 'Behavioral Health Center', specialization: 'Neuropsychiatry', fee: '$170' },
    { name: 'Dr. William Davis', hospital: 'Mental Care Hospital', specialization: 'Addiction Psychiatry', fee: '$140' },
    { name: 'Dr. Grace Lee', hospital: 'Wellness and Mind Clinic', specialization: 'Psychotherapy', fee: '$155' },
    { name: 'Dr. Henry Moore', hospital: 'Mind and Health Center', specialization: 'Forensic Psychiatry', fee: '$180' },
    { name: 'Dr. Isabella King', hospital: 'Mental Wellness Center', specialization: 'Geriatric Psychiatry', fee: '$150' },
    { name: 'Dr. Oliver Martin', hospital: 'Behavioral Sciences Clinic', specialization: 'Mood Disorders', fee: '$160' },
    { name: 'Dr. Emma Harris', hospital: 'Mind Health Hospital', specialization: 'Anxiety Disorders', fee: '$165' },
    { name: 'Dr. James Walker', hospital: 'Mental Peace Center', specialization: 'Post-Traumatic Stress Disorders', fee: '$175' },
];

const Psychiatry = () => {
    return <SingleDepartment title="Psychiatry" doctors={psychiatryDoctors} />;
};

export default Psychiatry;
