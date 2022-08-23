import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import BtnContact from "../components/BtnContact";
import MediaLinks from "../components/MediaLinks";

function ClosingMessage({ sectionRef }) {
  return (
    <Container
      variant="section"
      maxWidth="md"
      sx={{ textAlign: "center" }}
      ref={sectionRef}
    >
      <Typography variant="h2">Next Steps</Typography>
      <Typography variant="body1" mt={1} mb={3}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        officiis officia earum neque quaerat ab, eveniet minus ex. Quia, sit.
      </Typography>
      <BtnContact>Say Hello</BtnContact>
      <Box sx={{ my: 4 }}>
        <MediaLinks />
      </Box>
    </Container>
  );
}

export default ClosingMessage;
