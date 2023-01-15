import React from "react";
import "./About.css";
import about from "../images/about.png";
const About = () => {
  return (
    <div className="about-page container">
      <div>
        <img src={about} alt="" />
      </div>
      <div className="about-right-side">
        <h5>Fithness Gym</h5>
        <h1>About Us</h1>

        <p>
        About My Goal
  I'm Hazrat .I study in Bcs in CSE . I want to be a Software Engineer. Now I want to be MERN Stack Developer. I love tech field so that I love to do this work. So my next shortterm goal is to be a Developer or MERN stack.And my leargest goal is To Be a Software Engineer.
  <br/>
  How to Archive my Goal
 A common goal for engineers is learning a new skill.So, I'm focusing to gain new skill.Skills can be gain by day-by-day practice. So I should practice more and more.I have to dedicated about my goals.

        </p>
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  );
};

export default About;
