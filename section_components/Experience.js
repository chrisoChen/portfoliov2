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

function Experience() {
  const [expanded, setExpanded] = useState("panel1");

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
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={
              <ExpandCircleDownIcon sx={{ color: "secondary.main" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h4">Irdeto</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h3" mt={1}>
              Jr. Software Developer
            </Typography>
            <Typography variant="h4">Irdeto</Typography>
            <Typography variant="h5">
              September 2020 - September 2021
            </Typography>
            <Stack direction="row" mt={1} flexWrap="wrap" gap={1}>
              <Chip label="React" color="dark" size="small"></Chip>
              <Chip label="Selenium" color="dark" size="small"></Chip>
              <Chip label="React" color="dark" size="small"></Chip>
              <Chip label="Selenium" color="dark" size="small"></Chip>
              <Chip label="React" color="dark" size="small"></Chip>
              <Chip label="Selenium" color="dark" size="small"></Chip>
              <Chip label="React" color="dark" size="small"></Chip>
              <Chip label="Selenium" color="dark" size="small"></Chip>
            </Stack>
            <Typography variant="body1" mt={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              modi tempora est quibusdam quaerat, ut molestias necessitatibus!
              Consequuntur perferendis tempora impedit beatae quia soluta
              voluptate aliquam iste pariatur maxime non facilis odio sed, optio
              quaerat magni adipisci quod sapiente veritatis distinctio. Nisi
              dignissimos minima beatae exercitationem nulla, vitae aliquam
              impedit?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={
              <ExpandCircleDownIcon sx={{ color: "secondary.main" }} />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>moovez</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Card>
    </Container>
  );
}

export default Experience;
