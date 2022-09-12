import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import InfoGridItem from "./InfoGridItem";
import InfoGridRow from "./InfoGridRow";
import { filterProjects } from "../util/projectFunctions";
import { v4 as uuidv4 } from "uuid";

function InfoGrid(props) {
  const { projectList = [], banList = [] } = props;
  const { displayCap = projectList.length } = props;
  const ROW_CAP = 3;

  const archiveProjects = filterProjects(projectList, banList);

  // Strip the projects into separate rows
  const archiveRows = [];
  const rowLoops = Math.floor(displayCap / ROW_CAP);
  const rowRemainder = displayCap % ROW_CAP;

  for (let i = 0; i < rowLoops; i++) {
    spliceProjects(archiveProjects, ROW_CAP, archiveRows);
  }

  // Splice the remaining projects that weren't divsible by the row cap
  if (rowRemainder > 0)
    spliceProjects(archiveProjects, displayCap % ROW_CAP, archiveRows);

  return (
    // Relative position of Box for sticky tab headers
    <Box sx={{ position: "relative" }}>
      <Container disableGutters>
        {archiveRows}
      </Container>
    </Box>
  );
}

function spliceProjects(archiveProjects, splice_amount, archiveRows) {
  let projectSplice, gridRow;

  projectSplice = archiveProjects.splice(0, splice_amount);
  gridRow = <InfoGridRow projectList={projectSplice} key={uuidv4()} />;
  archiveRows.push(gridRow);
  return;
}

export default InfoGrid;
