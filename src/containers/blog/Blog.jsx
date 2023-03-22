import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt4__blog section__padding" id="blog">
    <div className="gpt4__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="gpt4__blog-container">
      <div className="gpt4__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Mar 22, 2023"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia"
        />
      </div>
      <div className="gpt4__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Mar 20, 2023"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia"
        />
        <Article
          imgUrl={blog03}
          date="Feb 18, 2023"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia"
        />
        <Article
          imgUrl={blog04}
          date="Feb 10, 2023"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia"
        />
        <Article
          imgUrl={blog05}
          date="Jan 31, 2023"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia"
        />
      </div>
    </div>
  </div>
);

export default Blog;
