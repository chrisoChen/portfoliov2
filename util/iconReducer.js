import GitHubIcon from "@mui/icons-material/GitHub";

function iconReducer(links) {
  const icons = Object.keys(links).reduce((prevVal, currKey) => {
    switch (links[currKey].toLowerCase()) {
      case "github":
        return (prevVal[currKey] = <GitHubIcon />);
      default:
        return prevVal;
    }
  }, {});

  return icons;
}

export default iconReducer;
