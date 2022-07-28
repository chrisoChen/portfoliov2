import colorTheme from "./colorTheme";
import fontTheme from "./fontTheme";

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
        sx: {
          fontSize: { xs: "3rem", sm: "3.5rem", md: "5rem" },
        },
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: { variant: "logo" },
          style: {
            margin: "0 auto",
          },
        },
      ],
    },
  },
};

export default componentTheme;
