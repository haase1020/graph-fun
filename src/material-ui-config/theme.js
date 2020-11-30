import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

const prendaBlue = {
  light: "#83fbff",
  main: "#46c8e9",
  dark: "#0097b7",
  contrastText: "#ffffff",
};
const prendaOrange = {
  light: "#ffea4d",
  main: "#ffb800",
  dark: "#c78800",
  contrastText: "#ffffff",
};
const mono = {
  light: "#868686",
  main: "#595959",
  dark: "#303030",
  contrastText: "#ffffff",
};
const prendaBlueDark = {
  light: "#59c8e9",
  main: "#0097b7",
  dark: "#006987",
  contrastText: "#ffffff",
};
const deletion = {
  light: "#ff5f52",
  main: "#c62828",
  dark: "#8e0000",
  contrastText: "#ffffff",
};

let theme = createMuiTheme({
  spacing: 8,
  typography: {
    fontFamily: "Tondo, sans-serif",
    fontSize: 16,
    // h5: {
    //   fontWeight: 500 // RewardDialog
    // }
  },
  palette: {
    primary: prendaBlue,
    secondary: prendaOrange,
    mono,
    primaryDark: prendaBlueDark,
    deletion,
  },
  overrides: {
    MuiLink: {
      button: { color: prendaBlue.dark },
    },
    MuiDialog: {
      paper: {
        borderRadius: 16,
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;