import { Container } from "@mui/system";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import iconAppend from "../util/iconAppend";

function Footer() {
  const iconLinks = iconAppend(
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
    return link.linkIcon;
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
    </Container>
  );
}

export default Footer;
