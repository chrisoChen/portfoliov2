import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import InfoGridItem from "./InfoGridItem";
import InfoGridRow from "./InfoGridRow";

function InfoGrid(props) {
  const { projectData = [], banList = [] } = props;
  const { displayCap = projectData.length } = props;

  return (
    <Box sx={{ position: "relative" }}>
      <Container disableGutters>
        <InfoGridRow></InfoGridRow>
        <InfoGridRow></InfoGridRow>
      </Container>
    </Box>
  );
}

export default InfoGrid;
