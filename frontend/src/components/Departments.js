import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Departments.css';

const departments = [
    { name: 'Pediatric', image: '/images/pediatric.jpg', link: '/pediatric' },
    { name: 'Cardiology', image: '/images/cardiology.jpg', link: '/cardiology' },
    { name: 'Ophthalmology', image: '/images/opthalmology.jpg', link: '/ophthalmology' },
    { name: 'Pulmonology', image: '/images/pulmonology.jpg', link: '/pulmonology' },
    { name: 'Oncology', image: '/images/oncology.jpg', link: '/oncology' },
    { name: 'Orthopaedic', image: '/images/orthopedic.jpg', link: '/orthopaedic' },
    { name: 'Neurology', image: '/images/neurology.jpg', link: '/neurology' },
    { name: 'Nephrology', image: '/images/nephrology.jpg', link: '/nephrology' },
    { name: 'Dermatology', image: '/images/dermatology.jpg', link: '/dermatology' },
    { name: 'Psychiatry', image: '/images/psychiatry.jpg', link: '/psychiatry' },
    { name: 'Radiology', image: '/images/rad.jpeg', link: '/radiology' },
];

const Departments = () => {
    const navigate = useNavigate();

    return (
        <div className="departments-container">
            <Navbar />
            <h1 className="departments-heading">Our Departments</h1>
            <div className="departments-grid">
                {departments.map((dept, index) => (
                    <div key={index} className="department-card">
                        <img src={dept.image} alt={dept.name} className="department-image" />
                        <h2 className="department-name">{dept.name}</h2>
                        <button
                            className="appointment-button"
                            onClick={() => navigate(dept.link)}
                        >
                            Click for Appointments
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Departments;
