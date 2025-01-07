import React from 'react';
import Navbar from './Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Dashboard.css';

const Dashboard = () => {
  const images = [
    '/images/image5.jpg',
    '/images/image2.png',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image1.png',
  ];
  
  return (
    <div>
      <Navbar />
      <div className="dashboard-content">
        <div className="tyrian-band"></div>
        <div className="carousel-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="carousel"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="tyrian-band"></div>

       
        <div className="welcome-section">
          <h1>Welcome to MediConnect</h1>
          <p>Your one-stop solution for connecting patients, doctors, and labs seamlessly.</p>
        </div>

       
        <div className="statistics-section">
          <div className="stat">
            <h2>1,200+</h2>
            <p>Doctors Registered</p>
          </div>
          <div className="stat">
            <h2>2,500+</h2>
            <p>Patients Served</p>
          </div>
          <div className="stat">
            <h2>300+</h2>
            <p>Labs Connected</p>
          </div>
        </div>

        
        <div className="cta-section">
          <button className="cta-btn">Find a Doctor</button><br></br>
          <button className="cta-btn">Book a Lab Test</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
