import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { SectionDataContext } from "../context/SectionDataContext";
import { useContext } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

function BtnContact(props) {
  const { children } = props;
  const { mediaLinks = [] } = useContext(SectionDataContext);
  const emailLink = mediaLinks.find(
    (element) => element.name.toLowerCase() === "email"
  );
  const breakpointMatch = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Button
      size={breakpointMatch ? "large" : "small"}
      startIcon={<EmailIcon />}
      rel="noopener noreferrer"
      href={emailLink.url}
      target="_blank"
      title="Contact Me"
    >
      {children}
    </Button>
  );
}

export default BtnContact;
