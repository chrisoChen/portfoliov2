import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import InfoGridItem from "./InfoGridItem";
import { v4 as uuidv4 } from "uuid";

function InfoGridRow(props) {
  const { projectList = [] } = props;
  const myRepo = process.env.NEXT_PUBLIC_GITHUB_USERNAME.toLowerCase();

  const gridItems = projectList.map((project) => {
    const githubOwner = project.owner.login.toLowerCase();

    return (
      <InfoGridItem
        key={uuidv4()}
        projectName={project.name}
        projectTools={
          githubOwner === myRepo ? project.topics : [project.language]
        }
        projectSummary={
          githubOwner === myRepo
            ? project.description
            : `The repo for my project or the project that I worked on, ${project.name}.`
        }
        projectLinks={[
          {
            name: "Github",
            url: project.html_url,
          },
        ]}
      />
    );
  });

  return (
    <>
      <Paper
        id="info-grid-sticky-tab"
        elevation={2}
        color="secondary"
        sx={{
          display: "flex",
          position: "absolute",
          // Prevents sticky tabs overflowing from container on mobile
          left: { xs: 0, md: "auto" },
          top: { xs: 0, md: "auto" },
          height: { xs: "95%", md: "2.5rem" },
          width: { xs: "3rem", md: "95%" },
          backgroundColor: "neutral.main",
          flexWrap: "wrap",
          zIndex: "-5",
        }}
      ></Paper>
      <Grid
        container
        my={4}
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="flex-start"
        rowGap={2}
      >
        {gridItems}
      </Grid>
    </>
  );
}

export default InfoGridRow;
