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
        Hello I'm Hazrat Ali.I am currently pursuing BSC in CSE. I want to be a Software Engineer in near future.
Now I am currently a MERN Stack Stack and I have passion in web technologies. I am a fast learner and I am confident about myself.
I believe I can face chanllenges of this always changing tech industry.I am looking forward to face the upcoming challenges.Talking about my hobby I love to read
books related to programming and I love to develop things  with programming languages.Thanks for visiting my profile
        </p>
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  );
};

export default About;
