import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './SingleDepartment.css';
import Navbar from './Navbar';

const SingleDepartment = ({ title, doctors }) => {
    const navigate = useNavigate();  // Initialize navigate

    // Handle the click event for the Book Appointment button
    const handleBookAppointment = (doctor) => {
        navigate('/book-appointment', {
            state: {
                doctorName: doctor.name,
                hospital: doctor.hospital,
                department: title,
                fee: doctor.fee,
                departmentLink: `/${title.toLowerCase()}`, // Navigate back to the department page after booking
            },
        });
    };

    return (
        <div className="department-page-container">
            <Navbar />
            <h1 className="department-title">{title}</h1>
            <div className="table-container">
                <table className="department-table">
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Doctor Name</th>
                            <th>Hospital Name</th>
                            <th>Specialization</th>
                            <th>Fee</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.hospital}</td>
                                <td>{doctor.specialization}</td>
                                <td>{doctor.fee}</td>
                                <td>
                                    <button
                                        className="book-button"
                                        onClick={() => handleBookAppointment(doctor)} // Handle button click
                                    >
                                        Book Appointment
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SingleDepartment;
