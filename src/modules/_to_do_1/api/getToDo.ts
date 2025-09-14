import { Repository } from "@/src/repository";
import { useQuery } from "@tanstack/react-query";

export const useToDoQuery = () => {
  return useQuery({
    queryKey: ["todo"],
    queryFn: Repository.todo.getToDo,
    staleTime: 1000 * 60 * 5,
  });
};
