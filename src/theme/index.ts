import { DARK_THEME } from "./dark";
import { LIGHT_THEME } from "./light";
import { IThemeMap } from "./types";

export const THEME: IThemeMap = {
  light: LIGHT_THEME,
  dark: DARK_THEME,
};

export { useTheme } from "./hooks/useTheme";
export { useSetThemeMutation } from "./hooks/setTheme";
