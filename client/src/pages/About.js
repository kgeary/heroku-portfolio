import React from "react";
import { Container } from "@material-ui/core";
import Main from "../components/Main";
import AboutContent from "../content/AboutContent";

function About(props) {
  return (
    <Container maxWidth="md">
      <Main title="About Me">
        <AboutContent />
      </Main>
    </Container>
  );
}
export default About;