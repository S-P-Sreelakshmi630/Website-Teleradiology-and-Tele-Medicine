import React from 'react';
import Navbar from './Navbar'; // Import Navbar
import './Services.css';

const Services = () => {
    const services = [
        {
            title: 'Emergency Services',
            description: 'Quick response medical care for urgent situations, available 24/7 to address critical health needs.',
            image: '/images/emergency.jpg',
        },
        {
            title: 'Non Emergency Services',
            description: 'Routine medical care and follow-ups to ensure your long-term health and well-being.',
            image: '/images/non_emergency.jpg',
        },
        {
            title: 'Teleradiology Services',
            description: 'Access expert radiology interpretations from anywhere with our cutting-edge teleradiology solutions.',
            image: '/images/tele_radiology.jpg',
        },
        {
            title: 'Report Analysis',
            description: 'Accurate analysis and interpretation of medical reports to assist in informed decision-making.',
            image: '/images/report.png',
        },
        {
            title: 'Tests',
            description: 'Comprehensive diagnostic testing services to help identify and monitor health conditions.',
            image: '/images/test.jpg',
        },
    ];

    return (
        <div className="services-container">
            <Navbar />
            <div className="services-content">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`service-band ${index % 2 === 0 ? 'even-band' : 'odd-band'}`}
                    >
                        {index % 2 === 0 ? (
                            <>
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className="service-text">
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="service-text">
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>
                                </div>
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
