import { Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

function BtnResume(props) {
  const { children } = props;
  return (
    <Button size="large" startIcon={<DescriptionIcon />}>
      {children}
    </Button>
  );
}

export default BtnResume;
