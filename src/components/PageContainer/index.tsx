import { NavigationProp } from "@react-navigation/native";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Tabs } from "../Tabs";
import { Tab } from "../Tabs/Tab";
import { Text } from "../Text";

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
          <Text>Home</Text>
        </Tab>
        <Tab navigation={navigation} route="ToDo1">
          <Text>ToDo1</Text>
        </Tab>
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingBottom: 60,
  },
});
