import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import InfoGrid from "../components/InfoGrid";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Slide from "@mui/material/Slide";
import { useContext } from "react";
import { SectionDataContext } from "../context/SectionDataContext";

function Projects({ sectionRef }) {
  const isSectionVisible = useIntersectionObserver(sectionRef);
  const { archive } = useContext(SectionDataContext);

  return (
    <Slide in={isSectionVisible} direction="right">
      <Container variant="section">
        <Typography mt={6} variant="h2" sx={{ textAlign: "center" }}>
          Projects
        </Typography>
        <InfoGrid
          projectList={archive.projectList}
          displayCap={6}
          banList={archive.banList}
        />
      </Container>
    </Slide>
  );
}

export default Projects;
