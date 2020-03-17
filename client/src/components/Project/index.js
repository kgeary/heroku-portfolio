import React from "react";
import "./style.css";

const baseUrl = "https://www.github.com/kgeary/";

function Project(props) {

  const getTags = () => {
    if (!props.tags) {
      return <span>No Tags</span>
    } else {
      const tags = props.tags.split(",").map(tag => tag.trim());
      return tags.map(tag => (
        <span key={tag} className="tag" onClick={() => props.setSearch(tag)}>{tag}</span>
      ))
    }
  }

  return (
    <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="Project">
      <h1>{props.title}</h1>
      <a href={baseUrl + props.link}>
        <img src={props.img} alt={props.title} className="projectImage" />
      </a>
      <p>Tags: {getTags()}</p>
    </div>
  );
}

export default Project;