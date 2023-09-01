import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import Navbar from "./Shared/Navbar/Navbar";
import { darkTheme, lightTheme } from "./components/Themes";
import { GlobalStyles } from "./components/globalStyles";
import { pageRoutes } from "./meta/pageData";

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
{/*           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/memory-game" element={<MemoryGame />} />
            <Route path="/card/:name" element={<CardBig />} />
            <Route path="/hover-cards" element={<HoverCardsPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/kc-summerleague" element={<KCSummerLeaguePage />} />
            <Route path="/generate" element={<GeneratePage />} />
            <Route path="/tracing" element={<TracerPage />} />
            <Route path="/chart" element={<MyChart />} />
            <Route path="/todo-list" element={<TodoPage />} />
            <Route path="/hover-move" element={<HoverEffectsPage />} />
            <Route path="/hover-move2" element={<HoverEffectsPage2 />} />
            <Route path="/code-along-old" element={<CodeAlong />} />
            <Route path="/code-along" element={<CodeAlongHome />} />
            <Route
              path="/code-along/speakers"
              element={<CodeAlongSpeakers />}
            />
            <Route path="/speed-calculator" element={<SpeedCalculator />} />
            <Route path="/canvas" element={<MyCanvas />} />
          </Routes> */}
          <Routes>
            {pageRoutes.map(({path, element}) => <Route key={path} path={path} element={element} />)}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
