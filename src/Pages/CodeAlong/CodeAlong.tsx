import React, { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";

export const CodeAlong = () => {
  const [value, setValue] = useState("");

  return (
    <MainWrapper>
      <h1>Code along with pluralsight</h1>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter some text"
      />
      <p>{value}</p>
    </MainWrapper>
  );
};
