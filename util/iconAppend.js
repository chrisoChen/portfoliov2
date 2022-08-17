import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
import { cloneElement } from "react";
import { v4 as uuidv4 } from "uuid";

function iconAppend(links, clickElement = null) {
  let icon, iconClick;
  const linkIcons = links.map((link) => {
    switch (link.name.toLowerCase()) {
      case "github":
        icon = <GitHubIcon />;
        break;
      case "linkedin":
        icon = <LinkedInIcon />;
        break;
      case "email":
        icon = <EmailIcon />;
      default:
        icon = null;
        break;
    }

    if (clickElement) {
      icon = cloneElement(clickElement, clickElement.props, icon);
    }

    const linkedIcon = (
      <Link
        href={link.url}
        aria-label={`Link to my ${link.name}`}
        key={uuidv4()}
        target="_blank"
        rel="noopener noreferrer"
        color="secondary.main"
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": { opacity: "0.65", transition: "0.3s" },
        }}
      >
        {icon}
      </Link>
    );
    return { ...link, linkIcon: linkedIcon };
  });
  return linkIcons;
}

export default iconAppend;
