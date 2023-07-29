import type { ButtonProps } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { alpha, createTheme } from "@mui/material/styles";

let defaultThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#0C874C",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#F89132",
    },
    background: { default: "#f1f1f1", paper: "#ffffff" },
  },
});

const customTypography = createTheme({
  typography: {
    h1: { fontSize: "1.6rem" },
    h2: { fontSize: "1.5rem" },
    h3: { fontSize: "1.4rem", marginTop: ".5rem" },
    h4: { fontSize: "1.3rem" },
    h5: { fontSize: "1.2rem" },
    h6: { fontSize: "1.1rem" },

    // fontSize: 10,
    // poppins
    fontFamily: '"Poppins", sans-serif',
  },
}).typography;

defaultThemeOptions = createTheme(defaultThemeOptions, {
  typography: customTypography,

  components: {
    //   MuiCssBaseline: {
    //     styleOverrides: `
    //       @font-face {
    //         font-family: 'Roboto', sans-serif;
    //       }
    //     `,
    //   },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          // backgroundColor: alpha("#1e4620", 0.1),
          // border: "1px solid",
          // borderColor: alpha("#000000", 0.12),
          // boxShadow: "none",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        outlined: {
          borderRadius: 4,
          mb: "2rem",
          padding: "1rem",
        },
        root: {
          borderRadius: 4,
          mb: "2rem",
          // padding: "1rem",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: "#ffffff",
          marginBottom: 3,
          border: "1px solid",
          borderColor: alpha("#000000", 0.12),
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          // "&:hover": {
          //   backgroundColor: colors.secondary,
          //   color: "black",
          // },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          marginRight: 5,
        },
        contained: {
          boxShadow: "none",
          color: "white",
        },

        outlined: ({
          ownerState,
          theme,
        }: {
          ownerState: ButtonProps;
          theme: Theme;
        }) => ({
          "&:hover": {
            backgroundColor:
              theme.palette[
                ownerState.color === "inherit"
                  ? `primary`
                  : ownerState.color || "primary"
              ].main,
            color: "#ffffff",
          },
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        sx: {
          marginTop: 0.5,
          marginBottom: 0.5,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: { root: { borderRadius: 4 } },
    },
  },
});

const theme = createTheme(defaultThemeOptions);

theme.typography.h1 = {
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
};

export default theme;
