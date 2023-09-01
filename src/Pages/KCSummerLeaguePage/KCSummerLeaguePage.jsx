import { MainWrapper } from "../../Shared/Page.styled";
import { ClimbersContainer } from "./components/ClimbersContainer";
import { ClimberProvider } from "./contexts/ClimberContext";

export const KCSummerLeaguePage = () => {
  return (
    <MainWrapper>
      <ClimberProvider>
        <ClimbersContainer />
      </ClimberProvider>
    </MainWrapper>
  );
};
