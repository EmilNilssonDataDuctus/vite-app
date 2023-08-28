import React, { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";

export const CodeAlong = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setHistory([e.target.value, ...history]);
  };

  return (
    <MainWrapper>
      <h1>Code along with pluralsight</h1>
      <input
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder="Enter some text"
      />
      <p>{value}</p>
      {history && history.length > 0 && (
        <div>
          History:
          <ul>
            {history.map((entry) => (
              <li>{entry}</li>
            ))}
          </ul>
        </div>
      )}
    </MainWrapper>
  );
};
