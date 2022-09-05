import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import DescriptionIcon from "@mui/icons-material/Description";

function BtnResume(props) {
  const { children, style = null } = props;
  const breakpointMatch = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Button
      size={breakpointMatch ? "large" : "small"}
      startIcon={<DescriptionIcon />}
      sx={style}
      href="/data/chris-chen-resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Button>
  );
}

export default BtnResume;
