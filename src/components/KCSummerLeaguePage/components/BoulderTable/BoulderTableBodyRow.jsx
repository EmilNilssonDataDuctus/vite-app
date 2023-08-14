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
    e.target.checked
      ? toggleRemoveBoulder(
          e.target.dataset.climber,
          e.target.dataset.boulderno
        )
      : toggleAddBoulder(e.target.dataset.climber, e.target.dataset.boulderno);
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
                !!climberItem.completedBoulders?.find(
                  (boulder) => currentBoulder.boulderId === boulder
                )
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
