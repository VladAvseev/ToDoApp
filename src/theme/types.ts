export interface ITheme {
  color: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

export interface IThemeMap {
  light: ITheme;
  dark: ITheme;
}

export type TThemeList = keyof IThemeMap;
