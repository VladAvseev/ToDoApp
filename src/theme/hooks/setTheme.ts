import { Repository } from "@/src/repository";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSetThemeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: Repository.theme.setTheme,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey.includes("theme"),
      });
    },
  });
};
