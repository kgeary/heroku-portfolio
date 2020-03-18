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
          I am a full-stack web developer located in Austin, Texas.
          I graduated from the University of Texas Full Stack Bootcamp and am looking
          for new career opportunities at this time.
        </p>

        <p>
          I recently relocated from Detroit, Michigan where I worked in the automotive sector
          programming embedded systems and desktop applications at a Tier-1 supplier. My past experience
          in the design, development, and testing of software has helped in my transition to
          web development, but I have much to learn.
        </p>

        <p>
          I'm passionate about technology, coding, and being part of a team that builds
          great things. Please follow my projects on Github and contact me if you would like to know more.
        </p>

      </section>

      <section>
        <h3>Hobbies</h3>
        <p>
          When I'm not working I enjoy spending time outdoors with my wife and our dog.
          I enjoy hiking, mountain biking, and skateboarding. I am an avid sports fan especially
          basketball and football.
        </p>
      </section>

      <section>
        <h3>Education</h3>
        <ul>
          <li>
            BSE, Computer Engineering<br />
            University of Michigan, Ann Arbor
          </li>
          <li>
            Graduate, University of Texas Full-Stack Bootcamp
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