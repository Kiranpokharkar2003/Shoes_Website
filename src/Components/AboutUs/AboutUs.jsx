import React from 'react';
import './AboutUs.css';
import im_1 from "./about_us.png" 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <img
          src={im_1}
          alt="Our Store"
          className="store-img"
        />
        <div className="about-us-text">
          <h1>About Us</h1>
          <h2>
            Your One-Stop Shoe Shop
          </h2>
          <p>
            Welcome to our eCommerce store! We offer a wide selection of shoes for every occasion. From stylish sneakers to elegant formal shoes, our collection is curated to provide you with the latest trends and timeless classics. Our mission is to deliver high-quality footwear at affordable prices, with excellent customer service to ensure a seamless shopping experience.
          </p>
          <button className="shop-now-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
