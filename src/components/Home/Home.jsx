import { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import "./Home.css";

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
