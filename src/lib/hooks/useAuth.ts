"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

interface AuthResponse {
  success: boolean;
  message?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

export default function useAuth() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  // ─── Forgot Password ────────────────────────────────────────────────────────
  const handleForgotPassword = async (email: string): Promise<AuthResponse> => {
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await res.json();
      return {
        success: res.ok && (result.success ?? true),
        message: result.message,
        data: result,
      };
    } catch (err) {
      console.error("Forgot password error:", err);
      return { success: false, message: "Something went wrong. Please try again." };
    } finally {
      setLoading(false);
    }
  };

  // ─── Verify OTP ─────────────────────────────────────────────────────────────
  const handleVerifyOtp = async (otp: string): Promise<AuthResponse> => {
    setLoading(true);
    // Token may be passed via URL query param from the forgot-password step
    const token = searchParams.get("token") || "";
    try {
      const res = await fetch(`${baseUrl}/auth/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ otp }),
      });
      const result = await res.json();
      return {
        success: res.ok && (result.success ?? true),
        message: result.message,
        data: result,
      };
    } catch (err) {
      console.error("Verify OTP error:", err);
      return { success: false, message: "Something went wrong. Please try again." };
    } finally {
      setLoading(false);
    }
  };

  // ─── Resend OTP ─────────────────────────────────────────────────────────────
  const handleResendOtp = async (): Promise<AuthResponse> => {
    setLoading(true);
    const token = searchParams.get("token") || "";
    try {
      const res = await fetch(`${baseUrl}/auth/resend-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      const result = await res.json();
      return {
        success: res.ok && (result.success ?? true),
        message: result.message,
        data: result,
      };
    } catch (err) {
      console.error("Resend OTP error:", err);
      return { success: false, message: "Something went wrong. Please try again." };
    } finally {
      setLoading(false);
    }
  };

  // ─── Reset Password ──────────────────────────────────────────────────────────
  const handleResetPassword = async (
    newPassword: string,
    confirmPassword: string,
    token: string
  ): Promise<AuthResponse> => {
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ newPassword, confirmPassword }),
      });
      const result = await res.json();
      return {
        success: res.ok && (result.success ?? true),
        message: result.message,
        data: result,
      };
    } catch (err) {
      console.error("Reset password error:", err);
      return { success: false, message: "Something went wrong. Please try again." };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleForgotPassword,
    handleVerifyOtp,
    handleResendOtp,
    handleResetPassword,
  };
}
