import AsyncStorage from "@react-native-async-storage/async-storage";
import { TThemeList } from "../theme/types";

export const Theme = {
  async getTheme(): Promise<TThemeList> {
    console.log("TEST REP: getTheme");
    const res = await AsyncStorage.getItem("theme");
    return res ? (JSON.parse(res) as TThemeList) : "light";
  },

  async setTheme(theme: TThemeList): Promise<void> {
    console.log("TEST REP: setTheme");
    AsyncStorage.setItem("theme", JSON.stringify(theme));
  },
};
