import { NavigationProp } from "@react-navigation/native";
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "../Tabs";
import { Tab } from "../Tabs/Tab";
import { THEME, useTheme } from "@/src/theme";

type props = {
  navigation: NavigationProp<{}>;
  children?: ReactNode;
};

export const PageContainer = ({ navigation, children }: props) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      {children}
      <Tabs>
        <Tab navigation={navigation} route="Home">
          <Text style={{ color: THEME[theme].color.text }}>Home</Text>
        </Tab>
        <Tab navigation={navigation} route="ToDo1">
          <Text style={{ color: THEME[theme].color.text }}>ToDo1</Text>
        </Tab>
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
});
