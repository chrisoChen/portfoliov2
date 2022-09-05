import { Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import { v4 as uuidv4 } from "uuid";

function InfoChips(props) {
  const { infoList = [], mt = 2 } = props;

  const techTools = infoList.map((infoItem) => {
    return <Chip label={infoItem} key={uuidv4()} />;
  });
  return (
    <Stack direction="row" mt={mt} flexWrap="wrap" gap={0.5}>
      {techTools}
    </Stack>
  );
}

export default InfoChips;
