import {
  Intro,
  About,
  Experience,
  Projects,
  OldProjects,
  ClosingMessage,
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
      <ClosingMessage />
    </Box>
  );
}

export default Main;
