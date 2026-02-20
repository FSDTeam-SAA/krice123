import api from "./api";
import { TeamResponse, TeamMember } from "../types/team";

export async function getTeam(): Promise<TeamMember[]> {
  try {
    const res = await api.get<TeamResponse>("/members");
    return res.data.data;
  } catch (error) {
    console.error("Error fetching team:", error);
    return [];
  }
}
