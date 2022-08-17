import {
  Intro,
  About,
  Experience,
  Projects,
  Archive,
  Contact,
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
      <Archive />
      <Contact />
    </Box>
  );
}

export default Main;
