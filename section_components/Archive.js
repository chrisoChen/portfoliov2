import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Card, CardActions, CardContent, CardHeader } from "@mui/material";
import { Grid } from "@mui/material";
import InfoGrid from "../components/InfoGrid";

import InfoChips from "../components/InfoChips";

function Archive() {
  return (
    <Container variant="section" sx={{ position: "relative" }}>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Archive Projects
      </Typography>
      <InfoGrid />
    </Container>
  );
}

export default Archive;
