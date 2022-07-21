import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

const colorTheme = {
  palette: {
    primary: {
      main: "#55828B",
      dark: "#3B6064",
      neutral: "#87BBA2",
    },
    secondary: {
      main: "#C9E4CA",
      mainAlt: "#E7DECD",
    },
  },
};

const fontTheme = {
  typography: {
    fontFamily: ["Roboto", "sans-serif"],
  },
};

const theme = createTheme(deepmerge(colorTheme, fontTheme));


export default theme;
