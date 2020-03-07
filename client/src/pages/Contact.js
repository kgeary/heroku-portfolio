import React from "react";
import { Container } from "@material-ui/core"
import Section from "../components/Section";
import ContactContent from "../content/ContactContent";
function Contact(props) {
  return (
    <Container maxWidth="md">
      <Section title="Contact Me">
        <ContactContent />
      </Section>
    </Container>
  );
}
export default Contact;