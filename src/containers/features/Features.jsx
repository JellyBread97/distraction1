import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Improving improving improving",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat.",
  },
  {
    title: "Become active",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat.",
  },
  {
    title: "Message message message",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat.",
  },
  {
    title: "Really good",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat.",
  },
];

const Features = () => (
  <div className="gpt4__features section__padding" id="features">
    <div className="gpt4__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt4__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
