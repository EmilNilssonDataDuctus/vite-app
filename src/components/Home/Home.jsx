import { useState } from "react";
import "./Home.css";
import { MainWrapper } from "./Home.styled";

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <MainWrapper>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </MainWrapper>
  );
}
