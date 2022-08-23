import { createContext } from "react";

const ExperienceContext = createContext();

function ExperienceProvider(props) {
  const { experience = [], children } = props;

  return (
    <ExperienceContext.Provider value={experience}>
      {children}
    </ExperienceContext.Provider>
  );
}

export { ExperienceContext, ExperienceProvider };
