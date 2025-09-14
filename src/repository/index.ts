import { Theme } from "./theme";
import { ToDo } from "./todo";
import { IRepository } from "./types";

export const Repository: IRepository = {
  theme: Theme,
  todo: ToDo,
};
