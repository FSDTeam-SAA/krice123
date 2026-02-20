import api from "./api";
import { ProjectsResponse, Project } from "../types/project";

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await api.get<ProjectsResponse>("/past-projects");
    return res.data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const res = await api.get<{ success: boolean; data: Project }>(
      `/past-projects/${id}`,
    );
    return res.data.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}
