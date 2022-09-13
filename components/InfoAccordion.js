import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import Stack from "@mui/material/Stack";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "@mui/material/Link";

import InfoChips from "./InfoChips";
import { List, ListItem } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

function InfoAccordion(props) {
  const {
    index,
    companyName = "",
    positionName = "",
    companyLink = "",
    jobTools = [],
    jobDetails = [],
    startDate = "",
    endDate = "",
    expanded,
    handleChange = () => null,
  } = props;

  const jobDetailsList = jobDetails.map((jobDetail) => {
    return (
      <ListItem key={uuidv4()}>
        <Typography variant="body2" sx={{ display: "list-item" }}>
          {jobDetail}
        </Typography>
      </ListItem>
    );
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
        <Typography variant="h3" my={2.5}>
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
              <OpenInNewIcon
                fontSize="medium"
                sx={{ color: "secondary.main", ml: 0.5 }}
              />
            </Link>
          </Typography>
        </Stack>
        <Typography variant="h4">
          {startDate} - {endDate}
        </Typography>

        <InfoChips infoList={jobTools} />

        <List
          sx={{ listStylePosition: "inside", listStyleType: "square", py: 4 }}
        >
          {jobDetailsList}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}

export default InfoAccordion;
