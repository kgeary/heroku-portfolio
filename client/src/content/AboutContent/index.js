import React from "react";
import "./style.css";
import profileImage from './kg-wide.jpg';

function AboutContent(props) {
  return (
    <React.Fragment>
      <img
        className="profileImage"
        src={profileImage}
        alt="Kevin at Machu Picchu"
      />

      <p>
        Hi, I'm Kevin and I'm an aspiring web developer located in Austin, Texas.
        I am a recent graduate of the University of Texas Full Stack Bootcamp who is looking
          for new career opportunities at this time.
        I'm passionate about javascript and React and being part of a team to build great things.
      </p>
      <p>
        I recently relocated from Detroit, Michigan where I worked in the automotive sector
        programming embedded applications. I am relatively new to web development,
        but hope to leverge my education and work experience to accelerate my growth.
      </p>
      <h3>Hobbies</h3>
      <p>
        I enjoy hiking, mountain biking, and skateboarding.<br />
        I'm an avid sports fan and love football.
      </p>
      <h3>Education</h3>
      <p>
        BSE in Computer Engineering from the University of Michigan, Ann Arbor<br />
        Graduate University of Texas Full Stack Bootcamp
      </p>
      <p style={{ display: "none" }}>
        I have experience with:
        <ul class="skill-list">
          <li>HTML</li>
          <li>css</li>
          <li>javascript</li>
          <li>React</li>
          <li>node</li>
          <li>express</li>
          <li>jQuery</li>
          <li>MySQL</li>
          <li>MongoDb</li>
          <li>regEx</li>
        </ul>
      </p>
    </React.Fragment>
  );
}

export default AboutContent;