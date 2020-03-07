import React from "react";
import "./style.css";

const baseUrl = "https://www.github.com/kgeary/";

function Project(props) {
  return (
    <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="Project">
      <a href={baseUrl + props.link}>
        <img src={props.img} alt={props.title} className="projectImage" />
        <h1>{props.title}</h1>
      </a>
      <p>Tags: {props.tags ? props.tags : "No Tags"}</p>
    </div>
  );
}

export default Project;