import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      // main: "#FFD700",
      main: "#858584",
      // dark: "#695a00",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#858584",
    },
    icon: {
      //Icon color
      main: "#858584",
    },
    buttonBg: {
      //Button Bg Color
      main: "linear-gradient(270deg, #00F902 -16.36%, rgba(99, 250, 6, 0) 190%)",
      dark: "linear-gradient(180deg, #5F5E5E 0%, rgba(95, 94, 94, 0.19) 100%)",
    },
    textShadow: {
      //For Text Shadow
      main: "0px 4px 8px #00F902",
    },
    fonts: {
      // For fonts
      main: "Work Sans",
    },
  },
  overrides: {
    OutlinedInput: {
      focused: {
        border: "1px solid red",
      },
      notchedOutline: {
        border: "1px solid #4A90E2",
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div style={{ overflowX: "hidden" }}>
        <App />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
