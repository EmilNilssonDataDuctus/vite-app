import { BrowserRouter, Route, Routes } from "react-router-dom";

import CardBig from "./components/CardBig/CardBig";
import Cards from "./components/Cards/Cards";
import { Home } from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/card/:name" element={<CardBig />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
