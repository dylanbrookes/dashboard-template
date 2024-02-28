import { useQuery } from "@tanstack/react-query";

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return await fetch("/api/v1/user").then((res) => res.json());
    },
  });
}
