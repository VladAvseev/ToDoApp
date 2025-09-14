import React, { JSX } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./modules/_home";
import ToDo1 from "./modules/_to_do_1";
import { THEME, useTheme } from "./theme";

const Stack = createNativeStackNavigator();

export const Navigator = (): JSX.Element => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          contentStyle: {
            backgroundColor: THEME[theme].color.background,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ToDo1"
          component={ToDo1}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
