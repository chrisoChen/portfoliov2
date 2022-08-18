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
import { useRef } from "react";

function Main() {
  const scrollRef = useRef();
  
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
