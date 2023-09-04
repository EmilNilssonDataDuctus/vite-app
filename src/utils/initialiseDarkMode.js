const initialDarkModeState = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? "dark"
  : "light";

const storedDarkModeFromLocalStorage = localStorage.getItem("storedDarkMode");

export const initialseStateDarkMode = storedDarkModeFromLocalStorage
  ? storedDarkModeFromLocalStorage
  : initialDarkModeState;
