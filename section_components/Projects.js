import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import InfoStack from "../components/InfoStack";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Slide from "@mui/material/Slide";

function Projects({ sectionRef }) {
  const isSectionVisible = useIntersectionObserver(sectionRef);

  return (
    <Slide in={isSectionVisible} direction="right">
      <Container variant="section">
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Projects
        </Typography>
        <InfoStack reverse={false} />
        <InfoStack reverse={true} />
      </Container>
    </Slide>
  );
}

export default Projects;
