import React from 'react';
import './ThankYou.css';
import thankYouImage from './ThankYou.jpg'; 

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <div className="thank-you-container">
        <img src={thankYouImage} alt="Thank You" className="thank-you-image" />
        <h1>Thank You for Your Purchase!</h1>
        <p>Your order has been placed successfully.</p>
        <button onClick={() => window.location.href = '/shop'}>Shop Again</button>
      </div>
    </div>
  );
};

export default ThankYou;
