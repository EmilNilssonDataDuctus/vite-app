import React from "react";
import { MainWrapper } from "../../../Shared/Page.styled";
import { CodeAlongNav } from "../Components/CodeAlongNav";
import { EmailInput } from "../Components/EmailInput/EmailInput";

export const CodeAlongHome = () => {
  return (
    <MainWrapper>
      <CodeAlongNav />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <EmailInput />
        <h1>Main page</h1>
      </div>
    </MainWrapper>
  );
};
