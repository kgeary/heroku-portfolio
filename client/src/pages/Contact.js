import React from "react";
import { Container } from "@material-ui/core"
import Main from "../components/Main";
import ContactContent from "../content/ContactContent";
function Contact(props) {
  return (
    <Container maxWidth="md">
      <Main title="Contact Info">
        <ContactContent />
      </Main>
    </Container>
  );
}
export default Contact;