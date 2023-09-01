import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { Navbar } from "./Shared/Navbar/Navbar";
import { darkTheme, lightTheme } from "./components/Themes";
import { GlobalStyles } from "./components/globalStyles";
import { hideInactive, pageRoutes } from "./meta/pageData";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    console.log(theme);
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar themeToggler={themeToggler} />
      <BrowserRouter>
        <Routes>
          {pageRoutes.filter(hideInactive).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
