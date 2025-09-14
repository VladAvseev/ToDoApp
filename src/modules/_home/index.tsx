import React, { JSX } from "react";
import { View, StyleSheet, Pressable, Switch } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { PageContainer } from "../../components/PageContainer";
import { TThemeList } from "@/src/theme/types";
import { THEME, useSetThemeMutation, useTheme } from "@/src/theme";
import { Text } from "@/src/components/Text";

type props = {
  navigation: NavigationProp<{}>;
};

export default function Home({ navigation }: props): JSX.Element {
  const theme = useTheme();

  const setThemeMutation = useSetThemeMutation();
  const setThemeHandler = (newTheme: TThemeList) => {
    setThemeMutation.mutate(newTheme);
  };
  return (
    <PageContainer navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.title}>Главная страница</Text>
        <Text>Добро пожаловать в приложение!</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: 10,
          }}
        >
          <Text>Тёмная тема</Text>
          <Pressable
            onPress={() =>
              setThemeHandler(theme === "light" ? "dark" : "light")
            }
          >
            <Switch
              value={theme === "dark"}
              trackColor={{
                false: THEME[theme].color.secondary,
                true: THEME[theme].color.secondary,
              }}
              thumbColor={THEME[theme].color.primary}
            />
          </Pressable>
        </View>
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
