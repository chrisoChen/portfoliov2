import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import RateReviewIcon from "@mui/icons-material/RateReview";
import LinkIcon from "@mui/icons-material/Link";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
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
    case "figma":
      return <DesignServicesIcon />;
    case "youtube":
      return <YouTubeIcon />;
    case "hackathon":
      return <SportsScoreIcon />;
    default:
      return <LinkIcon />;
  }
}

function iconMap(links, clickElement = <Box />, owner = "") {
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
        { ...clickElement.props, title: `${owner} ${link.name} Link` },
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
