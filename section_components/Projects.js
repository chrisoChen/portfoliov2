import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import InfoStack from "../components/InfoStack";

function Projects({ sectionRef }) {
  return (
    <Container variant="section" id="Projects" ref={sectionRef}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
        Projects
      </Typography>
      <InfoStack reverse={false} />
      <InfoStack reverse={true} />
    </Container>
  );
}

export default Projects;
