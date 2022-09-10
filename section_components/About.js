import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Image from "next/image";
import profilePic from "../public/cartoon-profile-chris.png";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Slide from "@mui/material/Slide";
import { useContext } from "react";
import { SectionDataContext } from "../context/SectionDataContext";
import InfoChips from "../components/InfoChips";

function About({ sectionRef }) {
  const isSectionVisible = useIntersectionObserver(sectionRef);
  const { about } = useContext(SectionDataContext);

  return (
    <Slide direction="right" in={isSectionVisible}>
      <Container variant="section">
        <Grid container direction={{ xs: "column", md: "row" }} rowGap={2}>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: "left", alignSelf: "flex-start" }}
            >
              About Me
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography mb={2} variant="body1">
              {about.intro}
            </Typography>
            <Typography mb={2} variant="body1">
              {about.introSecondary}
            </Typography>
            <Typography mb={2} variant="body1">
              {about.currentTools.description}
            </Typography>

            <InfoChips
              infoList={about.currentTools.toolList}
              size="medium"
              sx={{ fontSize: "inherit" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Container
              sx={{ width: { xs: "100%", md: "80%" }, maxWidth: "350px" }}
              maxWidth="300px"
            >
              <Image
                src={profilePic}
                priority
                alt="A cartoon portrait of the software developer, Chris Chen. Chris poses directly at the camera and his glasses have been colored yellow and turquoise for a heightened cartoon look."
              />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Slide>
  );
}

export default About;
