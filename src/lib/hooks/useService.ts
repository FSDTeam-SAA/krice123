import { useQuery } from "@tanstack/react-query";

import { getService, getServiceById } from "../api/service";

export function useService() {
  return useQuery({
    queryKey: ["services"],
    queryFn: () => getService(),
  });
}

export function useServiceById(id: string) {
  return useQuery({
    queryKey: ["service", id],
    queryFn: () => getServiceById(id),
    enabled: !!id,
  });
}
