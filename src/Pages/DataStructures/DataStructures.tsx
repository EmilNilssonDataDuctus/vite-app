import React from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { DataSection } from "./DataStructures.styled";
import { QueueComponent } from "./QueueComponent/QueueComponent";
import "./styles.css";

export const DataStructures = () => {
  return (
    <MainWrapper>
      <h1>Data Structures</h1>
      <QueueComponent
        title="Queue with animation from top to bottom"
        animationType="TTD"
      />
      <QueueComponent
        title="Queue with animation from left to right"
        animationType="LTR"
      />
      <DataSection>
        <h2>Stack</h2>
      </DataSection>
    </MainWrapper>
  );
};
