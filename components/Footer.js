import { Container } from "@mui/system";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import iconMap from "../util/iconMap";
import Copyright from "./Copyright";
import MediaLinks from "./MediaLinks";

function Footer() {
  const links = [
    {
      name: "Github",
      url: "https://jestjs.io/docs/setup-teardown",
    },
    {
      name: "LinkedIn",
      url: "https://developer.mozilla.org/en-US/",
    },
  ];

  return (
    <Container variant="section">
      <MediaLinks links={links} />
      <Copyright />
    </Container>
  );
}

export default Footer;
