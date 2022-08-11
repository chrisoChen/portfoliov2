import { Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Stack } from "@mui/material";
import InfoChips from "./InfoChips";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

function InfoGridItem(props) {
  const {
    projectName = "",
    projectTools = [],
    projectSummary = "",
    projectLinks = {},
  } = props;

  const githubLink = projectLinks.github ? (
    <Stack direction="row" spacing={0.5} alignItems="center" mt={1}>
      <Link
        href={projectLinks.github}
        aria-label="Link to company's website."
        target="_blank"
        rel="noopener noreferrer"
        color="secondary.main"
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": { opacity: "0.65", transition: "0.3s" },
        }}
      >
        <GitHubIcon sx={{ color: "secondary.main" }} />
      </Link>
      <Link
        href={projectLinks.github}
        aria-label="Link to company's website."
        target="_blank"
        rel="noopener noreferrer"
        color="secondary.main"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <GitHubIcon sx={{ color: "secondary.main" }} />
      </Link>
    </Stack>
  ) : null;

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
          <Typography variant="body1" mt={1}>
            {projectSummary}
          </Typography>
          {githubLink}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default InfoGridItem;
