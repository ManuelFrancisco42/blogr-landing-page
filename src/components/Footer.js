import React from 'react';
import iconLogoFooter from '../assets/images/logo.svg';
 

const Footer = () => (
  <footer>
    <img
      id="iconlogoFooter"
      alt="logo footer"
      className="logo-footer"
      src={iconLogoFooter}
    />
    <ul>
      <h4>Product</h4>
      <li>
        <a href="#">Overview</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">Marketplace</a>
      </li>
      <li>
        <a href="#">Features</a>
      </li>
      <li>
        <a href="#">Integrations</a>
      </li>
    </ul>
    <ul>
      <h4>Company</h4>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Team</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
      <li>
        <a href="#">Careers</a>
      </li>
    </ul>
    <ul>
      <h4>Connect</h4>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Newsletter</a>
      </li>
      <li>
        <a href="#">LinkedIn</a>
      </li>
    </ul>
    <div className="attribution">
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href="https://www.mfrancisco.fr"
        target="_blank"
        rel="noopener noreferrer"
      >
        Manuel Francisco
      </a>
      .
    </div>
  </footer>
);

export default Footer;
