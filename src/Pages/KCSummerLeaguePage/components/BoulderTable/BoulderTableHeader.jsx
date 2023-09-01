import { boulders } from "../../data/boulders";

export const BoulderTableHeader = () => {
  return (
    <thead>
      <tr>
        <th></th>
        <th>Week</th>
        {boulders
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
        {boulders?.map((dataItem) => {
          return <th key={dataItem.wall + dataItem.color}>{dataItem.color}</th>;
        })}
      </tr>
    </thead>
  );
};
