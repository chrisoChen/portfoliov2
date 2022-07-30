import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import colorTheme from "./colorTheme";
import componentTheme from "./componentTheme";
import fontTheme from "./fontTheme";

const themes = [colorTheme, componentTheme, fontTheme];

const packedThemes = themes.reduce(
  (prevTheme, currTheme) => deepmerge(prevTheme, currTheme),
  {}
);

const theme = createTheme(packedThemes);
export default theme;
