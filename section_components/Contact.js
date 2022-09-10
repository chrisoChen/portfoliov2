import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import BtnContact from "../components/BtnContact";
import MediaLinks from "../components/MediaLinks";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Fade from "@mui/material/Fade";

function ClosingMessage({ sectionRef }) {
  const isSectionVisible = useIntersectionObserver(sectionRef);

  return (
    <Fade in={isSectionVisible}>
      <Container variant="section" maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h2" my={2}>
          Next Steps
        </Typography>
        <Typography variant="body1" mt={1} mb={3}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          officiis officia earum neque quaerat ab, eveniet minus ex. Quia, sit.
        </Typography>
        <BtnContact>Say Hello</BtnContact>
        <Box sx={{ my: 4 }}>
          <MediaLinks />
        </Box>
      </Container>
    </Fade>
  );
}

export default ClosingMessage;
