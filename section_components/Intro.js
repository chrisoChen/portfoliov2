import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import BtnContact from "../components/BtnContact";
import MediaLinks from "../components/MediaLinks";
import Navbar from "../components/Navbar";
import { Grid } from "@mui/material";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Slide from "@mui/material/Slide";
import { SectionDataContext } from "../context/SectionDataContext";
import { useContext } from "react";

function Intro({ sectionRef }) {
  const { toolbarHeight } = useContext(SectionDataContext);

  return (
    <Slide in={true} direction="down">
      <Grid
        container
        direction="column"
        sx={{ minHeight: "100vh", paddingTop: toolbarHeight }}
        ref={sectionRef}
      >
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item my="auto">
          <Container sx={{ textAlign: "center" }} variant="section">
            <Box>
              <Box my={{ xs: 2, md: 5 }}>
                <Typography variant="h1">Chris Chen</Typography>
                <Typography variant="h2">Software Developer</Typography>
              </Box>
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <BtnContact>Say Hello</BtnContact>
              </Stack>
              <Box my={4}>
                <MediaLinks />
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Slide>
  );
}

export default Intro;
