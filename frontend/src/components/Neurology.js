import React from 'react';
import SingleDepartment from './SingleDepartment';

const neurologyDoctors = [
    { name: 'Dr. Emma Harris', hospital: 'Neuro Care Center', specialization: 'Stroke Specialist', fee: '$200' },
    { name: 'Dr. Ethan Scott', hospital: 'Brain Health Hospital', specialization: 'Epilepsy', fee: '$190' },
    { name: 'Dr. Olivia Brown', hospital: 'Neuro Specialists Clinic', specialization: 'Parkinson\'s Disease', fee: '$210' },
    { name: 'Dr. Noah Miller', hospital: 'Advanced Neurology Care', specialization: 'Alzheimer\'s Disease', fee: '$220' },
    { name: 'Dr. Mia Foster', hospital: 'Complete Brain Care', specialization: 'Headaches and Migraines', fee: '$180' },
    { name: 'Dr. Liam Carter', hospital: 'Neuro Insight Hospital', specialization: 'Multiple Sclerosis', fee: '$200' },
    { name: 'Dr. Daniel Taylor', hospital: 'Brain Harmony Clinic', specialization: 'Neuro-Muscular Disorders', fee: '$230' },
    { name: 'Dr. Ava Green', hospital: 'Neurology First Hospital', specialization: 'General Neurology', fee: '$170' },
    { name: 'Dr. Sophia White', hospital: 'Healthy Brain Center', specialization: 'Cognitive Disorders', fee: '$180' },
    { name: 'Dr. Lucas Hill', hospital: 'Neuro Excellence Hospital', specialization: 'Neurogenetics', fee: '$250' },
    { name: 'Dr. Amelia Brooks', hospital: 'Brain Wellness Hospital', specialization: 'Sleep Disorders', fee: '$190' },
    { name: 'Dr. Emily Wilson', hospital: 'Neuro Specialists Clinic', specialization: 'Spinal Cord Injuries', fee: '$220' },
    { name: 'Dr. Liam Moore', hospital: 'Advanced Brain Care', specialization: 'Traumatic Brain Injury', fee: '$210' },
    { name: 'Dr. Ethan Turner', hospital: 'Neuro Focus Hospital', specialization: 'Neuropathy', fee: '$185' },
    { name: 'Dr. Oliver Brown', hospital: 'Brain Specialists Hospital', specialization: 'Seizure Disorders', fee: '$195' },
];

const Neurology = () => {
    return <SingleDepartment title="Neurology" doctors={neurologyDoctors} />;
};

export default Neurology;
