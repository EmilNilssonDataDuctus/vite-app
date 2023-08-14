import { useClimberContext } from "../../contexts/ClimberContext";
import { BoulderTableBodyRow } from "./BoulderTableBodyRow";

export const BoulderTableBody = () => {
  const { climbers } = useClimberContext();
  return (
    <tbody>
      {climbers?.map((climberItem) => {
        console.log(climberItem);
        return (
          <BoulderTableBodyRow key={climberItem} climberItem={climberItem} />
        );
      })}
    </tbody>
  );
};
