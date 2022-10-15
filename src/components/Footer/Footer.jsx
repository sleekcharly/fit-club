import React from 'react';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="Github logo" />
          <img src={Linkedin} alt="Linkedin logo" />
          <img src={Instagram} alt="Instagram logo" />
        </div>

        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
