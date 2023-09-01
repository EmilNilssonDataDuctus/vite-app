import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { CodeAlong } from "./Pages/CodeAlong/CodeAlong";
import { CodeAlongHome } from "./Pages/CodeAlong/Pages";
import { CodeAlongSpeakers } from "./Pages/CodeAlong/Pages/Speakers";
import { GamePage } from "./Pages/Game/Game";
import { GeneratePage } from "./Pages/GeneratePage/GeneratePage";
import { Home } from "./Pages/Home/Home";
import { HoverEffectsPage } from "./Pages/HoverEffectsPage/HoverEffectsPage";
import { HoverEffectsPage2 } from "./Pages/HoverEffectsPage2/HoverEffectsPage2";
import Navbar from "./Shared/Navbar/Navbar";
import CardBig from "./components/CardBig/CardBig";
import Cards from "./components/Cards/Cards";
import { HoverCardsPage } from "./components/HoverCardsPage/HoverCardsPage";
import { KCSummerLeaguePage } from "./components/KCSummerLeaguePage/KCSummerLeaguePage";
import { MemoryGame } from "./components/MemoryGame/MemoryGame";
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
            <Route path="/hover-cards" element={<HoverCardsPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/memory-game" element={<MemoryGame />} />
            <Route path="/card/:name" element={<CardBig />} />
            <Route path="/kc-summerleague" element={<KCSummerLeaguePage />} />
            <Route path="/generate" element={<GeneratePage />} />
            <Route path="/tracing" element={<TracerPage />} />
            <Route path="/hover-move" element={<HoverEffectsPage />} />
            <Route path="/hover-move2" element={<HoverEffectsPage2 />} />
            <Route path="/code-along-old" element={<CodeAlong />} />
            <Route path="/code-along" element={<CodeAlongHome />} />
            <Route
              path="/code-along/speakers"
              element={<CodeAlongSpeakers />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
