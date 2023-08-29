import React from "react";
import { SpeakersNav, SpeakersUl } from "../index.styled";
export const CodeAlongNav = () => {
  return (
    <SpeakersNav>
      <SpeakersUl>
        <li>
          <a href="/code-along">Home</a>
        </li>
        <li>
          <a href="/code-along/speakers">Speakers</a>
        </li>
      </SpeakersUl>
    </SpeakersNav>
  );
};
