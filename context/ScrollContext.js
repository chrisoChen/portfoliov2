import { createContext, Suspense } from "react";
import { executeScroll, SectionComponents } from "../util/sectionScroll";
import CircularProgress from "@mui/material/CircularProgress";

const ScrollContext = createContext();

function ScrollProvider(props) {
  const { sections = [], children } = props;

  const [sectionComponents, navbarOptions] = SectionComponents(sections);
  const scrollValue = {
    executeScroll: executeScroll,
    navbarOptions: navbarOptions,
    introSection: navbarOptions.shift(),
  };

  return (
    <ScrollContext.Provider value={scrollValue}>
      {children}
      <Suspense fallback={<CircularProgress color="secondaryAlt" />}>
        {sectionComponents}
      </Suspense>
    </ScrollContext.Provider>
  );
}

export { ScrollContext, ScrollProvider };
