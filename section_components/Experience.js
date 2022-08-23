import { useState } from "react";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { ExperienceContext } from "../context/ExperienceContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import InfoAccordion from "../components/InfoAccordion";

function Experience(props) {
  const experience = useContext(ExperienceContext);
  const { sectionRef } = props;
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const experienceAccordions = experience.map((exp, index) => {
    return (
      // Using uuidv4() as map key removes animation for accordion
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
    <Container variant="section" ref={sectionRef}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
        Experience
      </Typography>
      <Card sx={backgroundStyle}>{experienceAccordions}</Card>
    </Container>
  );
}

export default Experience;
