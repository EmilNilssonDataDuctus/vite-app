import { useClimberContext } from "../../contexts/ClimberContext";
import { boulders } from "../../data/boulders";

export const BoulderTableBodyRow = ({ climberItem }) => {
  const { deleteClimber, toggleAddBoulder, toggleRemoveBoulder } =
    useClimberContext();
  console.log(climberItem);

  const handleDeleteUser = () => {
    deleteClimber(climberItem.id);
  };

  const handleCheckboxToggle = (e) => {
    const boulderId = parseInt(e.target.dataset.boulderno, 10);
    const isChecked = e.target.checked;

    isChecked
      ? toggleRemoveBoulder(climberItem.name, boulderId)
      : toggleAddBoulder(e.target.dataset.climber, boulderId);
  };

  return (
    <tr>
      <th>{climberItem.name}</th>
      <td>
        <button onClick={handleDeleteUser}>Delete user</button>
      </td>
      {boulders?.map((currentBoulder, index) => {
        return (
          <td key={currentBoulder.boulderId}>
            <input
              type="checkbox"
              checked={
                climberItem.completedBoulders.includes(
                  currentBoulder.boulderId
                ) || false
              }
              onChange={handleCheckboxToggle}
              data-boulderno={currentBoulder.boulderId}
              data-climber={climberItem.name}
            />
          </td>
        );
      })}
    </tr>
  );
};
