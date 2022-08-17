import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

import InfoChips from "../components/InfoChips";
import InfoGridItem from "./InfoGridItem";

function InfoGrid(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <Paper
        elevation={2}
        color="secondary"
        sx={{
          display: "flex",
          position: "absolute",
          height: { xs: "95%", md: "2.5rem" },
          width: { xs: "3rem", md: "95%" },
          backgroundColor: "neutral.main",
          flexWrap: "wrap",
          zIndex: "-5",
        }}
      ></Paper>
      <Container disableGutters>
        <Grid
          container
          my={4}
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="flex-start"
          rowGap={2}
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
        </Grid>
      </Container>
    </Box>
  );
}

export default InfoGrid;
