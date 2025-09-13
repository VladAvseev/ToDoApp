import { NavigationProp } from "@react-navigation/native";
import { ReactNode } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Tabs } from "../Tabs";
import { Tab } from "../Tabs/Tab";

type props = {
  navigation: NavigationProp<{}>;
  children: ReactNode;
};

export const PageContainer = ({ navigation, children }: props) => {
  return (
    <View style={styles.container}>
      {children}
      <Tabs>
        <Tab navigation={navigation} route="Home">
          <View>Home</View>
        </Tab>
        <Tab navigation={navigation} route="Profile">
          <View>Profile</View>
        </Tab>
        <Tab navigation={navigation} route="Settings">
          <View>Settings</View>
        </Tab>
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
