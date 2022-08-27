import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import BtnResume from "../components/BtnResume";
import BtnContact from "../components/BtnContact";
import MediaLinks from "../components/MediaLinks";

function Intro() {
  return (
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
          <MediaLinks
            links={[
              {
                name: "Github",
                url: "https://jestjs.io/docs/setup-teardown",
              },
              {
                name: "LinkedIn",
                url: "https://developer.mozilla.org/en-US/",
              },
            ]}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Intro;
