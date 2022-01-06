import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#453f90",
    },
    secondary: {
      main: "#000",
    },
    info: {
      main: "#868686",
    },
  },

  typography: {
    fontFamily: [
      "Roboto",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    h6: {
      fontSize: "13px",
      fontWeight: "600px",
    },
    subtitle1: {
      fontSize: "13px",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "13px",
      fontWeight: 300,
    },
  },
});
