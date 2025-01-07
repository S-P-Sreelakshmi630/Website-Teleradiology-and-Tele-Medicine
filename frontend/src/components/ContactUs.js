import React from 'react';
import './ContactUs.css'; // Ensure the path is correct
import Navbar from './Navbar'; // Ensure the path is correct

const ContactUs = () => {
    return (
        <div>
           
            <Navbar />
            
           
            <div className="contact-container">
                <h1>Contact Us</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
