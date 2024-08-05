import { createContext, createRef } from "react";
import { executeScroll, SectionComponents } from "../util/sectionScroll";
import Intro from "../section_components/Intro";

const ScrollContext = createContext();

function ScrollProvider(props) {
  const { sections = [], children } = props;

  const [sectionComponents, navbarOptions] = SectionComponents(sections);

  let introSectionRef = createRef();

  const scrollValue = {
    executeScroll: executeScroll,
    navbarOptions: navbarOptions,
    introSection: {
      sectionRef: introSectionRef,
    },
  };

  return (
    <ScrollContext.Provider value={scrollValue}>
      <Intro sectionRef={introSectionRef} />
      {sectionComponents}
    </ScrollContext.Provider>
  );
}

export { ScrollContext, ScrollProvider };
