import { BrowserRouter, Route, Routes } from "react-router-dom";

import Card from "./components/Card/Card";
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
          <Route path="/card/:id" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
