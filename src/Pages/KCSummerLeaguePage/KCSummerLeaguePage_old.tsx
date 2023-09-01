import React, { useEffect, useReducer, useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { TableComponent } from "./KCSummerLeaguePage.styled";

type Weeknumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type BoulderColor = "blue" | "red" | "yellow" | "purple" | "black" | "orange";
type WallId =
  | "A1"
  | "A2"
  | "A3"
  | "A4"
  | "A5"
  | "A6"
  | "B1"
  | "B2"
  | "C1"
  | "C2"
  | "C3"
  | "D1"
  | "D2"
  | "D3"
  | "D4"
  | "E1"
  | "E2"
  | "E3"
  | "G1"
  | "G2"
  | "H1"
  | "H2"
  | "H3";

type Boulder = {
  color: BoulderColor;
  wall: WallId;
  week: Weeknumber;
  boulderId: number;
};

type BoulderClimbed = {
  boulderId: number;
  completed: boolean;
};

type Climber = {
  name: string;
  completedBoulders?: BoulderClimbed[];
};

const initialBoulderData: Boulder[] = [
  {
    color: "orange",
    wall: "C3",
    week: 1,
    boulderId: 2,
  },

  {
    color: "orange",
    wall: "H3",
    week: 2,
    boulderId: 3,
  },
  {
    color: "red",
    wall: "A1",
    week: 2,
    boulderId: 4,
  },
  {
    color: "purple",
    wall: "A3",
    week: 3,
    boulderId: 5,
  },
  {
    color: "blue",
    wall: "C3",
    week: 1,
    boulderId: 1,
  },
  {
    color: "orange",
    wall: "A3",
    week: 3,
    boulderId: 6,
  },
  {
    color: "blue",
    wall: "D4",
    week: 4,
    boulderId: 7,
  },
  {
    color: "yellow",
    wall: "D4",
    week: 4,
    boulderId: 8,
  },
  {
    color: "orange",
    wall: "B2",
    week: 5,
    boulderId: 9,
  },
  {
    color: "purple",
    wall: "B2",
    week: 5,
    boulderId: 10,
  },
  {
    color: "yellow",
    wall: "E1",
    week: 6,
    boulderId: 11,
  },
  {
    color: "black",
    wall: "E3",
    week: 6,
    boulderId: 12,
  },
  {
    color: "yellow",
    wall: "D2",
    week: 7,
    boulderId: 13,
  },
  {
    color: "black",
    wall: "D3",
    week: 7,
    boulderId: 14,
  },
  {
    color: "blue",
    wall: "G1",
    week: 8,
    boulderId: 15,
  },
  {
    color: "red",
    wall: "G2",
    week: 8,
    boulderId: 16,
  },
];
const initialClimbersData: Climber[] = [
  {
    name: "emilpnilsson",
    completedBoulders: [],
  },
];

function climbersReducer(climbers, action) {
  switch (action.type) {
    case "add_new_climber": {
      localStorage.setItem("climbersData", JSON.stringify([climbers]));
      return [
        ...climbers,
        {
          name: action.name,
          completedBoulders: [],
        },
      ];
    }
    case "delete_climber": {
      return climbers.filter((climber) => climber.name === action.name);
    }
    // case "toggle_boulder_completion": {
    //   return climbers.map((c: Climber) => {
    //     if (c.name === action.name) {
    //       return {
    //         name: c.name,

    //       }
    //     }
    //   })
    // }
  }
}

export const KCSummerLeaguePage = () => {
  const [boulderData, setBoulderData] = useState(initialBoulderData);
  // const [climbersData, setClimbersData] = useState(initialClimbersData);

  const [newClimberName, setNewClimberName] = useState("");

  const [climbers, dispatch] = useReducer(
    climbersReducer,
    JSON.parse(localStorage.getItem("climbersData")) || initialClimbersData
  );
  console.log(typeof climbers);
  console.log(climbers);

  const SaveData = () => {
    localStorage.setItem("boulderData", JSON.stringify(initialBoulderData));
    localStorage.setItem("climbersData", JSON.stringify(initialClimbersData));
  };

  const updateClimberName = (e) => {
    setNewClimberName(e.target.value);
  };

  const TickBoulderProblem = (e) => {
    dispatch({
      type: "toggle_boulder_completion",
      name: e.dataset.climber,
      boulderId: e.dataset.boulderid,
    });
  };

  const DeleteClimber = (e) => {};

  const AddNewClimber = (e) => {
    e.preventDefault();

    dispatch({
      type: "add_new_climber",
      name: newClimberName,
    });

    // setClimbersData(JSON.parse(localStorage.getItem("climbersData")));
    setNewClimberName("");
  };

  const toggleBoulderCompleted = (e) => {
    const clickedUser = e.target.dataset.user;
    const clickedBoulder = e.target.dataset.boulderno;

    const prevUser = JSON.parse(localStorage.getItem("climbersData")).find(
      (user) => user.name === clickedUser
    );
    console.log(prevUser);
    const boulderAlreadyLogged = !!prevUser.completedBoulders.find(
      (boulder) => boulder.id === clickedBoulder
    );
    console.log(boulderAlreadyLogged);
    // if (boulderAlreadyLogged) {
    //   JSON.parse(localStorage.getItem("climbersData"))
    //     .find((user) => user.name === clickedUser)
    //     .completedBoulders.find(
    //       (boulder) => boulder.id === clickedBoulder
    //     ).completed = false;
    // } else {
    //   localStorage.setItem(
    //     "climbersData",
    //     JSON.stringify(
    //       JSON.parse(localStorage.getItem("climbersData"))
    //         .find((user) => user.name === clickedUser)
    //         .completedBoulders.push({
    //           id: clickedBoulder,
    //           completed: true,
    //         })
    //     )
    //   );
    // }
  };

  const handleDeleteUser = (e) => {
    const climberName = e.target.parentNode.parentNode.firstChild.textContent;

    dispatch({
      type: "delete_climber",
      name: climberName,
    });
  };

  useEffect(() => {
    setBoulderData(JSON.parse(localStorage.getItem("boulderData")));
  }, []);
  return (
    <MainWrapper>
      <button onClick={SaveData}>Sync data</button>
      <TableComponent>
        <thead>
          <tr>
            <th></th>
            <th>Week</th>
            {boulderData
              ?.sort((dataitemA, dataitemB) => {
                return dataitemA.boulderId < dataitemB.boulderId
                  ? -1
                  : dataitemA.boulderId > dataitemB.boulderId
                  ? 1
                  : 0;
              })
              .map((dataItem, index) => {
                if (index % 2)
                  return <th key={dataItem.week + dataItem.color}></th>;
                return (
                  <th key={dataItem.week + dataItem.color}>{dataItem.week}</th>
                );
              })}
          </tr>
          <tr>
            <th>Climbername</th>
            <th>Boulder</th>
            {boulderData?.map((dataItem) => {
              return (
                <th key={dataItem.wall + dataItem.color}>{dataItem.color}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {climbers?.map((climberItem: Climber) => {
            return (
              <tr key={climberItem.name}>
                <th>{climberItem.name}</th>
                <td>
                  <button onClick={handleDeleteUser}>Delete user</button>
                </td>
                {boulderData?.map((currentBoulder, index) => {
                  return (
                    <td>
                      <input
                        type="checkbox"
                        checked={
                          !!climberItem.completedBoulders?.find(
                            (boulder) => currentBoulder.boulderId === boulder
                          )
                        }
                        onChange={TickBoulderProblem}
                        data-boulderno={currentBoulder.boulderId}
                        data-climber={climberItem.name}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </TableComponent>
      <form onSubmit={AddNewClimber}>
        <button type="submit">Add new climber</button>
        <input
          type="text"
          onChange={updateClimberName}
          value={newClimberName}
        />
      </form>
      {/* <h1>KC Summerleague</h1> */}
      {/* <table>
        <tr>
          <td>Week</td>
          <td>1</td>
          <td></td>
          <td>2</td>
          <td></td>
          <td>3</td>
          <td></td>
          <td>4</td>
          <td></td>
          <td>5</td>
          <td></td>
          <td>6</td>
          <td></td>
          <td>7</td>
          <td></td>
          <td>8</td>
          <td></td>
        </tr>
        <tr>
          <td>Participants</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
        </tr>
        <tr>
          <td>ruralwastelanddweller</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>
        <tr>
          <td>emilpnilsson</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>kristian.linde</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>elliotolofsgard</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>catsa.realiens</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>michael.na</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>vikko.climbs</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>thomas.ronnet</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>marielikorse</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>emmyjungyoun</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>gemrocks278</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td>x</td>
          <td></td>
          <td>x</td>
          <td></td>
        </tr>
        <tr>
          <td>klätterfotografen</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>martabouldering</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>linaclimbs</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>zengangarn</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>katrinerorosos</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td>x</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>snorkmaid</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td>x</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>malva.cronmalm</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td>x</td>
          <td></td>
          <td></td>
          <td>x</td>
          <td></td>
          <td></td>
          <td>x</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>vickanclimbs</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>x</td>
          <td>x</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>sarazmaxine</td>
          <td></td>
          <td></td>
          <td></td>
          <td>x</td>
          <td></td>
          <td></td>
          <td></td>
          <td>x</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>doubledoubleson</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>x</td>
          <td></td>
          <td></td>
          <td></td>
          <td>x</td>
        </tr>
      </table> */}
    </MainWrapper>
  );
};
