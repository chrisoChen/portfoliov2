import { Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

function BtnResume(props) {
  const { children, style = null } = props;
  return (
    <Button size="large" startIcon={<DescriptionIcon />} sx={style}>
      {children}
    </Button>
  );
}

export default BtnResume;
