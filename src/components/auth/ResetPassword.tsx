"use client";

import { Suspense, useState } from "react";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import useAuth from "@/lib/hooks/useAuth";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

function ResetPasswordForm() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { handleResetPassword, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const handleSave = async () => {
    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in both password fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    const res = await handleResetPassword(newPassword, confirmPassword, token);
    if (res.success) {
      toast.success("Password reset successfully!");
      setTimeout(() => router.push("/login"), 1000);
    } else {
      toast.error(res.message || "Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-10">
        {/* Header */}
        <div className="text-left">
          <h2 className="text-3xl font-semibold text-[#0B3B36] mb-2">
            Reset Password
          </h2>
          <p className="text-[#343A40] mb-6">Create a new password</p>
        </div>

        {/* New Password */}
        <div className="relative mb-5">
          <input
            id="new-password"
            type={showPassword1 ? "text" : "password"}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#0B3B36] transition-colors"
            placeholder="Create New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword1(!showPassword1)}
            className="absolute right-3 top-3 text-gray-500 hover:text-[#0B3B36] transition-colors"
            aria-label={showPassword1 ? "Hide password" : "Show password"}
          >
            {showPassword1 ? (
              <EyeOff size={20} className="cursor-pointer" />
            ) : (
              <Eye size={20} className="cursor-pointer" />
            )}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative mb-6">
          <input
            id="confirm-password"
            type={showPassword2 ? "text" : "password"}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#0B3B36] transition-colors"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword2(!showPassword2)}
            className="absolute right-3 top-3 text-gray-500 hover:text-[#0B3B36] transition-colors"
            aria-label={
              showPassword2 ? "Hide confirm password" : "Show confirm password"
            }
          >
            {showPassword2 ? (
              <EyeOff size={20} className="cursor-pointer" />
            ) : (
              <Eye size={20} className="cursor-pointer" />
            )}
          </button>
        </div>

        {/* Save Button */}
        <Button
          className={`w-full bg-primary text-white py-6 rounded-md text-lg font-medium hover:bg-primary transition flex justify-center items-center gap-2 cursor-pointer ${
            loading ? "cursor-not-allowed opacity-70" : ""
          }`}
          onClick={handleSave}
          disabled={loading}
        >
          {loading && <LoaderCircle className="animate-spin" />}
          {loading ? "Saving..." : "Change Password"}
        </Button>
      </div>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}