import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "./theme/MuiTheme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
