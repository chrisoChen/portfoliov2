import { createContext } from "react";

const SectionDataContext = createContext();

function SectionDataProvider(props) {
  const { data = [], children } = props;

  return (
    <SectionDataContext.Provider value={data}>
      {children}
    </SectionDataContext.Provider>
  );
}

export { SectionDataContext, SectionDataProvider };
