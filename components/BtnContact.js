import { Button } from "@mui/material";
import { Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

function BtnContact(props) {
  const { children } = props;

  return (
    <Button
      size="large"
      startIcon={<EmailIcon />}
      rel="noopener noreferrer"
      href={`mailto:test@example.com`}
      target="_blank"
    >
      {children}
    </Button>
  );
}

export default BtnContact;

{
  /* <Link
href="/data/chris-chen-resume.pdf"
target="_blank"
rel="noopener noreferrer"
underline="none"
>
<Button size="large" startIcon={<DescriptionIcon />} sx={style}>
  {children}
</Button>
</Link> */
}
