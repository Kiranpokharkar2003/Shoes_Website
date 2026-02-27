import React from 'react';
import './ContactForm.css';
import contactImage from './contact-us.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-form-content">
        <img
          src={contactImage}
          alt="Contact"
          className="contact-img"
        />
        <div className="form-container">
          <h2>Quick Contact</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="contact-info">
        <div>
        <FontAwesomeIcon icon={faLocationDot} /> 
        <p>Address </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <p>+91 xxxxx xxxxx</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
