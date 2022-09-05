import colorTheme from "./colorTheme";
import { createTheme } from "@mui/material";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const defaultTheme = createTheme();

const fontTheme = {
  typography: {
    fontFamily: "Roboto",
    h1: {
      color: colorTheme.palette.secondaryAlt.main,
      fontSize: "3rem",
      lineHeight: "3.5rem",
      fontWeight: "200",
      fontStyle: "normal",
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "3.5rem",
      },
    },
    h2: {
      color: colorTheme.palette.secondary.main,
      fontSize: "1.75rem",
      lineHeight: "2.375rem",
      fontWeight: "500",
      fontStyle: "normal",
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "2.5rem",
      },
    },
    h3: {
      color: colorTheme.palette.secondary.main,
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontWeight: "700",
      fontStyle: "normal",
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "2rem",
      },
    },
    h4: {
      color: colorTheme.palette.secondary.main,
      fontSize: "1.2rem",
      lineHeight: "1.5rem",
      fontWeight: "700",
      fontStyle: "normal",
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.5rem",
      },
    },
    body1: {
      color: colorTheme.palette.secondaryAlt.main,
      fontSize: "1.25rem",
      lineHeight: "1.25em",
      fontWeight: "500",
      fontStyle: "normal",
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.5rem",
      },
    },
    body2: {
      color: colorTheme.palette.secondaryAlt.main,
      fontSize: "0.75rem",
      lineHeight: "28.13px",
      fontWeight: "500",
      fontStyle: "normal",
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1rem",
      },
    },
  },
};

export default fontTheme;
