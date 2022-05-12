import React from 'react';
import './footer.css';

// THIS IS A FOOTER COMPONENT CONTAINING THE DATA FOR FOOTER

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <h2 style={{ color: 'white', fontFamily: 'cursive' }}>Web App</h2>
        <p><br />All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Important Links</h4>
        <p>Smart contracts</p>
        <p>Transparency</p>
        <p>Security</p>
        <p>Privacy</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Delhi NCR</p>
        <p>+91 22222-22222</p>
        <p>info@abc.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 web app. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
