import React from "react";
import { Container } from "@material-ui/core"
import Main from "../components/Main";
import PortfolioContent from "../content/PortfolioContent";

function Portfolio(props) {
  return (
    <Container maxWidth="md">
      <Main title="Portfolio">
        <PortfolioContent />
      </Main>
    </Container>
  );
}
export default Portfolio;