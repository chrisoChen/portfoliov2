import LogoIcon from "./LogoIcon";
import { IconButton } from "@mui/material";

function LogoIconBtn() {
  return (
    <IconButton
      size="large"
      variant="logo"
      edge={false}
      sx={{ margin: "0 auto" }}
      aria-label="Logo Button"
      //   sx={{
      //     display: "block",
      //     mx: { md: 0 },
      //   }}
    >
      <LogoIcon />
    </IconButton>
  );
}

export default LogoIconBtn;
