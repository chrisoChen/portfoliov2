import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import iconMap from "../util/iconMap";
import { useContext } from "react";
import { MediaLinksContext } from "../context/MediaLinksContext";

function MediaLinks({
  clickElement = <Button variant="circle" sx={{ color: "dark.main" }} />,
}) {
  const links = useContext(MediaLinksContext);
  const iconLinks = iconMap(links, clickElement);
  const iconLinkBtns = iconLinks.map((link) => {
    return link.icon;
  });
  

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      gap={2}
      flexWrap="wrap"
      direction="row"
    >
      {iconLinkBtns}
    </Stack>
  );
}

export default MediaLinks;
