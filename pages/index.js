import {
  Intro,
  About,
  Experience,
  Projects,
  OldProjects,
} from "../section_components";
import { Box } from "@mui/system";

function Main() {
  return (
    <Box>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <OldProjects />
    </Box>
  );
}

export default Main;
