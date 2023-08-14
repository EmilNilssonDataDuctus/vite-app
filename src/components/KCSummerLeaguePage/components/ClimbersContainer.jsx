import { useClimberContext } from "../contexts/ClimberContext";
import { BoulderTable } from "./BoulderTable/BoulderTable";
import { ClimberForm } from "./ClimberForm";

export const ClimbersContainer = () => {
  const {
    climbers,
    addClimber,
    deleteClimber,
    addCompletedBoulder,
    removeCompletedBoulder,
  } = useClimberContext();

  return (
    <>
      <BoulderTable
        climbers={climbers}
        onDeleteClimber={deleteClimber}
        onAddCompletedBoulder={addCompletedBoulder}
        onRemoveCompletedBoulder={removeCompletedBoulder}
      />
      <ClimberForm addClimber={addClimber} />
    </>
  );
};
