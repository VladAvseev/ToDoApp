import { Repository } from "@/src/repository";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCheckTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: Repository.checkToDo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey.includes("todo"),
      });
    },
  });
};
