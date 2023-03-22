import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="gpt4__footer section__padding">
    <div className="gpt4__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="gpt4__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt4__footer-links">
      <div className="gpt4__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
          Martin Kotas <br /> Frontend Web Developer
        </p>
      </div>
      <div className="gpt4__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt4__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt4__footer-links_div">
        <h4>Get in touch</h4>
        <p>Martin Kotas</p>
        <p>+44 7872 622 451</p>
        <p>kotasmartin1997@gmail.com</p>
      </div>
    </div>

    <div className="gpt4__footer-copyright">
      <p>@2023 MK. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
