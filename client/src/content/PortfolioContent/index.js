import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import Project from "../../components/Project";
import "./style.css";
import projects from "./projects";


function PortfolioContent(props) {
  const [search, setSearch] = useState("");

  const onInputChange = e => {
    setSearch(e.target.value);
  }

  const getProjectsFound = () => {
    const numFound = projects.filter(project => project.tags.toLowerCase().includes(search)).length;
    return numFound ?
      ((numFound != 1) ? `${numFound} Projects Found` : "1 Project Found") :
      "No Projects Found"
  }

  const showFilteredProjects = () => {
    return projects
      .filter(project => project.tags.toLowerCase().includes(search))
      .map(project => (
        <Project {...project} key={project.title} />
      ))
  }

  return (
    <React.Fragment>
      <div className="filterBox">
        <TextField
          autoFocus
          id="search"
          margin="normal"
          size="small"
          type="search"
          variant={"filled"}
          label="Filter by Tag"
          onChange={onInputChange}
        />
        <Typography variant={"h5"}>{getProjectsFound()}</Typography>
      </div>
      {showFilteredProjects()}
      <div style={{ textAlign: "center" }}>
        <Button
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
        >
          Back to Top
      </Button>
      </div >
    </React.Fragment >
  );
}

export default PortfolioContent;