import { Repository } from "@/src/repository";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: Repository.todo.deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey.includes("todo"),
      });
    },
  });
};
