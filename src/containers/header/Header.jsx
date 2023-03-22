import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt4__header section__padding" id="home">
      <div className="gpt4__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-4 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque,
          nihil facere nobis fuga quas laboriosam animi, ipsum illum dolores
          iusto eaque necessitatibus beatae nemo. Fugit consequuntur adipisci
          impedit necessitatibus!
        </p>
        <div className="gpt4__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt4__header-content__people">
          <img src={people} />
          <p>Lots of people requested access in last 24 hours</p>
        </div>
      </div>
      <div className="gpt4__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
