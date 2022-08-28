import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import BtnResume from "../components/BtnResume";
import BtnContact from "../components/BtnContact";
import MediaLinks from "../components/MediaLinks";
import Navbar from "../components/Navbar";
import { Grid } from "@mui/material";
function Intro() {
  return (
    <Grid container direction="column" sx={{ minHeight: "100vh" }}>
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item my="auto">
        <Container sx={{ textAlign: "center" }} variant="section">
          <Box>
            <Box my={5}>
              <Typography variant="h1">Chris Chen</Typography>
              <Typography variant="h2">Software Developer</Typography>
            </Box>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <BtnResume>Resume</BtnResume>
              <BtnContact>Say Hello</BtnContact>
            </Stack>
            <Box my={4}>
              <MediaLinks />
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Intro;
