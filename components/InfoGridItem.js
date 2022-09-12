import { Card, CardContent, CardHeader } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import InfoChips from "./InfoChips";
import iconMap from "../util/iconMap";
import { Box } from "@mui/material";
import { textTransform } from "@mui/system";

function InfoGridItem(props) {
  const {
    projectName = "",
    projectTools = [],
    projectSummary = "",
    projectLinks = null,
  } = props;

  const sourceLinks = projectLinks
    ? iconMap(projectLinks, <Box />, projectName).map((link) => {
        return link.icon;
      })
    : null;

  return (
    <Grid item xs={11} md={3.75} mt={{ xs: 1, md: 2 }}>
      <Card
        sx={{
          minHeight: { xs: "5em", md: "10em" },
          backgroundColor: "dark.main",
        }}
      >
        <CardHeader
          title={projectName}
          titleTypographyProps={{
            variant: "h4",
            sx: { textTransform: "capitalize" },
          }}
          subheader={<InfoChips infoList={projectTools} />}
          sx={{ overflowX: "auto", mt: 1 }}
        ></CardHeader>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
            justifyContent: "space-between",
            minHeight: "inherit",
          }}
        >
          <Typography variant="body2">{projectSummary}</Typography>
          <Box mt={2}>{sourceLinks}</Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default InfoGridItem;
