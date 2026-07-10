import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App.tsx";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#c68a64",
      light: "#d8a586",
      dark: "#9b6648",
      contrastText: "#0d141d",
    },
    secondary: {
      main: "#7ea4c2",
      light: "#a9c0d6",
      contrastText: "#0d141d",
    },
    background: {
      default: "#0d141d",
      paper: "#16202d",
    },
    text: {
      primary: "#f3ede4",
      secondary: "#a5b0bf",
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Sora", "Segoe UI", sans-serif',
      fontWeight: 800,
      letterSpacing: "-0.05em",
    },
    h2: {
      fontFamily: '"Sora", "Segoe UI", sans-serif',
      fontWeight: 700,
      letterSpacing: "-0.04em",
    },
    h3: {
      fontFamily: '"Sora", "Segoe UI", sans-serif',
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h4: {
      fontFamily: '"Sora", "Segoe UI", sans-serif',
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h5: {
      fontFamily: '"Sora", "Segoe UI", sans-serif',
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: "320px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: "0.85rem 1.4rem",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
