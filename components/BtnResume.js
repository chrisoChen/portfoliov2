import { Button } from "@mui/material";
import { Link } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

function BtnResume(props) {
  const { children, style = null } = props;
  return (
    <Button
      size="large"
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
