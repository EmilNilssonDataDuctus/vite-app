type ColorOfBoulder =
  | "black"
  | "blue"
  | "orange"
  | "red"
  | "purple"
  | "yellow"
  | "red/black"
  | "purple/black";
type WallOfBoulder =
  | "A1"
  | "A3"
  | "B2"
  | "C3"
  | "D2"
  | "D3"
  | "D4"
  | "E1"
  | "E3"
  | "G1"
  | "G2"
  | "H1"
  | "H2"
  | "H3";

export type Boulder = {
  readonly color: ColorOfBoulder;
  readonly wall: WallOfBoulder;
  readonly boulderId: string;
};
export const boulders: Boulder[] = [
  {
    color: "orange",
    wall: "G1",
    boulderId: "M1",
  },
  {
    color: "blue",
    wall: "H3",
    boulderId: "M2",
  },
  {
    color: "red",
    wall: "H1",
    boulderId: "M3",
  },
  {
    color: "blue",
    wall: "G1",
    boulderId: "M4",
  },
  {
    color: "red/black",
    wall: "H3",
    boulderId: "M5",
  },
  {
    color: "red",
    wall: "G2",
    boulderId: "W1",
  },
  {
    color: "orange",
    wall: "H3",
    boulderId: "W2",
  },
  {
    color: "blue",
    wall: "G1",
    boulderId: "W3",
  },
  {
    color: "yellow",
    wall: "G1",
    boulderId: "W4",
  },
  {
    color: "purple/black",
    wall: "H2",
    boulderId: "W5",
  },
];

boulders.sort((boulderA, boulderB) =>
  boulderA.boulderId > boulderB.boulderId ? 1 : -1
);
