import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { Navbar } from "./Shared/Navbar/Navbar";
import { darkTheme, lightTheme } from "./components/Themes";
import { GlobalStyles } from "./components/globalStyles";
import { hideInactivePages, pageRoutes } from "./meta/pageData";
import { initialseStateDarkMode } from "./utils/initialiseDarkMode";

function App() {
  const [theme, setTheme] = useState(initialseStateDarkMode);

  const themeToggler = () => {
    console.log(theme);
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("storedDarkMode", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar themeToggler={themeToggler} />
      <BrowserRouter>
        <Routes>
          {pageRoutes
            .filter(hideInactivePages)
            .map(({ path, element, dynamicId }) => (
              <Route
                key={path}
                path={dynamicId ? `${path}/:${dynamicId}` : path}
                element={element}
              />
            ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
