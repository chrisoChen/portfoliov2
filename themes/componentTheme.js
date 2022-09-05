import colorTheme from "./colorTheme";
import fontTheme from "./fontTheme";
import { createTheme } from "@mui/material";

const tempTheme = createTheme();

const componentTheme = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: "secondary",
          border: `2px solid ${colorTheme.palette.secondary.main}`,
          color: colorTheme.palette.secondary.main,
          backgroundColor: colorTheme.palette.dark.main,
          borderRadius: "5px",
          textTransform: "capitalize",
          fontSize: "1rem",
          [tempTheme.breakpoints.up("sm")]: {
            fontSize: "1.2rem",
          },
        },
      },
      variants: [
        {
          props: { variant: "circle" },
          style: {
            [tempTheme.breakpoints.up("sm")]: {
              fontSize: "3rem",
            },
            width: "1.5em",
            minWidth: "1.5em",
            height: "1.5em",
            padding: "auto",
            margin: "auto",
            fontSize: "2rem",
            borderRadius: "50%",
            borderColor: colorTheme.palette.neutral.main,
            backgroundColor: colorTheme.palette.neutral.main,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: fontTheme.typography.fontFamily,
          cursor: "pointer",
        },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: "large",
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
    MuiDrawer: {
      styleOverrides: {
        root: {
          //   display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            [tempTheme.breakpoints.up("sm")]: { width: "40vw" },
            width: "80vw",
            backgroundColor: colorTheme.palette.dark.main,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          "& .MuiDivider-wrapper": {
            padding: 0,
          },
        },
        // Remove trailing divider when adding content inside MUI Divider
        textAlignLeft: {
          "&::before": {
            width: "0%",
          },
          "&::after": {
            width: "100%",
            borderTop: "1px solid",
            borderColor: colorTheme.palette.secondary.main,
          },
        },
        textAlignRight: {
          "&::before": {
            width: "100%",
            borderTop: "1px solid",
            borderColor: colorTheme.palette.secondary.main,
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
      variants: [
        {
          props: { variant: "textCenter" },
          style: {
            textAlign: "center",
          },
        },
        {
          props: { variant: "section" },
          style: {
            [tempTheme.breakpoints.up("md")]: {
              width: "80%",
            },
            width: "95%",
            // padding: "3rem 0",
            padding: `${tempTheme.spacing(2)} 0`,
          },
        },
      ],
    },
    MuiStack: {
      defaultProps: {
        direction: { xs: "column", md: "row" },
      },
    },
    MuiAccordion: {
      defaultProps: {
        // Prevents icon shifting when expanding
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          width: "85%",
          border: `2px solid ${colorTheme.palette.secondary.main}`,
          "&:not(:last-child)": {
            borderBottom: 0,
          },
          margin: "0 auto",
          "&.Mui-expanded": {
            margin: "0 auto",
          },

          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          flexDirection: "row-reverse",
          backgroundColor: colorTheme.palette.primary.main,
          "& .MuiAccordionSummary-content": {
            marginLeft: tempTheme.spacing(1),
          },
          "&:hover": {
            opacity: "0.85",
            transition: "0.3s",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: colorTheme.palette.dark.main,
          borderTop: `1px solid ${colorTheme.palette.secondary.main}`,
        },
      },
    },
    MuiChip: {
      defaultProps: {
        size: "small",
        color: "dark",
      },
      styleOverrides: {
        root: {
          border: `1px solid ${colorTheme.palette.secondaryAlt.main}`,
          color: colorTheme.palette.secondary.main,
        },
      },
    },
  },
};

export default componentTheme;
