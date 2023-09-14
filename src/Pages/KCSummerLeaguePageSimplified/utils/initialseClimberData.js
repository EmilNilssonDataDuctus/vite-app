// Example climbers

import { boulders } from "../../KCSummerLeaguePage/data/boulders";

// Only ever used whenever a new client is using this application
const initialClimbers = [
  { climberId: 1, climberName: "Emil Nilsson", orderAdded: 1 },
  { climberId: 2, climberName: "Xilefski", orderAdded: 2 },
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

console.log(initialseStateOfClimbers);
