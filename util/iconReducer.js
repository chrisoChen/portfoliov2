import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";

function iconReducer(links, color = "secondary.main") {
  let icon;

  const linkIcons = Object.keys(links).reduce((fragmentLinkIcons, currKey) => {
    switch (currKey) {
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

    fragmentLinkIcons[currKey] = (
      <Link
        href={links[currKey]}
        aria-label={`Link to my ${currKey}`}
        target="_blank"
        rel="noopener noreferrer"
        color={color}
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": { opacity: "0.65", transition: "0.3s" },
        }}
      >
        {icon}
      </Link>
    );
    return fragmentLinkIcons;
  }, {});

  return linkIcons;
}

export default iconReducer;
