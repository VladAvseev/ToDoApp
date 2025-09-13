import React, { JSX } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { PageContainer } from "../../components/PageContainer";

type props = {
  navigation: NavigationProp<{}>;
};

export default function Profile({ navigation }: props): JSX.Element {
  return (
    <PageContainer navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.title}>Профиль пользователя</Text>
        <Text>Здесь будет информация о пользователе</Text>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
