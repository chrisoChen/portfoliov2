import { Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";
import { useContext } from "react";
import { ScrollContext } from "../context/ScrollContext";

function NavItems() {
  const { executeScroll = () => null, navbarOptions = [] } =
    useContext(ScrollContext);

  const navItems = navbarOptions.map((option) => {
    return (
      <Typography variant="body1" component="li" key={uuidv4()}>
        <MuiLink
          color="secondary"
          underline="hover"
          onClick={(e) => executeScroll(e, option.sectionRef)}
        >
          {option.name}
        </MuiLink>
      </Typography>
    );
  });

  return navItems;
}

export default NavItems;
