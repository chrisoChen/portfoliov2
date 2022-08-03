import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Divider } from "@mui/material";
import Image from "next/image";
import profilePic from "../public/cartoon-profile-chris.png";

function About() {
  return (
    <Container sx={{ width: { xs: "100%", md: "80%" } }}>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        justifyContent="flex-start"
        alignItems={{ xs: "center", md: "flex-start" }}
        rowGap={4}
        colGap={2}
      >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            sx={{ textAlign: { xs: "center", md: "left" } }}
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
              alt="Picture of the software developer, Chris Chen "
              priority
            />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
