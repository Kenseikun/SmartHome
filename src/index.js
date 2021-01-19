import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./GlobalStyles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./GlobalStyles/theme/mainTheme";
import Root from "./Root/Root";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
