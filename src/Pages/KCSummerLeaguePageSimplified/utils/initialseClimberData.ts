// Example climbers

import { Prettify } from "../../../utils/typescriptPrettify";
import { Boulder, boulders } from "../../KCSummerLeaguePage/data/boulders";

type BoulderOnClimber = Boulder & {
  completed: boolean;
};

export type PrettyBoulderOnClimber = Prettify<BoulderOnClimber>;

export type Climber = {
  climberName: string;
  climberId: string;
  completedBoulders: BoulderOnClimber[];
  orderAdded: number;
};

// Only ever used whenever a new client is using this application
const initialClimbers: Climber[] = [
  { climberId: "1", climberName: "Emil Nilsson", orderAdded: 1 },
  { climberId: "2", climberName: "Xilefski", orderAdded: 2 },
].map((climber) => ({
  ...climber,
  completedBoulders: boulders.map((boulder) => ({
    ...boulder,
    completed: false,
  })),
}));

const storedClimbersFromLocalStorage = localStorage.getItem("storedClimbers");

export const initialseStateOfClimbers = storedClimbersFromLocalStorage
  ? JSON.parse(storedClimbersFromLocalStorage)
  : initialClimbers;
