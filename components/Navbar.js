import { useState } from "react";
import LogoIconBtn from "./LogoIconBtn";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import CloseIcon from "@mui/icons-material/Close";

import NavItems from "./NavItems";
import NavDrawer from "./NavDrawer";
import BtnResume from "./BtnResume";

function Navbar({ executeScroll, navbarOptions }) {
  const [drawerNavOpen, setDrawerNavOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerNavOpen(!drawerNavOpen);
  };

  const NavBoxSx = {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    padding: 0,
  };

  const ToolbarStyle = {
    justifyContent: { xs: "center", md: "space-between" },
    alignItems: "center",
    padding: 0,
    position: "relative",
  };

  const MobileDrawerButtonStyle = {
    display: { xs: "static", md: "none" },
    position: "absolute",
    left: "0",
  };

  const MobileDrawerIconStyle = {
    fontSize: { xs: "1.5rem", sm: "2rem" },
  };

  const NavbarResponsiveStyle = {
    ...NavBoxSx,
    ...{ display: { xs: "none", sm: "none", md: "flex" } },
  };

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ py: 2 }}>
        <Container>
          <Toolbar disableGutters component="ul" sx={ToolbarStyle}>
            <IconButton
              onClick={handleDrawerToggle}
              color="secondary"
              sx={MobileDrawerButtonStyle}
            >
              <MenuIcon sx={MobileDrawerIconStyle} />
            </IconButton>

            <LogoIconBtn />
            <Box maxWidth="lg" component="ul" sx={NavbarResponsiveStyle}>
              <NavItems />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <NavDrawer
        drawerNavOpen={drawerNavOpen}
        handleDrawerToggle={handleDrawerToggle}
      >
        <NavItems stack={true} />
      </NavDrawer>
    </>
  );
}

export default Navbar;
