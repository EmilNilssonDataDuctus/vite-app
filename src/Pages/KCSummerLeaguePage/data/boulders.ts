type ColorOfBoulder = "black" | "blue" | "orange" | "red" | "purple" | "yellow";
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
  | "H3";

export type Boulder = {
  readonly color: ColorOfBoulder;
  readonly wall: WallOfBoulder;
  readonly week: number;
  readonly boulderId: number;
};
export const boulders: Boulder[] = [
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
].sort((boulderA, boulderB) =>
  boulderA.boulderId > boulderB.boulderId ? 1 : -1
);
