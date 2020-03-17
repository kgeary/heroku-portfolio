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
          Hi, I'm Kevin, a full-stack web developer located in Austin, Texas.
          I am a recent graduate of the University of Texas Full Stack Bootcamp who is looking
          for new career opportunities at this time.
        </p>

        <p>
          I recently relocated from Detroit, Michigan where I worked in the automotive sector
          programming embedded systems and desktop applications at a Tier-1 supplier.
          While in automotive, I gained experience working on multidisciplinary
          teams and within a number of software development processes.
        </p>

        <p>
          I'm passionate about technology, coding, and being part of a team to build great things.
          Going forward, I hope to leverage my educational and professional experience to accelerate my growth as
          a software developer.
        </p>

      </section>

      <section>
        <h3>Hobbies</h3>
        <p>
          When I'm not working I enjoy spending time outdoors with my wife and our dog.
          I enjoy hiking, mountain biking, and skateboarding. I am an avid sports fan and
          love to follow basketball and football.
        </p>
      </section>

      <section>
        <h3>Education</h3>
        <ul>
          <li>
            BSE in Computer Engineering<br />
            University of Michigan, Ann Arbor
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
            <li>Node</li>
            <li>Bootstrap</li>
          </div>
          <div>
            <li>Express</li>
            <li>jQuery</li>
            <li>MySQL</li>
            <li>MongoDb</li>
            <li>C#</li>
            <li>Python</li>
          </div>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default AboutContent;