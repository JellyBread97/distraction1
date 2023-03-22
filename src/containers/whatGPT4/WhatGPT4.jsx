import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT4.css";

const WhatGPT3 = () => (
  <div className="gpt4__whatgpt4 section__margin" id="wgpt4">
    <div className="gpt4__whatgpt4-feature">
      <Feature
        title="What is GPT-4"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum"
      />
    </div>
    <div className="gpt4__whatgpt4-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt4__whatgpt4-container">
      <Feature
        title="Chatbots"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum"
      />
      <Feature
        title="Knowledgebase"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia"
      />
      <Feature
        title="Education"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae"
      />
    </div>
  </div>
);

export default WhatGPT3;
