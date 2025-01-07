import React from 'react';
import Navbar from './Navbar'; // Import Navbar component
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <Navbar /> 
            <div className="hero-section">
                <h1 className="hero-heading">About Us</h1>
                <p className="hero-subtext">
                    Connecting you to world-class healthcare at your fingertips.
                </p>
            </div>

            <div className="about-us-content">
                <h2>Who We Are</h2>
                <p>
                    Welcome to <span className="highlight">Medi-Connect</span>, your trusted partner in bridging the gap between patients and healthcare professionals. 
                    Our platform is designed to bring convenience and quality to your healthcare journey, enabling easy access to telemedicine and teleradiology services 
                    from the comfort of your home.
                </p>

                <h2>Our Vision</h2>
                <p>
                    At Medi-Connect, we envision a future where healthcare is universally accessible, 
                    affordable, and efficient. Our mission is to connect people globally with trusted doctors, 
                    specialists, and diagnostic services through cutting-edge technology.
                </p>

                <h2>Why Choose Us?</h2>
                <ul className="features-list">
                    <li>🩺 Access to top-rated healthcare professionals worldwide.</li>
                    <li>📊 Advanced telemedicine and teleradiology solutions.</li>
                    <li>⚡ Quick and secure online consultations and diagnosis sharing.</li>
                    <li>🌍 Building a global network of healthcare providers.</li>
                </ul>
            </div>

            <footer className="about-us-footer">
                <p>Hope we make you happy with our service</p>
                <p><strong>Team Medi-Connect</strong></p>
            </footer>
        </div>
    );
};

export default AboutUs;
