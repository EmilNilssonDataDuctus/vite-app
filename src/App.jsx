import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { HoverEffectsPage } from "./Pages/HoverEffectsPage/HoverEffectsPage";
import { HoverEffectsPage2 } from "./Pages/HoverEffectsPage2/HoverEffectsPage2";
import CardBig from "./components/CardBig/CardBig";
import Cards from "./components/Cards/Cards";
import { GeneratePage } from "./components/GeneratePage/GeneratePage";
import { Home } from "./components/Home/Home";
import { KCSummerLeaguePage } from "./components/KCSummerLeaguePage/KCSummerLeaguePage";
import { MemoryGame } from "./components/MemoryGame/MemoryGame";
import Navbar from "./components/Navbar/Navbar";
import { darkTheme, lightTheme } from "./components/Themes";
import { TracerPage } from "./components/TracerPage/TracerPage";
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
          <Route path="/kc-summerleague" element={<KCSummerLeaguePage />} />
          <Route path="/generate" element={<GeneratePage />} />
          <Route path="/tracing" element={<TracerPage />} />
          <Route path="/hover-move" element={<HoverEffectsPage />} />
          <Route path="/hover-move2" element={<HoverEffectsPage2 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
