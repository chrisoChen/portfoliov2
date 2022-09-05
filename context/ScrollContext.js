import { createContext } from "react";
import { executeScroll, SectionComponents } from "../util/sectionScroll";

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
      {sectionComponents}
    </ScrollContext.Provider>
  );
}

export { ScrollContext, ScrollProvider };
