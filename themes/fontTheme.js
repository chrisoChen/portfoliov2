import colorTheme from "./colorTheme";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

import "@fontsource/roboto/700.css";

const fontTheme = {
  typography: {
    fontFamily: "Roboto",
    h1: {
      color: colorTheme.palette.secondaryAlt.main,
      fontSize: "3.5rem",
      lineHeight: "75px",
      fontWeight: "200",
      fontStyle: "normal",
    },
    h2: {
      color: colorTheme.palette.secondary.main,
      fontSize: "2.5rem",
      lineHeight: "56.25px",
      fontWeight: "500",
      fontStyle: "normal",
    },
    h3: {
      color: colorTheme.palette.secondary.main,
      fontSize: "1.8rem",
      lineHeight: "38px",
      fontWeight: "700",
      fontStyle: "normal",
    },
    h4: {
      color: colorTheme.palette.secondary.main,
      fontSize: "1.5rem",
      lineHeight: "28px",
      fontWeight: "700",
      fontStyle: "normal",
    },
    h5: {
      color: colorTheme.palette.secondary.main,
      fontSize: "1.375rem",
      lineHeight: "26px",
      fontWeight: "500",
      fontStyle: "normal",
    },
    body1: {
      color: colorTheme.palette.secondaryAlt.main,
      fontSize: "1.5rem",
      lineHeight: "28.13px",
      fontWeight: "500",
      fontStyle: "normal",
    },
    body2: {
      color: colorTheme.palette.secondaryAlt.main,
      fontSize: "1rem",
      lineHeight: "28.13px",
      fontWeight: "500",
      fontStyle: "normal",
    },
  },
};

export default fontTheme;
