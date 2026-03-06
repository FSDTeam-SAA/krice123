import api from "@/lib/api/api";
import type { UpdateProfilePayload } from "@/lib/types/profile";

export const userApi = {
  // Update user profile
  updateUser: async (userId: string, data: UpdateProfilePayload) => {
    const response = await api.put(`/users/${userId}`, data);
    return response.data;
  },

  // Get user profile
  getUserProfile: async (userId: string) => {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  },

  // Get all users (admin)
  getAllUsers: async () => {
    const response = await api.get("/users");
    return response.data;
  },

  // Delete user (admin)
  deleteUser: async (userId: string) => {
    const response = await api.delete(`/users/${userId}`);
    return response.data;
  },
};
