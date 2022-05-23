import create from "zustand";
import { ThemeState } from "../types/storeTypes";

export const useUIStore = create<ThemeState>((set) => ({
  isDarkTheme: false,
  toggleDarkTheme: () =>
    set((state) => {
      return { ...state, isDarkTheme: !state.isDarkTheme };
    }),
}));
