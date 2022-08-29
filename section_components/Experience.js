import { useState } from "react";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { ExperienceContext } from "../context/ExperienceContext";
import { useContext } from "react";
import InfoAccordion from "../components/InfoAccordion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Slide from "@mui/material/Slide";

function Experience({ sectionRef }) {
  const experience = useContext(ExperienceContext);
  const [expanded, setExpanded] = useState(0);

  const isSectionVisible = useIntersectionObserver(sectionRef);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const experienceAccordions = experience.map((exp, index) => {
    return (
      // Using uuidv4() as key removes accordion expanding animation
      <InfoAccordion
        expanded={expanded}
        handleChange={() => handleChange(index)}
        index={index}
        companyName={exp.companyName}
        positionName={exp.positionName}
        companyLink={exp.companyLink}
        jobTools={exp.tools}
        jobDetails={exp.jobDetails}
        startDate={exp.startDate}
        endDate={exp.endDate}
        key={`${exp.companyName}-accordion-num${index}`}
      />
    );
  });

  const backgroundStyle = {
    backgroundColor: "dark.main",
    mx: "auto",
    py: 6,
  };

  return (
    <Slide
      in={isSectionVisible}
      direction="right"
    >
      <Container variant="section">
        <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
          Experience
        </Typography>
        <Card sx={backgroundStyle}>{experienceAccordions}</Card>
      </Container>
    </Slide>
  );
}

export default Experience;
