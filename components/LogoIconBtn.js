import LogoIcon from "./LogoIcon";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { ScrollContext } from "../context/ScrollContext";

function LogoIconBtn() {
  const { executeScroll, introSection } = useContext(ScrollContext);

  return (
    <IconButton
      size="large"
      variant="logo"
      edge={false}
      aria-label="Logo Button"
      onClick={(e) => executeScroll(e, introSection.sectionRef)}
    >
      <LogoIcon />
    </IconButton>
  );
}

export default LogoIconBtn;
