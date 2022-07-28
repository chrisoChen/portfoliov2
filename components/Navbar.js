import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Menu, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Logo from "./Logo";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import NextLink from "next/link";
import DescriptionIcon from "@mui/icons-material/Description";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { breakpoints } from "@mui/system";
import Drawer from "@mui/material/Drawer";

function Navbar(props) {
  const { window } = props;
  const [drawerNavOpen, setDrawerNavOpen] = useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const options = ["About", "Experience", "Projects", "Contact"];
  const navItems = options.map((option) => {
    return (
      <Typography variant="body1" component="li" key={uuidv4()}>
        <NextLink href={`#${option}`} passHref>
          <MuiLink color="secondary" underline="hover">
            {option}
          </MuiLink>
        </NextLink>
      </Typography>
    );
  });

  const handleDrawerToggle = () => {
    setDrawerNavOpen(!drawerNavOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>{navItems}</List>
    </Box>
  );

  const MenuBoxSx = {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
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

            <IconButton
              size="large"
              variant="logo"
              edge={false}
              aria-label="Logo Button"
              sx={{
                display: "block",
                mx: { md: 0 },
              }}
            >
              <Logo />
            </IconButton>
            <Box
              maxWidth="lg"
              component="ul"
              sx={{
                ...MenuBoxSx,
                ...{ display: { xs: "none", sm: "none", md: "flex" } },
              }}
            >
              {navItems}
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

      <Box>
        <Drawer
          container={container}
          open={drawerNavOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
