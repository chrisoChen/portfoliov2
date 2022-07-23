import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Logo from "./Logo";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import NextLink from "next/link";
import DescriptionIcon from "@mui/icons-material/Description";

function Navbar() {
  const { anchorElNav, setAnchorElNav } = useState(null);
  const { anchorElUser, setAnchorElUser } = useState(null);

  const options = ["About", "Experience", "Projects", "Contact"];
  const navItems = options.map((option) => {
    return (
      <Typography variant="h6" component="li" key={uuidv4()}>
        <NextLink href={`#${option}`} passHref>
          <MuiLink color="secondary" underline="hover">
            {option}
          </MuiLink>
        </NextLink>
      </Typography>
    );
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" elevation={0} sx={{ py: 2 }}>
      <Container maxWidth="lg">
        <Toolbar component="ul" sx={{ justifyContent: "space-between" }}>
          <IconButton size="large" edge={false} aria-label="menu">
            <Logo />
          </IconButton>
          <Box
            maxWidth="lg"
            sx={{
              display: "flex",
              listStyle: "none",
              display: "flex",
              gap: "2rem",
            }}
          >
            {navItems}
          </Box>

          <Button size="large" startIcon={<DescriptionIcon />}>
            Resume
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
