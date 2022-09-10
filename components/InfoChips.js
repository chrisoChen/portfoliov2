import { Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import { v4 as uuidv4 } from "uuid";

function InfoChips(props) {
  const {
    infoList = [],
    mt = 2,
    size = "small",
    sx = { fontSize: "0.9rem" },
  } = props;

  const techTools = infoList.map((infoItem) => {
    return <Chip label={infoItem} key={uuidv4()} size={size} sx={sx} />;
  });
  return (
    <Stack direction="row" mt={mt} flexWrap="wrap" gap={0.5}>
      {techTools}
    </Stack>
  );
}

export default InfoChips;
