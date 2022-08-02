import LogoIcon from "./LogoIcon";
import { IconButton } from "@mui/material";

function LogoIconBtn() {
  return (
    <IconButton
      size="large"
      variant="logo"
      edge={false}
      aria-label="Logo Button"
    >
      <LogoIcon />
    </IconButton>
  );
}

export default LogoIconBtn;
