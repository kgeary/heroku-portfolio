import React from "react";
import "./style.css";
import profileImage from "./kg-wide.jpg";

function AboutContent(props) {
  return (
    <React.Fragment>
      <img
        alt="Kevin at Machu Picchu"
        className="profileImage"
        src={profileImage}
      />
      <section className="clearFix">
        <p>
          Hi, I'm Kevin, a full=stack web developer located in Austin, Texas.
          I am a recent graduate of the University of Texas Full Stack Bootcamp who is looking
          for new career opportunities at this time.
          I'm passionate about javascript, React, and being part of a team to build great things.
          I love working with data and debugging code.
        </p>

        <p>
          I recently relocated from Detroit, Michigan where I worked in the automotive sector
          programming embedded systems and desktop applications. I hope to leverage my
          education and professional experience to accelerate my growth and acquire new skills.
        </p>

      </section>

      <section>
        <h3>Hobbies</h3>
        <ul>
          <li>Hiking</li>
          <li>Mountain Biking</li>
          <li>Skateboarding</li>
        </ul>
        <p>I love following sports and the Detroit Lions.</p>
      </section>

      <section>
        <h3>Education</h3>
        <ul>
          <li>
            BSE in Computer Engineering from the University of Michigan, Ann Arbor<br />
          </li>
          <li>
            Graduate University of Texas Full Stack Bootcamp
          </li>
        </ul>
      </section>

      <section>
        <h3>Technology</h3>
        <ul className="techList">
          <div style={{ marginRight: "3rem" }}>
            <li>HTML</li>
            <li>CSS</li>
            <li>javascript</li>
            <li>React</li>
            <li>node</li>
          </div>
          <div>
            <li>Express</li>
            <li>jQuery</li>
            <li>MySQL</li>
            <li>MongoDb</li>
            <li>RegEx</li>
          </div>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default AboutContent;