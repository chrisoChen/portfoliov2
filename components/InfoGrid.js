import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

import InfoChips from "../components/InfoChips";

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
          <Grid item xs={11} md={3.6} mt={1}>
            <Card
              sx={{
                minHeight: { xs: "18rem", md: "22rem" },
                backgroundColor: "dark.main",
              }}
            >
              <CardContent>
                <Typography variant="h3">Project 1 Heading</Typography>
                <InfoChips infoList={["React", "Selenium"]} />
                <Typography variant="body1" mt={1}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
                  fugit!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={11} md={3.6} mt={1}>
            <Card
              sx={{
                minHeight: { xs: "18rem", md: "22rem" },
                backgroundColor: "dark.main",
              }}
            >
              <CardContent>
                <Typography variant="h3">Project 1 Heading</Typography>
                <InfoChips infoList={["React", "Selenium"]} />
                <Typography variant="body1" mt={1}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
                  fugit!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={11} md={3.6} mt={1}>
            <Card
              sx={{
                minHeight: { xs: "18rem", md: "22rem" },
                backgroundColor: "dark.main",
              }}
            >
              <CardContent>
                <Typography variant="h3">Project 1 Heading</Typography>
                <InfoChips infoList={["React", "Selenium"]} />
                <Typography variant="body1" mt={1}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
                  fugit!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
}

export default InfoGrid;
