import React from "react";
import { Container } from "@material-ui/core";
import Section from "../components/Section";
import AboutContent from "../content/AboutContent";

function About(props) {
  return (
    <Container maxWidth="md">
      <Section title="About Me">
        <AboutContent />
      </Section>
    </Container>
  );
}
export default About;