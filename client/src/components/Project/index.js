import React from "react";
import Tooltip from "@material-ui/core/Tooltip"
import GitHubIcon from "@material-ui/icons/GitHub";
import PublicIcon from '@material-ui/icons/Public';
import "./style.css";

const baseUrl = "https://www.github.com/kgeary/";

function Project(props) {

  const onTagClick = (tag) => {
    props.setSearch(tag);
    window.scrollTo(0, 0);
  }

  const getLinks = () => {
    return (
      <>
        <div className="linkGroup">
          <a
            href={baseUrl + props.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tooltip
              title="Github Repository"
              aria-label="Goto Github Repository"
            >
              <GitHubIcon className="linkIcon" />
            </Tooltip>
            <span>Github</span>
          </a>
          {
            props.deploy
              ? <a
                href={props.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tooltip
                  title="Deployed Site"
                  aria-label="Goto Deployed Site"
                >
                  <PublicIcon className="linkIcon" />
                </Tooltip>
                <span>Deployed</span>
              </a>
              : null
          }
        </div>
      </>
    )
  }

  const getTags = () => {
    if (!props.tags) {
      return <span>No Tags</span>
    } else {
      const tags = props.tags.split(",").map(tag => tag.trim());
      return tags.map(tag => (
        <span
          key={tag}
          className="tag"
          onClick={() => onTagClick(tag)}>{tag}
        </span>
      ))
    }
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="400"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      className="Project"
    >
      <a
        href={baseUrl + props.github}
        target="_blank"
        rel="noopener noreferrer">
        <h1>{props.title}</h1>
        <img
          src={props.img}
          alt={props.title}
          className="projectImage"
        />
      </a>

      <p className="description">
        <span style={{ fontWeight: "bold", display: "block" }}>
          Description
        </span>
        <span>
          {props.description}
        </span>
      </p>

      <p className="tags">
        {getTags()}
      </p>

      <div className="links">
        {getLinks()}
      </div>

    </div >
  );
}

export default Project;