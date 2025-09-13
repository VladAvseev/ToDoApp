import React, { JSX } from "react";
import { Text, StyleSheet, View, Button, Pressable } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { PageContainer } from "../../components/PageContainer";
import { useToDoQuery } from "./api/getToDo";
import { useAddTodoMutation } from "./api/addTodo";
import { generateId } from "@/src/utils/generateId";
import { useDeleteTodoMutation } from "./api/deleteTodo";
import { Repository } from "@/src/repository";

type props = {
  navigation: NavigationProp<{}>;
};

export default function ToDo1({ navigation }: props): JSX.Element {
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

  return (
    <PageContainer navigation={navigation}>
      <Text>To Do List 1</Text>
      <Button title="Добавить" onPress={addTodoHandler} />
      {data?.map((item) => (
        <Pressable onPress={() => deleteToDoHandler(item.id)}>
          <View>
            <Text>
              {item.id} {item.title} {item.checked ? "DONE" : "TO DO"}
            </Text>
          </View>
        </Pressable>
      ))}
    </PageContainer>
  );
}

const styles = StyleSheet.create({});
