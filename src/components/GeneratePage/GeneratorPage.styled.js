import { styled } from "styled-components";

export const GeneratorContainer = styled.div`
  width: 1200px;
  height: 900px;
  background-color: ${(props) => `rgba(0, 0, 0, ${props.$accent})`};
`;

export const NestedDiv = styled.div`
  width: 200px;
  height: 90px;
  background-color: ${(props) => `rgba(0, 0, 0, ${props.$accent})`};
`;

export const InputLabel = styled.label`
  width: 400px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 0, 0, 0.1);
`;
