import { Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Stack } from "@mui/material";
import InfoChips from "./InfoChips";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import iconMap from "../util/iconMap";

function InfoGridItem(props) {
  const {
    projectName = "",
    projectTools = [],
    projectSummary = "",
    projectLinks = null,
  } = props;

  const sourceLinks = projectLinks
    ? iconMap(projectLinks).map((link) => {
        return link.icon;
      })
    : null;

  return (
    <Grid item xs={11} md={3.6} mt={1}>
      <Card
        sx={{
          minHeight: { xs: "18rem", md: "22rem" },
          backgroundColor: "dark.main",
        }}
      >
        <CardContent>
          <Typography variant="h3">{projectName}</Typography>
          <InfoChips infoList={projectTools} />
          <Typography variant="body1" my={1}>
            {projectSummary}
          </Typography>
          {sourceLinks}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default InfoGridItem;
