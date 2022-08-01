import colorTheme from "./colorTheme";
import fontTheme from "./fontTheme";
import { createTheme } from "@mui/material";

const tempTheme = createTheme();

const componentTheme = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          borderColor: "secondary",
          border: `2px solid ${colorTheme.palette.secondary.main}`,
          color: colorTheme.palette.secondary.main,
          backgroundColor: colorTheme.palette.dark.main,
          borderRadius: "5px",
          textTransform: "capitalize",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: fontTheme.typography.fontFamily,
        },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        sx: {},
      },
      variants: [
        {
          props: { variant: "logo" },
          style: {
            [tempTheme.breakpoints.up("md")]: {
              fontSize: "5rem",
            },
            fontSize: "3rem",
          },
        },
      ],
    },
    MuiIconButton: {
      variants: [
        {
          props: { variant: "logo" },
          style: {
            [tempTheme.breakpoints.up("md")]: {
              margin: "0",
            },
          },
        },
      ],
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            [tempTheme.breakpoints.up("sm")]: { width: "40vw" },
            width: "80vw",
            backgroundColor: colorTheme.palette.primary.main,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        textAlignLeft: {
          "&::before": {
            width: "0%",
          },
          "&::after": {
            width: "100%",
          },
        },
        textAlignRight: {
          "&::before": {
            width: "100%",
          },
          "&::after": {
            width: "0%",
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
};

export default componentTheme;
