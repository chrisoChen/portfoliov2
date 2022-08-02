import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function Intro() {
  return (
    <Container sx={{ textAlign: "center" }}>
      <Box my={10}>
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
            <Button size="large">Resume</Button>
            <Button size="large">Say Hello</Button>
          </Stack>
      </Box>
    </Container>
  );
}

export default Intro;
