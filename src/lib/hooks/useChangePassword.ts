"use client";

import { useMutation } from "@tanstack/react-query";
import { changePassword, type ChangePasswordData } from "../api/auth";
import { toast } from "sonner";

export const useChangePassword = () => {
  return useMutation({
    mutationFn: changePassword,
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message || "Password changed successfully");
      } else {
        toast.error(data.message || "Failed to change password");
      }
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.message ||
          "Failed to change password. Please try again.",
      );
    },
  });
};
