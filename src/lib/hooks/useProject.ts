import { useQuery } from "@tanstack/react-query";
import { getProjects, getProjectById } from "../api/project";

export function useProject() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects(),
  });
}

export function useProjectById(id: string) {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectById(id),
    enabled: !!id,
  });
}
