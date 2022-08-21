import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Divider } from "@mui/material";
import { List } from "@mui/material";
import { Drawer } from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import LogoIconBtn from "./LogoIconBtn";

function NavDrawer(props) {
  const { drawerNavOpen, handleDrawerToggle, children } = props;

  const drawerContent = (
    <Box onClick={handleDrawerToggle} color="primary">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <IconButton
          aria-label="Close Button"
          sx={{
            my: 2,
            alignSelf: "flex-end",
          }}
        >
          <CloseIcon color="secondary" variant="icon" />
        </IconButton>

        <Box sx={{ my: 2, alignSelf: "center" }}>
          <LogoIconBtn />
        </Box>
        <Divider />
        <List sx={{ py: 3 }}>{children}</List>
      </Container>
    </Box>
  );

  return (
    <Drawer
      open={drawerNavOpen}
      onClose={handleDrawerToggle}
      variant="persistent"
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{ display: { xs: "block", md: "none" } }}
    >
      {drawerContent}
    </Drawer>
  );
}

export default NavDrawer;
