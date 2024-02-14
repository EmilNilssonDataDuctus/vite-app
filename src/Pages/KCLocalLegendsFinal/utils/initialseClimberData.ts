// Example climbers

import { Prettify } from "../../../utils/typescriptPrettify";
import { Boulder, boulders } from "../data/boulders";

type BoulderPoints = 0 | 10 | 20 | 30 | 40 | 65;

type BoulderOnClimber = Boulder & {
  completed: boolean;
  points: BoulderPoints;
  attempts: number;
};

export type PrettyBoulderOnClimber = Prettify<BoulderOnClimber>;

export type Gender = "male" | "female";

export type Climber = {
  climberName: string;
  climberGender: string;
  climberId: string;
  completedBoulders: BoulderOnClimber[];
  orderAdded: number;
  deleted: boolean;
};

// Only ever used whenever a new client is using this application
const initialClimbers: Climber[] = [
  { climberGender: "male", climberName: "Emil Nilsson" },
  { climberGender: "male", climberName: "Xilefski" },
  { climberGender: "female", climberName: "Janja" },
].map((climber, index) => ({
  ...climber,
  climberId: (index + 1).toString(),
  orderAdded: index + 1,
  deleted: false,
  completedBoulders: boulders.map((boulder) => ({
    ...boulder,
    completed: false,
    points: 0,
    attempts: 0,
  })),
}));

const storedClimbersFromLocalStorage = localStorage.getItem(
  "storedClimbersLocalLegendsFinal"
);

export const initialseStateOfClimbers = storedClimbersFromLocalStorage
  ? JSON.parse(storedClimbersFromLocalStorage)
  : initialClimbers;
