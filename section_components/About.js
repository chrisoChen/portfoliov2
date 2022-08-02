import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Image from "next/image";
import profilePic from "../public/cartoon-profile-chris.png";

function About() {
  return (
    <Container>
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        justifyContent="flex-start"
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        <Container sx={{ width: { xs: "100%", md: "40%" } }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            About Me
          </Typography>
          <Typography variant="p">
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
        </Container>
        <Container variant="textCenter" maxWidth="sm" sx={{ width: "40%" }}>
          <Image
            src={profilePic}
            alt="Picture of the software developer, Chris Chen "
            priority
          />
        </Container>
      </Stack>
    </Container>
  );
}

export default About;
