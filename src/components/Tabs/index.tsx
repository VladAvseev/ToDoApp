import { PlatformColor, StyleSheet, View } from "react-native";
import { ReactNode } from "react";

type props = {
  children?: ReactNode;
};

export const Tabs: React.FC<props> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1000,
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "rgb(33, 150, 243)",
  },
  tabs: {
    width: "100%",
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
