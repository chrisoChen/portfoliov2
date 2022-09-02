import { Divider } from "@mui/material";
import HexagonIcon from "./HexagonIcon";
import { useTheme } from "@mui/material";

function HexagonDivider(props) {
  const { reverse = false } = props;
  const theme = useTheme();

  return (
    <Divider
      sx={{ mt: 4 }}
      textAlign={reverse ? "right" : "left"}
      className="textDivider"
    >
      <HexagonIcon fill={theme.palette.secondary.main} />
    </Divider>
  );
}

export default HexagonDivider;
