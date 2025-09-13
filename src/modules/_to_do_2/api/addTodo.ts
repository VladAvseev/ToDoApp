import { Repository } from "@/src/repository";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: Repository.addToDo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey.includes("todo"),
      });
    },
  });
};
