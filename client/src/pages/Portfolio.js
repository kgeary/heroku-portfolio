import React from "react";
import { Container } from "@material-ui/core"
import Section from "../components/Section";
import PortfolioContent from "../content/PortfolioContent";

function Portfolio(props) {
  return (
    <Container maxWidth="md">
      <Section title="Portfolio">
        <PortfolioContent />
      </Section>
    </Container>
  );
}
export default Portfolio;