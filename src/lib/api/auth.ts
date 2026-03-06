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

export interface UpdateProfilePayload {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  homeAddress?: string;
  city?: string;
  region?: string;
  companyName?: string;
  location?: string;
  avatar?: string;
  image?: string;
  selectedRole?: string;
  role_id?: string;
}

const allowedProfileFields: Array<keyof UpdateProfilePayload> = [
  "firstName",
  "lastName",
  "phoneNumber",
  "homeAddress",
  "city",
  "region",
  "companyName",
  "location",
  "avatar",
  "image",
  "selectedRole",
  "role_id",
];

export interface UserProfileResponse {
  success: boolean;
  message?: string;
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

// ─── Get User Profile by ID ─────────────────────────────────────────────────
export const getUserProfileById = async (
  userId: string,
): Promise<UserProfileResponse> => {
  try {
    const response = await api.get(`/users/${userId}`);
    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    console.error("Get user profile error:", error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Failed to fetch profile. Please try again.",
      data: null,
    };
  }
};

// ─── Update User Profile ────────────────────────────────────────────────────
export const updateUserProfile = async (
  userId: string,
  payload: UpdateProfilePayload,
): Promise<UserProfileResponse> => {
  try {
    const body = allowedProfileFields.reduce<UpdateProfilePayload>(
      (acc, key) => {
        const value = payload[key];
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );

    const response = await api.put(`/users/${userId}`, body);
    return {
      success: true,
      message: response.data?.message || "Profile updated successfully",
      data: response.data,
    };
  } catch (error: any) {
    console.error("Update profile error:", error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Failed to update profile. Please try again.",
      data: null,
    };
  }
};
