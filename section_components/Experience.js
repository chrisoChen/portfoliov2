import { useState } from "react";

import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import Chip from "@mui/material/Chip";
import Accordion from "@mui/material/Accordion";
import Stack from "@mui/material/Stack";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

import InfoAccordion from "../components/InfoAccordion";
// TODO: play around with theme settings for MuiAccordion-root, Mui-expanded, etc
function Experience() {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container variant="section">
      <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
        Experience
      </Typography>
      <Card
        sx={{
          backgroundColor: "dark.main",
          mx: "auto",
          py: 6,
        }}
      >
        <InfoAccordion
          expanded={expanded}
          handleChange={() => handleChange(0)}
          index={0}
          companyName="Irdeto"
          positionName="Jr. Software Developer"
          companyLink="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
          jobTools={["React", "JavaScript", "Python"]}
          jobDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
          startDate="September 2020"
          endDate="September 2021"
        />
        <InfoAccordion
          expanded={expanded}
          handleChange={() => handleChange(1)}
          index={1}
          companyName="test"
          positionName="Test Position"
          companyLink="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
          jobTools={["cake", "honey", "dancing"]}
          jobDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
          eget."
          startDate="Test 2020"
          endDate="Test 2021"
        />
      </Card>
    </Container>
  );
}

export default Experience;
