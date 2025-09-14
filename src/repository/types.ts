import { Theme } from "./theme";
import { ToDo } from "./todo";

export interface IRepository {
  theme: typeof Theme;
  todo: typeof ToDo;
}
