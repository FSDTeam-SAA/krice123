import api from "./api";
import { ServicesResponse, Service } from "../types/service";

export async function getService(): Promise<Service[]> {
  try {
    const res = await api.get<ServicesResponse>("/services");
    return res.data.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

export async function getServiceById(id: string): Promise<Service | null> {
  try {
    const res = await api.get<{ success: boolean; data: Service }>(
      `/services/${id}`,
    );
    return res.data.data;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}
