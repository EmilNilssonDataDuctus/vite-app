import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import CardBig from "./components/CardBig/CardBig";
import Cards from "./components/Cards/Cards";
import { Home } from "./components/Home/Home";
import { HoverCardsPage } from "./components/HoverCardsPage/HoverCardsPage";
import { MemoryGame } from "./components/MemoryGame/MemoryGame";
import Navbar from "./components/Navbar/Navbar";
import { darkTheme, lightTheme } from "./components/Themes";
import { GlobalStyles } from "./components/globalStyles";

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
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/memory-game" element={<MemoryGame />} />
          <Route path="/card/:name" element={<CardBig />} />
          <Route path="/hover-cards" element={<HoverCardsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
