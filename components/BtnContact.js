import { Button } from "@mui/material";
import { Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { MediaLinksContext } from "../context/MediaLinksContext";
import { useContext } from "react";

function BtnContact(props) {
  const { children } = props;
  const mediaLinks = useContext(MediaLinksContext);
  const emailLink = mediaLinks.find(
    (element) => element.name.toLowerCase() === "email"
  );

  return (
    <Button
      size="large"
      startIcon={<EmailIcon />}
      rel="noopener noreferrer"
      href={emailLink.url}
      target="_blank"
    >
      {children}
    </Button>
  );
}

export default BtnContact;
