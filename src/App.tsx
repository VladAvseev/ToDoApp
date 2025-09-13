import React, { JSX } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./modules/_home";
import ToDo1 from "./modules/_to_do_1";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ToDo2 from "./modules/_to_do_2";

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

export const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
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
          <Stack.Screen
            name="ToDo2"
            component={ToDo2}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
