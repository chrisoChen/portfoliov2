import { Container } from "@mui/system";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import iconMap from "../util/iconMap";
import Copyright from "./Copyright";
import MediaLinks from "./MediaLinks";
import { useContext } from "react";

function Footer() {
  return (
    <Container variant="section">
      <Copyright />
    </Container>
  );
}

export default Footer;
