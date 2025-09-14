import AsyncStorage from "@react-native-async-storage/async-storage";

export interface IToDo {
  id: number;
  title: string;
  checked: boolean;
}

export const ToDo = {
  async getToDo(): Promise<IToDo[]> {
    console.log("TEST REP: getToDo");
    const res = await AsyncStorage.getItem("todo");
    return res ? (JSON.parse(res) as IToDo[]) : [];
  },

  async setToDo(todo: IToDo[]): Promise<void> {
    console.log("TEST REP: setToDo");
    AsyncStorage.setItem("todo", JSON.stringify(todo));
  },

  async addToDo(todo: IToDo): Promise<void> {
    console.log("TEST REP: addToDo");
    const todos = await ToDo.getToDo();
    ToDo.setToDo([...todos, todo]);
  },

  async deleteTodo(id: number): Promise<void> {
    console.log("TEST REP: deleteToDo");
    const todos = await ToDo.getToDo();
    ToDo.setToDo(todos.filter((todo) => todo.id !== id));
  },

  async checkToDo({
    id,
    value,
  }: {
    id: number;
    value?: boolean;
  }): Promise<void> {
    console.log("TEST REP: checkToDo");
    const todos = await ToDo.getToDo();
    ToDo.setToDo(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: value !== undefined ? value : !todo.checked,
          };
        } else {
          return todo;
        }
      })
    );
  },
};
