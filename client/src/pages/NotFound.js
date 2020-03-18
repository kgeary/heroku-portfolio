import React from "react";
import { useLocation } from "react-router-dom";
import Main from "../components/Main";
import { Container } from "@material-ui/core";

function NotFound(props) {

  const location = useLocation();
  console.log(location);
  return (
    <Container maxWidth="md">
      <Main title="Not Found">
        <h3>Path: {location.pathname}</h3>
        <h5>I'm Sorry Dave. I'm afraid I can't do that.</h5>
      </Main>
    </Container>
  );
}

export default NotFound;