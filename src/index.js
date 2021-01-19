import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./GlobalStyles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./GlobalStyles/theme/mainTheme";
import Root from "./Root/Root";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
