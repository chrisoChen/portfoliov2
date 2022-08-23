import { createContext } from "react";

const MediaLinksContext = createContext();

function MediaLinksProvider(props) {
  const { mediaLinks = [], children } = props;

  return (
    <MediaLinksContext.Provider value={mediaLinks}>
      {children}
    </MediaLinksContext.Provider>
  );
}

export { MediaLinksContext, MediaLinksProvider };
