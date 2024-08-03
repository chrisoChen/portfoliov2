import { lazy, Suspense, createRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";

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
    let sectionRef = createRef();

    navbarOptions.push({ name: componentName, sectionRef: sectionRef });

    return (
      <Box
        id={`${componentName.toLowerCase()}-section`}
        component="section"
        ref={sectionRef}
        key={uuidv4()}
        sx={{
          minHeight: { xs: "auto", md: "50vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          scrollMargin: "200px",
        }}
      >
        <Suspense fallback={<CircularProgress color="secondaryAlt" />}>
          <SectionComponent key={uuidv4()} sectionRef={sectionRef} />
        </Suspense>
      </Box>
    );
  });

  return [sectionComponents, navbarOptions];
}

export { executeScroll, SectionComponents };
