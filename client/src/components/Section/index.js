import React from 'react';
import { Box } from "@material-ui/core";
import "./style.css";

function Section(props) {
  return (
    <Box className="Section">
      <h1 className="Title">{props.title}</h1>
      <h3 className="Subtitle">{props.subtitle}</h3>
      {props.children}
    </Box>
  );
}

export default Section;