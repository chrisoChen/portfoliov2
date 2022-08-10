import { Intro, About, Experience, Projects } from "../section_components";
import { Box } from "@mui/system";

function Main() {
  return (
    <Box>
      <Intro />
      <About />
      <Experience />
      <Projects />
    </Box>
  );
}

export default Main;
