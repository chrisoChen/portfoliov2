import { useRef, lazy } from "react";
import { v4 as uuidv4 } from "uuid";

function executeScroll(e, sectionRef) {
  // Fixes issue where clicking on navitems jumps back to navbar
  e.preventDefault();
  sectionRef.current.scrollIntoView({ behavior: "smooth" });
}

function SectionComponents(sections) {
  const navbarOptions = [];

  const sectionComponents = sections.map((componentName) => {
    const SectionComponent = lazy(() =>
      import("../section_components/" + componentName)
    );

    const sectionRef = useRef();
    navbarOptions.push({ name: componentName, sectionRef: sectionRef });

    return <SectionComponent sectionRef={sectionRef} key={uuidv4()} />;
  });

  return [sectionComponents, navbarOptions];
}

export { executeScroll, SectionComponents };
