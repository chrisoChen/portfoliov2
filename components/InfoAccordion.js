import { Typography } from "@mui/material";

import Chip from "@mui/material/Chip";
import Accordion from "@mui/material/Accordion";
import Stack from "@mui/material/Stack";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "@mui/material/Link";

function InfoAccordion(props) {
  const {
    index,
    companyName = "",
    positionName = "",
    companyLink = "",
    jobTools = [],
    jobDetails = "",
    startDate = "",
    endDate = "",
    expanded,
    handleChange = () => null,
  } = props;
  const techTools = jobTools.map((tool) => {
    return <Chip label={tool}></Chip>;
  });

  return (
    <Accordion expanded={expanded === index} onChange={handleChange(index)}>
      <AccordionSummary
        expandIcon={<ExpandCircleDownIcon sx={{ color: "secondary.main" }} />}
        aria-controls={`panel${index}a-content`}
        id={`panel${index}a-header`}
      >
        <Typography variant="h4">{companyName}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="h3" mt={1}>
          {positionName}
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h4">
            <Link
              href={companyLink}
              aria-label="Link to company's website."
              target="_blank"
              rel="noopener noreferrer"
              color="secondary.main"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {companyName}
              <OpenInNewIcon sx={{ color: "secondary.main", ml: 0.5 }} />
            </Link>
          </Typography>
        </Stack>
        <Typography variant="h5">
          {startDate} - {endDate}
        </Typography>

        <Stack direction="row" mt={1} flexWrap="wrap" gap={1}>
          {techTools}
        </Stack>
        <Typography variant="body1" mt={2}>
          {jobDetails}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default InfoAccordion;
