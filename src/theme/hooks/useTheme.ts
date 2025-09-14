import { Repository } from "@/src/repository";
import { useQuery } from "@tanstack/react-query";

const useThemeQuery = () => {
  return useQuery({
    queryKey: ["theme"],
    queryFn: Repository.theme.getTheme,
    staleTime: 1000 * 60 * 5,
  });
};

export const useTheme = () => {
  const { data = "light" } = useThemeQuery();
  return data;
};
