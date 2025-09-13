import React, { JSX } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { PageContainer } from "../../components/PageContainer";

type props = {
  navigation: NavigationProp<{}>;
};

export default function Home({ navigation }: props): JSX.Element {
  return (
    <PageContainer navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.title}>Главная страница</Text>
        <Text>Добро пожаловать в приложение!</Text>
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
