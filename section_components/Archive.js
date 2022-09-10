import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import InfoGrid from "../components/InfoGrid";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Slide from "@mui/material/Slide";

function Archive({ sectionRef }) {
  const isSectionVisible = useIntersectionObserver(sectionRef);

  return (
    <Slide in={isSectionVisible} direction="right">
      <Container variant="section">
        <Typography mt={6} variant="h2" sx={{ textAlign: "center"}}>
          Archive Projects
        </Typography>
        <InfoGrid />
      </Container>
    </Slide>
  );
}

export default Archive;
