import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import InfoStack from "../components/InfoStack";

function Projects() {
  return (
    <Container variant="section">
      <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
        Projects
      </Typography>
      <InfoStack reverse={false} />
      <InfoStack reverse={true} />
    </Container>
  );
}

export default Projects;
