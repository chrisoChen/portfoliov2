import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import iconMap from "../util/iconMap";

function MediaLinks({
  links,
  clickElement = <Button variant="circle" sx={{ color: "dark.main" }} />,
}) {
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
