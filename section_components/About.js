import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Image from "next/image";
import profilePic from "../public/cartoon-profile-chris.png";

function About({ sectionRef }) {
  return (
    <Container variant="section">
      <Grid container direction={{ xs: "column", md: "row" }} rowGap={4}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            sx={{ textAlign: "left", alignSelf: "flex-start" }}
          >
            About Me
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            omnis facere sunt quo? Tenetur inventore facilis corrupti excepturi
            ratione eius ut distinctio? Rerum expedita voluptas earum unde ullam
            distinctio at aliquam veniam reiciendis quibusdam. Magnam
            repudiandae nemo alias aliquam, qui tempore excepturi accusantium,
            nobis ullam, non officiis consequuntur consectetur consequatur rerum
            enim provident facilis quam nam quae ex incidunt praesentium? Alias
            adipisci veniam recusandae eligendi ipsum mollitia quae aliquid
            autem, ut rerum optio repellat sequi maiores doloremque repudiandae
            quia non provident fugit, debitis pariatur placeat. Et atque,
            voluptate impedit saepe aperiam quo autem deserunt possimus cumque
            reiciendis magnam ipsum nemo.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Container
            sx={{ width: { xs: "100%", md: "80%" }, maxWidth: "350px" }}
            maxWidth="300px"
          >
            <Image
              src={profilePic}
              alt="A cartoon portrait of the software developer, Chris Chen. Chris poses directly at the camera and his glasses have been colored yellow and turquoise for a heightened cartoon look."
            />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
