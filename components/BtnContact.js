import { Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';

function BtnContact(props) {
  const { children } = props;
  
  return (
    <Button size="large" startIcon={<EmailIcon />}>
      {children}
    </Button>
  );
}

export default BtnContact;
