import React, { useState } from "react";
import { TextField, Typography, Fab } from "@material-ui/core";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Project from "../../components/Project";
import ScrollTop from "../../components/ScrollTop";
import projects from "./projects";
import "./style.css";

function PortfolioContent(props) {
  const [search, setSearch] = useState("");

  const onInputChange = e => {
    setSearch(e.target.value);
  }

  const getProjectsFound = () => {
    const numFound = projects.filter(project => project.tags.toLowerCase().includes(search.toLowerCase())).length;
    return numFound ?
      ((numFound !== 1) ? `${numFound} Projects Found` : "1 Project Found") :
      "No Projects Found"
  }

  const showFilteredProjects = () => {
    return projects
      .filter(project => project.tags.toLowerCase().includes(search.toLowerCase()))
      .map(project => (
        <Project {...project} key={project.title} setSearch={setSearch} />
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
          variant={"outlined"}
          label="Filter Projects by Tag"
          onChange={onInputChange}
          value={search}
        />
        <Typography variant={"h5"} className="numProjects">{getProjectsFound()}</Typography>
      </div>
      {showFilteredProjects()}
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment >
  );
}

export default PortfolioContent;