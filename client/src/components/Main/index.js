import React from 'react';
import { Paper } from "@material-ui/core";
import "./style.css";

function Main(props) {

  const className = "Main";

  return (
    <Paper className={className} >
      <h1 className="Title">{props.title}</h1>
      <h3 className="Subtitle">{props.subtitle}</h3>
      {props.children}
    </Paper>
  );
}

export default Main;