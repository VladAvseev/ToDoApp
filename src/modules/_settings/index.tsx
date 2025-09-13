import React, { JSX, useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { PageContainer } from "../../components/PageContainer";

type props = {
  navigation: NavigationProp<{}>;
};

interface SettingItem {
  id: string;
  label: string;
  value: boolean;
}

export default function Settings({ navigation }: props): JSX.Element {
  const [settings, setSettings] = useState<SettingItem[]>([
    { id: "1", label: "Уведомления", value: false },
    { id: "2", label: "Темная тема", value: false },
    { id: "3", label: "Автообновление", value: true },
  ]);

  const toggleSwitch = (id: string): void => {
    setSettings((prevSettings) =>
      prevSettings.map((setting) =>
        setting.id === id ? { ...setting, value: !setting.value } : setting
      )
    );
  };

  return (
    <PageContainer navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.title}>Настройки</Text>

        {settings.map((setting) => (
          <View key={setting.id} style={styles.settingItem}>
            <Text style={styles.settingLabel}>{setting.label}</Text>
            <Switch
              value={setting.value}
              onValueChange={() => toggleSwitch(setting.id)}
            />
          </View>
        ))}
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  settingLabel: {
    fontSize: 16,
  },
});
