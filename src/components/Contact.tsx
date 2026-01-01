import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section-title">Get In Touch</h2>
        <p className="section-subtitle">We'd love to hear from you</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z" stroke="#7FDBFF" strokeWidth="2" fill="none"/>
                  <path d="M16 8V16M16 22V24" stroke="#7FDBFF" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+27123456789" className="contact-link">+27-123-456-789</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M4 8L16 16L28 8M4 8V24C4 25.1 4.9 26 6 26H26C27.1 26 28 25.1 28 24V8M4 8C4 6.9 4.9 6 6 6H26C27.1 6 28 6.9 28 8" stroke="#7FDBFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:info@sparkleautowash.co.za" className="contact-link">info@sparkleautowash.co.za</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="16" cy="16" r="14" stroke="#7FDBFF" strokeWidth="2" fill="none"/>
                  <path d="M16 8V16L20 20" stroke="#7FDBFF" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Opening Hours</h3>
                <p className="contact-text">Monday - Saturday</p>
                <p className="contact-text">8:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="contact-message">
              <p>
                Ready to give your car the sparkle it deserves? Give us a call or drop us an email today. We're here to make your vehicle shine like new!
              </p>
            </div>

            <div className="social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Visit us on Instagram"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="28" height="28" rx="6" stroke="#001F3F" strokeWidth="2" fill="none"/>
                  <circle cx="16" cy="16" r="6" stroke="#001F3F" strokeWidth="2" fill="none"/>
                  <circle cx="24" cy="8" r="1.5" fill="#001F3F"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Visit us on Facebook"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 26V18H22L23 14H18V11C18 9.34315 19.3431 8 21 8H23V4H21C16.5817 4 13 7.58172 13 12V14H9V18H13V26H18Z" stroke="#001F3F" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.1234567890123!2d28.12345678901234!3d-26.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzI0LjQiUyAyOMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sparkle Auto Wash Location"
                aria-label="Map showing Sparkle Auto Wash location at 123 Main St"
              ></iframe>
            </div>
            <div className="map-address">
              <h3>Visit Us</h3>
              <p>123 Main Street</p>
              <p>Your Town, South Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;