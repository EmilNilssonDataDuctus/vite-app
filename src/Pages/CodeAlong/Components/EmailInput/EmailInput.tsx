import React, { useState } from "react";
import { EmailInputBanner } from "./EmailInput.styled";

export const EmailInput = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <EmailInputBanner>
      <div>
        <h2>Silicon Valley Code Camp</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Email"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" disabled={!value.includes("@")}>
            Get Updates
          </button>
        </form>
      </div>
    </EmailInputBanner>
  );
};
