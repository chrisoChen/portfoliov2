import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import InfoStack from "../components/InfoStack";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Slide from "@mui/material/Slide";
import { SectionDataContext } from "../context/SectionDataContext";
import { useContext, useState, setProjImages } from "react";
import { v4 as uuidv4 } from "uuid";

function Projects({ sectionRef }, props) {
  const isSectionVisible = useIntersectionObserver(sectionRef);
  const { projects = [] } = useContext(SectionDataContext);
  const images = require.context("../imgs/proj-imgs", true);
  const reverseFactor = 2;

  const projectsStack = projects.map((project, index) => {
    return (
      <InfoStack
        projectName={project.projectName}
        projectTools={project.projectTools}
        projectImageUrl={images(project.projectImageUrl)}
        projectDescription={project.projectDescription}
        projectLinks={project.projectLinks}
        reverse={index % reverseFactor ? true : false}
        key={uuidv4()}
      />
    );
  });

  return (
    <Slide in={isSectionVisible} direction="right">
      <Container variant="section">
        <Typography my={4} variant="h2" sx={{ textAlign: "center" }}>
          Projects
        </Typography>
        {projectsStack}
      </Container>
    </Slide>
  );
}

export default Projects;
