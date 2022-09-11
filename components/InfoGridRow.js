import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import InfoGridItem from "./InfoGridItem";

function InfoGridRow(props) {
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
        rowGap={4}
      >
        <InfoGridItem
          projectName="Project Name Heading"
          projectTools={["React", "Selenium"]}
          projectSummary="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur voluptatum vero fugiat illo, distinctio quis libero
          beatae ducimus iure rem!"
          projectLinks={[
            {
              name: "Github",
              url: "https://getpocket.com/explore/item/why-birds-survived-and-dinosaurs-went-extinct-after-an-asteroid-hit-earth?utm_source=pocket-newtab",
            },
          ]}
        />
        <InfoGridItem
          projectName="Project Name Heading"
          projectTools={["React", "Selenium"]}
          projectSummary="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur voluptatum vero fugiat illo, distinctio quis libero
          beatae ducimus iure rem!"
          projectLinks={[
            {
              name: "Github",
              url: "https://getpocket.com/explore/item/why-birds-survived-and-dinosaurs-went-extinct-after-an-asteroid-hit-earth?utm_source=pocket-newtab",
            },
          ]}
        />
        <InfoGridItem
          projectName="Project Name Heading"
          projectTools={["React", "Selenium"]}
          projectSummary="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur voluptatum vero fugiat illo, distinctio quis libero
          beatae ducimus iure rem!"
          projectLinks={[
            {
              name: "Github",
              url: "https://getpocket.com/explore/item/why-birds-survived-and-dinosaurs-went-extinct-after-an-asteroid-hit-earth?utm_source=pocket-newtab",
            },
          ]}
        />
      </Grid>
    </>
  );
}

export default InfoGridRow;
