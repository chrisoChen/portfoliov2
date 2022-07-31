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

function Navbar() {
  const [drawerNavOpen, setDrawerNavOpen] = useState(false);
  const navOptions = ["About", "Experience", "Projects", "Contact"];

  const handleDrawerToggle = () => {
    setDrawerNavOpen(!drawerNavOpen);
  };

  const NavBoxSx = {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    padding: 0,
  };

  return (
    <Box>
      <AppBar position="static" elevation={0} sx={{ py: 2 }}>
        <Container maxWidth="lg">
          <Toolbar
            component="ul"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              color="secondary"
              sx={{
                display: { sm: "flex", md: "none" },
              }}
            >
              <MenuIcon sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }} />
            </IconButton>

            <LogoIconBtn />
            <Box
              maxWidth="lg"
              component="ul"
              sx={{
                ...NavBoxSx,
                ...{ display: { xs: "none", sm: "none", md: "flex" } },
              }}
            >
              <NavItems navOptions={navOptions} />
            </Box>
            <Button
              size="large"
              startIcon={<DescriptionIcon />}
              sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            >
              Resume
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <NavDrawer
        drawerNavOpen={drawerNavOpen}
        handleDrawerToggle={handleDrawerToggle}
      >
        <NavItems navOptions={navOptions} />
      </NavDrawer>
    </Box>
  );
}

export default Navbar;
