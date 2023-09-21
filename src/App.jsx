import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import { hideInactivePages, pageRoutes } from "./Pages/pageData";
import "./Shared/MakeStore/MakeStore";
import { Navbar } from "./Shared/Navbar/Navbar";
import { darkTheme, lightTheme } from "./components/Themes";
import { GlobalStyles } from "./components/globalStyles";
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
      <Toaster position="bottom-left" />
    </ThemeProvider>
  );
}

export default App;
