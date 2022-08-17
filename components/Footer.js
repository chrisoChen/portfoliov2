import { Container } from "@mui/system";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import iconMap from "../util/iconMap";
import Copyright from "./Copyright";

function Footer() {
  const iconLinks = iconMap(
    [
      {
        name: "Github",
        url: "https://jestjs.io/docs/setup-teardown",
      },
      {
        name: "LinkedIn",
        url: "https://developer.mozilla.org/en-US/",
      },
    ],
    <Button variant="circle" title="test" sx={{ color: "dark.main" }} />
  );

  const iconLinkBtns = iconLinks.map((link) => {
    return link.icon;
  });

  return (
    <Container variant="section">
      <Stack
        justifyContent="center"
        alignItems="center"
        gap={2}
        flexWrap="wrap"
        direction="row"
      >
        {iconLinkBtns}
      </Stack>
      <Copyright />
    </Container>
  );
}

export default Footer;
