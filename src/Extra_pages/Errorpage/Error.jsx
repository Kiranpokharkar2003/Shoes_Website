import React from 'react';
import './Error.css';
import ErrorImage from './error.avif'; 

const Error = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <img src={ErrorImage} alt="ERROR" className="error-image" />
      </div>
    </div>
  );
};

export default Error;
