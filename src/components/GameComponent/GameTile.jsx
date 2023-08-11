import { Tile } from "./GameTile.styled copy";

export const GameTile = ({ index, activeSquare }) => {
  return <Tile $activeSquare={activeSquare}>{index}</Tile>;
};
