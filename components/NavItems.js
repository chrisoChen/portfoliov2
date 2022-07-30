import { Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";

function NavItems(props) {
  const { navOptions = [] } = props;

  const navItems = navOptions.map((option) => {
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

  return navItems;
}

export default NavItems;
