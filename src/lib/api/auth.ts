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
