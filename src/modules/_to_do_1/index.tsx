import React, { JSX } from "react";
import { View, Pressable, Switch, StyleSheet, ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { PageContainer } from "../../components/PageContainer";
import { useToDoQuery } from "./api/getToDo";
import { useAddTodoMutation } from "./api/addTodo";
import { generateId } from "@/src/utils/generateId";
import { useDeleteTodoMutation } from "./api/deleteTodo";
import { useCheckTodoMutation } from "./api/checkTodo";
import { THEME, useTheme } from "@/src/theme";
import { Text } from "@/src/components/Text";
import { Button } from "@/src/components/Button";

type props = {
  navigation: NavigationProp<{}>;
};

export default function ToDo1({ navigation }: props): JSX.Element {
  const theme = useTheme();
  const { data } = useToDoQuery();

  const addTodoMutation = useAddTodoMutation();
  const addTodoHandler = () => {
    const todoId = generateId();
    addTodoMutation.mutate({
      id: todoId,
      title: `ToDo (${todoId})`,
      checked: false,
    });
  };

  const deleteToDoMutation = useDeleteTodoMutation();
  const deleteToDoHandler = (id: number) => {
    deleteToDoMutation.mutate(id);
  };

  const checkToDoMutation = useCheckTodoMutation();
  const checkToDoHandler = (id: number, value: boolean) => {
    checkToDoMutation.mutate({ id, value });
  };

  return (
    <PageContainer navigation={navigation}>
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <Text style={styles.title}>Список задач</Text>
      </View>
      <ScrollView>
        {data?.map((item) => (
          <View
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text>{item.title}</Text>
            <Pressable onPress={() => checkToDoHandler(item.id, !item.checked)}>
              <Switch
                value={item.checked}
                trackColor={{
                  false: THEME[theme].color.secondary,
                  true: THEME[theme].color.secondary,
                }}
                thumbColor={THEME[theme].color.primary}
              />
            </Pressable>
            <Pressable onPress={() => deleteToDoHandler(item.id)}>
              <Text>X</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          width: "100%",
          padding: 20,
          zIndex: 1000,
          backgroundColor: THEME[theme].color.background,
        }}
      >
        <Button onPress={addTodoHandler}>Добавить</Button>
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
