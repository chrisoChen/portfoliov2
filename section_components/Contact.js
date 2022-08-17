import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import BtnContact from "../components/BtnContact";

function ClosingMessage() {
  return (
    <Container variant="section" maxWidth="md" sx={{ textAlign: "center" }} id="Contact">
      <Typography variant="h2">Next Steps</Typography>
      <Typography variant="body1" mt={1} mb={3}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        officiis officia earum neque quaerat ab, eveniet minus ex. Quia, sit.
      </Typography>
      <BtnContact>Say Hello</BtnContact>
    </Container>
  );
}

export default ClosingMessage;
