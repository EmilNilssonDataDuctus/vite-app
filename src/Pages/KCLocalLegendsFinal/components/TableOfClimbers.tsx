import React from "react";
import { boulders } from "../data/boulders";
import { Climber, PrettyBoulderOnClimber } from "../utils/initialseClimberData";
import { TableDataCheckbox } from "./TableDataCheckbox";
import { TableDataRangeInput } from "./TableDataRangeInput";
import { TableHeaderBoulderInfo } from "./TableHeaderBoulderInfo";

export const TableOfClimbers = ({
  climbersData,
  category,
  callbacks,
  modifiers,
}) => {
  const { title, identifier, gender } = category;
  const {
    handleBoulderPointsChange,
    handleNoAttemptsChange,
    handleRestoreDeletedClimber,
    handleDeletePermanent,
    handleDeleteWithOptionToRestore,
    handleBoulderToggle
  } = callbacks;

  const {
    shouldSortByCompletions,
    shouldSortByPoints,
    sortAlphabetically,
    hideDeletedClimbers,
    useSimpleScoring,
  } = modifiers;

  const reduceBoulders = (accumulator, currentBoulder) => {
    if (currentBoulder.completed) accumulator++;
    return accumulator;
  };
  const reduceBouldersToPoints = (accumulator, currentBoulder) => {
    if (!currentBoulder.points || !currentBoulder.attempts) return accumulator;

    const penaltyPoints = (currentBoulder.attempts - 1) * 0.1;
    const formattedPoints = parseFloat(currentBoulder.points);
    const totalPointsForBoulder = formattedPoints - penaltyPoints;

    return accumulator + totalPointsForBoulder;
  };

  const sortClimbersData = (array) => {
    const shouldSortByOrderAdded = true;

    const arrAfterFirstSort = shouldSortByOrderAdded
      ? array.toSorted((climberA, climberB) =>
          climberA.orderAdded > climberB.orderAdded ? 1 : -1
        )
      : array;

    const arrAfterSecondSort = sortAlphabetically
      ? arrAfterFirstSort.toSorted((climberA, climberB) => {
          return climberA.climberName.toLowerCase() <
            climberB.climberName.toLowerCase()
            ? -1
            : 1;
        })
      : arrAfterFirstSort;

    const arrAfterThirdSort = shouldSortByCompletions
      ? arrAfterSecondSort.toSorted((climberA, climberB) => {
          return climberA.completedBoulders.reduce(reduceBoulders, 0) >
            climberB.completedBoulders.reduce(reduceBoulders, 0)
            ? -1
            : 1;
        })
      : arrAfterSecondSort;

    const arrAfterFourthSort = shouldSortByPoints
      ? arrAfterThirdSort.toSorted((climberA, climberB) => {
          return climberA.completedBoulders.reduce(reduceBouldersToPoints, 0) >
            climberB.completedBoulders.reduce(reduceBouldersToPoints, 0)
            ? -1
            : 1;
        })
      : arrAfterThirdSort;

    const arrAfterFiltering = hideDeletedClimbers
      ? [...arrAfterFourthSort].filter((climber) => !climber.deleted)
      : arrAfterThirdSort;

    return arrAfterFiltering;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>{title}</th>
          <th style={{ textAlign: "right" }}>Wall</th>
          {boulders
            .filter((boulder) => boulder.boulderId.includes(identifier))
            .map(({ boulderId, wall, color }) => (
              <TableHeaderBoulderInfo
                key={boulderId}
                boulderId={boulderId}
                wall={wall}
                color={color}
              />
            ))}
        </tr>
      </thead>
      <tbody>
        {sortClimbersData(climbersData)
          .filter((climber) => climber.climberGender === gender)
          .map(
            ({
              climberId,
              climberName,
              completedBoulders,
              deleted,
            }: Climber) => (
              <tr key={climberId} style={{ mixBlendMode: "difference" }}>
                <td>{climberName}</td>
                <td>
                  <span style={{ marginLeft: "auto", padding: "16px" }}>
                    Total Boulders completed:{" "}
                    {completedBoulders.reduce(reduceBoulders, 0)}
                  </span>
                  <br />
                  <span style={{ marginLeft: "auto", padding: "16px" }}>
                    Total score:{" "}
                    {completedBoulders
                      .reduce(reduceBouldersToPoints, 0.0)
                      .toFixed(1)}
                  </span>
                </td>
                {completedBoulders
                  .filter((boulder) => boulder.boulderId.includes(identifier))
                  .map(
                    ({
                      boulderId,
                      color,
                      completed,
                      points,
                      attempts,
                    }: PrettyBoulderOnClimber) => (
                      <>
                        {useSimpleScoring ? (
                          <TableDataCheckbox
                          color={color}
                          boulderId={boulderId}
                          completed={completed}
                          handleBoulderToggle={handleBoulderToggle}
                          climberId={climberId}
                          />
                        ) : (
                          <TableDataRangeInput
                            key={boulderId}
                            color={color}
                            boulderId={boulderId}
                            completed={completed}
                            points={points}
                            attempts={attempts}
                            handleBoulderPointsChange={
                              handleBoulderPointsChange
                            }
                            handleNoAttemptsChange={handleNoAttemptsChange}
                            climberId={climberId}
                          />
                        )}
                      </>
                    )
                  )}
                <>
                  {deleted ? (
                    <td>
                      <button
                        onClick={() => handleRestoreDeletedClimber(climberId)}
                      >
                        Restore
                      </button>
                      <button onClick={() => handleDeletePermanent(climberId)}>
                        Delete permanently
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button
                        onClick={() =>
                          handleDeleteWithOptionToRestore(climberId)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </>
              </tr>
            )
          )}
      </tbody>
    </table>
  );
};
