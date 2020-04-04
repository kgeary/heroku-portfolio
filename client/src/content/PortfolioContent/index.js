import React, { useState } from "react";
import { TextField, Typography, Fab } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Project from "../../components/Project";
import ScrollTop from "../../components/ScrollTop";
import projects from "./projects";
import "./style.css";

const allFoundTags = projects
  .reduce((acc, project) => {
    return acc.concat(project.tags
      .split(",")
      .map(i => i.trim().toLowerCase()))
  }, [])
  .sort();

const tagList = [...new Set(allFoundTags)];

function PortfolioContent(props) {

  const [search, setSearch] = useState("");

  function onAutoComplete(event, value) {
    setSearch(value);
  }

  const onInputChange = e => {
    setSearch(e.target.value);
  }

  const getProjectsFound = () => {
    const numFound = projects
      .filter(project => project.tags
        .toLowerCase()
        .includes(search.toLowerCase())).length;
    return numFound
      ? ((numFound !== 1)
        ? `${numFound} Projects Found`
        : "1 Project Found")
      : "No Projects Found"
  }

  const showFilteredProjects = () => {
    return projects
      .filter(project => project.tags
        .toLowerCase()
        .includes(search.toLowerCase()))
      .map(project => (
        <Project
          {...project}
          key={project.title}
          setSearch={setSearch} />
      ))
  }

  return (
    <React.Fragment>
      <div className="filterBox">
        <Autocomplete
          id="search"
          freeSolo
          options={tagList}
          style={{ width: "300px" }}
          onInputChange={onAutoComplete}
          renderInput={(params) => (
            <TextField
              {...params}
              margin="normal"
              size="medium"
              variant="outlined"
              label="Filter Projects by Tag"
              value={search}
              onChange={onInputChange}
            />
          )}
        />

        <Typography
          variant={"p"}
          className="numProjects"
        >
          {getProjectsFound()}
        </Typography>
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