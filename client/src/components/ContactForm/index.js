import React from "react";
import { TextField, TextArea, Button } from "@material-ui/core";
import submit from "./submit";
import "./style.css";

function ContactForm() {

  const variant = "outlined" // "outlined" : "filled" : 
  const className = "formField";
  return (
    <form>
      <div className={className}>
        <TextField
          fullWidth
          className={className}
          id="name"
          label="Name"
          placeholder="Your Name"
          variant={variant}
        />
      </div>

      <div className={className}>
        <TextField
          fullWidth
          className={className}
          id="email"
          label="Email"
          placeholder="Your Email"
          variant={variant}
        />
      </div>
      <div className={className}>
        <TextField
          fullWidth
          className={className}
          id="subject"
          label="Subject"
          placeholder="Email Subject"
          variant={variant}
        />
      </div>

      <div className={className}>
        <TextField
          fullWidth
          multiline
          id="message"
          label="Message (1024 char max)"
          placeholder="Your Message"
          rows={6}
          maxLength={1024}
          variant={variant}
        />
      </div>

      <Button
        id="submit"
        onClick={submit}
        variant="contained"
        color="primary"
      >Submit
      </Button>

      <span id="alert" role="alert" className="alert" />
    </form>
  );
}

export default ContactForm;