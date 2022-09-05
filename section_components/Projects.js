import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import InfoStack from "../components/InfoStack";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Slide from "@mui/material/Slide";
import { SectionDataContext } from "../context/SectionDataContext";
import { useContext } from "react";

function Projects({ sectionRef }, props) {
  const isSectionVisible = useIntersectionObserver(sectionRef);
  const { projects = [] } = useContext(SectionDataContext);

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
