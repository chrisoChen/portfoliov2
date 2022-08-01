import colorTheme from "./colorTheme";

const fontTheme = {
  typography: {
    fontFamily: ["Roboto"],
    h1: {
      color: colorTheme.palette.secondaryAlt.main,
      fontSize: "3.5rem",
      lineHeight: "75px",
      fontWeight: "200",
      fontStyle: "normal",
    },
    h2: {
      color: colorTheme.palette.secondary.main,
      fontSize: "3rem",
      lineHeight: "56.25px",
      fontWeight: "400",
      fontStyle: "normal",
    },
  },
};

export default fontTheme;
