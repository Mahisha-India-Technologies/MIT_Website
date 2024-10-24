import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css'; // Include CSS styles
import { FaEnvelope, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'; // Import mail and social icons
import PhoneIcon from '@mui/icons-material/PhoneOutlined'; // Import Material icon for phone
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Import Material icon for WhatsApp
import { Box } from '@mui/material';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleOpenModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleQuoteClick = () => {
    navigate('/reach-us');
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Start building awesome websites</h2>
        <p>Join over 12,653,898 customers that are already building amazing websites with us.</p>
        <div className="footer-buttons">
          <button className="footer-btn quote-btn" onClick={handleQuoteClick}>Get a Quote</button>
          <a href="/" onClick={handleOpenModal}>
            <button className="footer-btn reach-btn">Contact Us</button>
          </a>
        </div>
      </div>

      <div className="footer-middle">
        <div className="company-info">
          <h1 className="footer-logo">
            <span className="nexus-info" style={{ color: 'white', fontSize: '28px' }}>Mahisha<span className="highlight"> India</span> Technologies</span>
          </h1>
          <p>We develop websites for your business, bringing your vision to life and propelling your business into the digital realm.</p>
          <div className="social-icons">
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://facebook.com"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/mahisha-india-technologies/"><FaLinkedinIn /></a>
            <a href="https://whatsapp.com"><WhatsAppIcon /></a>
            <a href="mailto:mahishaindiatechnologies@gmail.com"><FaEnvelope /></a> {/* Added mail icon */}
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-link-section">
            <h4>Company</h4>
            <ul>
              <li><a href="" onClick={() => navigate('/about-us')}>About Us</a></li>
              <li><a href="/internships" onClick={() => navigate('/internships')}>Internships</a></li>
              <li><a href="" onClick={() => navigate('/consultant')}>Consultant</a></li>
              <li><a href="" onClick={() => navigate('/career')}>Career</a></li>
              <li><a href="/" onClick={handleOpenModal}>Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-link-section">
            <h4>Services</h4>
            <ul>
              <li><a href="" onClick={() => navigate('/website-development')}>Website Services</a></li>
              <li><a href="" onClick={() => navigate('/digital-marketing')}>Digital Marketing</a></li>
              <li><a href="" onClick={() => navigate('/mobile-applications')}>Mobile Applications</a></li>
              <li><a href="" onClick={() => navigate('/software-development')}>Software Development</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Still Need Help?</h4>
            <p>
              <a href="mailto:mahishaindiatechnologies@gmail.com" className="email-link">
                <FaEnvelope style={{ marginRight: '10px', fontSize: '1.2rem', color: '#07880F' }} /> 
                mahishaindiatechnologies@gmail.com
              </a>
            </p>
            <p>
              <PhoneIcon style={{ marginRight: '10px', fontSize: '1.2rem', color: '#07880F' }} />
              +91 70949 53135
            </p>
            <p>
              <WhatsAppIcon style={{ marginRight: '10px', fontSize: '1.2rem', color: '#07880F' }} />
              +91 87789 93293
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Mahisha India Technologies Private Limited | All rights reserved.</p>
      </div>

    </footer>
    
  );
};

export default Footer;
