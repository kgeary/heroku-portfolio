import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip"
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import "./style.css";

function ContactToolbar(props) {
  return (
    <Toolbar className="contactMethods" disableGutters>
      <span style={{ fontSize: "16px" }}>Quick Links:</span>
      <a href="mailto:kgeary@gmail.com" target="_blank" rel="noopener noreferrer">
        <Tooltip title="Email" aria-label="Send An Email">
          <MailOutlineIcon className="contactIcon" />
        </Tooltip>
      </a>
      <a href="https://github.com/kgeary" target="_blank" rel="noopener noreferrer">
        <Tooltip title="Github Profile" aria-label="Goto Github Profile">
          <GitHubIcon className="contactIcon" />
        </Tooltip>
      </a>
      <a href="Kevin_Geary_Resume.pdf" target="_blank" rel="noopener noreferrer">
        <Tooltip title="Download My Resume" aria-label="Download Resume">
          <PictureAsPdfIcon className="contactIcon" />
        </Tooltip>
      </a>
    </Toolbar>

  );
}

export default ContactToolbar;
