import React from "react";
import { TextField, Button } from "@material-ui/core";
import submit from "./submit";
import "./style.css";

function ContactForm() {

  const variant = "outlined" // "outlined" : "filled" : 
  const className = "formField";
  return (
    <React.Fragment>
      <p>Send Me a message...</p>
      <form>
        <div className={className}>
          <TextField
            fullWidth
            className={className}
            id="name"
            label="Name"
            placeholder="Your Name"
            variant={variant}
            size="small"
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
            size="small"
          />
        </div>

        <div className={className}>
          <TextField
            fullWidth
            multiline
            id="message"
            label="Message (1024 char max)"
            placeholder="Your Message"
            rows={5}
            maxLength={1024}
            variant={variant}
            size="small"
          />
        </div>
        <Button
          id="submit"
          onClick={submit}
          size="large"
          variant="contained"
          color="primary"
        >Submit
      </Button>
        <br />
        <br />
        <span id="alert" role="alert" className="alert" />
      </form>
    </React.Fragment>
  );
}

export default ContactForm;