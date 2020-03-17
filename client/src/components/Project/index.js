import React from "react";
import "./style.css";

const baseUrl = "https://www.github.com/kgeary/";

function Project(props) {

  const onTagClick = (tag) => {
    props.setSearch(tag);
    window.scrollTo(0, 0);
  }

  const getTags = () => {
    if (!props.tags) {
      return <span>No Tags</span>
    } else {
      const tags = props.tags.split(",").map(tag => tag.trim());
      return tags.map(tag => (
        <span key={tag} className="tag" onClick={() => onTagClick(tag)}>{tag}</span>
      ))
    }
  }

  return (
    <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="Project">
      <a href={baseUrl + props.link}>
        <h1>{props.title}</h1>
        <img src={props.img} alt={props.title} className="projectImage" />
      </a>
      <p className="tags">Tags: {getTags()}</p>
    </div>
  );
}

export default Project;