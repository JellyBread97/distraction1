import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt4__possibility section__padding" id="possibility">
    <div className="gpt4__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt4__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum!
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
