import { useQuery } from "@tanstack/react-query";
import { allUserApi } from "./apiAuth";

export function useAllUserQuery() {
    return useQuery({
      queryKey:"users",
      queryFn:async()=>await allUserApi(),
      refetchOnMount: false,
    });
  }