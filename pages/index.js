import {
  Intro,
  About,
  Experience,
  Projects,
  OldProjects,
  ClosingMessage,
} from "../section_components";
import Navbar from "../components/Navbar";
import { Box } from "@mui/system";

function Main() {
  return (
    <Box>
      <Navbar />
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
