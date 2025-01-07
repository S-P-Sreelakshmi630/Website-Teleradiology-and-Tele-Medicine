import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookAppointment.css';

const BookAppointment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { doctorName, hospital, department, fee, departmentLink } = location.state || {};

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        mobile: '',
        selectedSlot: '',
        image: null,
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [paymentStatus, setPaymentStatus] = useState(false);
    const availableSlots = ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '5:00 PM'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSlotSelection = (slot) => {
        setFormData((prev) => ({ ...prev, selectedSlot: slot }));
    };

    const handlePayment = () => {
        setPaymentStatus(true);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prev) => ({ ...prev, image: file }));
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            setUploadStatus('Upload successful!');
        } else {
            setImagePreview(null);
            setUploadStatus('');
        }
    };

    const handleSubmit = () => {
        // Add your actual image upload logic here (e.g., using fetch to send to server)
        alert('Appointment submitted successfully!');
        navigate(departmentLink || '/');
    };

    return (
        <div className="book-appointment-container">
            <h1>Book Appointment</h1>
            <div className="appointment-details">
                <p><strong>Doctor:</strong> {doctorName}</p>
                <p><strong>Hospital:</strong> {hospital}</p>
                <p><strong>Department:</strong> {department}</p>
                <p><strong>Fee:</strong> ₹{fee}</p>
            </div>

            <form className="appointment-form">
                <label>
                    <span>Your Name:</span>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    <span>Your Age:</span>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    <span>Gender:</span>
                    <select name="gender" value={formData.gender} onChange={handleInputChange} required>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label>
                    <span>Mobile Number:</span>
                    <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    <span>Available Time Slots:</span>
                    <div className="slots-container">
                        {availableSlots.map((slot) => (
                            <button
                                type="button"
                                key={slot}
                                className={`slot-button ${formData.selectedSlot === slot ? 'selected-slot' : ''}`}
                                onClick={() => handleSlotSelection(slot)}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                </label>
                <label>
                    <span>Upload Image:</span>
                    <input type="file" name="image" onChange={handleImageChange} />
                </label>
                {imagePreview && (
                    <div>
                        <img src={imagePreview} alt="Preview" className="image-preview" />
                        <p>{uploadStatus}</p>
                    </div>
                )}
                <div className="payment-section">
                    <button type="button" onClick={handlePayment} className="pay-button">
                        Pay ₹{fee}
                    </button>
                    {paymentStatus && <p className="payment-success">Payment Successful!</p>}
                </div>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="submit-button"
                    disabled={!paymentStatus || !formData.selectedSlot || !formData.image} 
                >
                    Submit Appointment
                </button>
            </form>
        </div>
    );
};

export default BookAppointment;