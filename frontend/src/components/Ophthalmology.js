import React from 'react';
import SingleDepartment from './SingleDepartment';

const ophthalmologyDoctors = [
    { name: 'Dr. Iris Moore', hospital: 'Vision Care Hospital', specialization: 'Cataract Surgery', fee: '$120' },
    { name: 'Dr. Liam Turner', hospital: 'Eye Specialists Clinic', specialization: 'Glaucoma Treatment', fee: '$140' },
    { name: 'Dr. Emma Brooks', hospital: 'Clear Vision Center', specialization: 'Refractive Surgery', fee: '$130' },
    { name: 'Dr. Ethan Foster', hospital: 'Eye Health Hospital', specialization: 'Cornea Specialist', fee: '$150' },
    { name: 'Dr. Ava Clark', hospital: 'Advanced Vision Clinic', specialization: 'Retinal Disorders', fee: '$160' },
    { name: 'Dr. Noah Scott', hospital: 'Sharp Eye Hospital', specialization: 'Pediatric Ophthalmology', fee: '$110' },
    { name: 'Dr. Mia White', hospital: 'Focus Eye Care', specialization: 'Neuro-Ophthalmology', fee: '$170' },
    { name: 'Dr. Charlotte Green', hospital: 'Eye and Vision Clinic', specialization: 'Oculoplastic Surgery', fee: '$180' },
    { name: 'Dr. Lucas Brown', hospital: 'Vision Specialists Center', specialization: 'General Ophthalmology', fee: '$100' },
    { name: 'Dr. Emily Taylor', hospital: 'Bright Eyes Hospital', specialization: 'Low Vision Therapy', fee: '$125' },
    { name: 'Dr. Daniel Miller', hospital: 'Vision First Clinic', specialization: 'Eye Trauma Care', fee: '$140' },
    { name: 'Dr. Olivia Hill', hospital: 'Healthy Vision Hospital', specialization: 'Uveitis Treatment', fee: '$155' },
    { name: 'Dr. Amelia Carter', hospital: 'Vision Insight Center', specialization: 'Contact Lens Specialist', fee: '$115' },
    { name: 'Dr. Sophia Wilson', hospital: 'Complete Eye Care', specialization: 'Macular Degeneration', fee: '$165' },
    { name: 'Dr. Lucas Wright', hospital: 'Eye Wellness Hospital', specialization: 'LASIK Surgery', fee: '$200' },
];

const Ophthalmology = () => {
    return <SingleDepartment title="Ophthalmology" doctors={ophthalmologyDoctors} />;
};

export default Ophthalmology;
