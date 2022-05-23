import { State } from "zustand";

export interface ThemeState extends State {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
}
