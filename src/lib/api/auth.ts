/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

export interface ChangePasswordResponse {
  success: boolean;
  message: string;
}

export const registerUser = async (
  data: RegisterData,
): Promise<RegisterResponse> => {
  try {
    const response = await api.post("/auth/register", data);

    return {
      success: true,
      message: response.data.message || "Registration successful",
      data: response.data,
    };
  } catch (error: any) {
    console.error("Registration error:", error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Registration failed. Please try again.",
    };
  }
};

export const changePassword = async (
  data: ChangePasswordData,
): Promise<ChangePasswordResponse> => {
  try {
    const response = await api.post("/auth/change-password", data);

    return {
      success: true,
      message: response.data.message || "Password changed successfully",
    };
  } catch (error: any) {
    console.error("Change password error:", error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Failed to change password. Please try again.",
    };
  }
};

export const getUserProfile = async (): Promise<any> => {
  try {
    const response = await api.get("/auth/profile");
    return response.data;
  } catch (error: any) {
    console.error("Get profile error:", error);
    throw error;
  }
};
