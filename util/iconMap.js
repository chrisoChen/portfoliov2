import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import RateReviewIcon from '@mui/icons-material/RateReview';
import LinkIcon from "@mui/icons-material/Link";
import Link from "@mui/material/Link";
import { cloneElement } from "react";
import { v4 as uuidv4 } from "uuid";

function iconReducer(link) {
  switch (link.toLowerCase()) {
    case "github":
      return <GitHubIcon />;
    case "linkedin":
      return <LinkedInIcon />;
    case "email":
      return <EmailIcon />;
    case "medium blog":
      return <RateReviewIcon />;
    default:
      return <LinkIcon />;
  }
}

function iconMap(links, clickElement = null) {
  const linkStyle = {
    display: "flex",
    alignItems: "center",
    "&:hover": { opacity: "0.65", transition: "0.3s" },
  };

  const iconLinks = links.map((link) => {
    let icon = iconReducer(link.name);

    // Add clickElement as parent element to the icon
    if (clickElement) {
      icon = cloneElement(
        clickElement,
        { ...clickElement.props, title: `Link to my ${link.name}` },
        icon
      );
    }

    const linkedIcon = (
      <Link
        href={link.url}
        aria-label={`Link to my ${link.name}`}
        key={uuidv4()}
        target="_blank"
        rel="noopener noreferrer"
        color="secondary.main"
        sx={linkStyle}
      >
        {icon}
      </Link>
    );
    return { ...link, icon: linkedIcon };
  });
  return iconLinks;
}

export { iconReducer };
export default iconMap;
