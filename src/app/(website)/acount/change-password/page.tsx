"use client";

import React, { useState } from "react";
import { useChangePassword } from "@/lib/hooks/useChangePassword";
import { Eye, EyeOff } from "lucide-react";

export default function ChangePasswordPage() {
  const { mutate: changePassword, isPending } = useChangePassword();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [errors, setErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
    let isValid = true;

    if (!formData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
      isValid = false;
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
      isValid = false;
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 8 characters";
      isValid = false;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    changePassword(
      {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      },
      {
        onSuccess: (data) => {
          if (data.success) {
            setFormData({
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            });
          }
        },
      },
    );
  };

  return (
    <div className="bg-[#e8e3db] min-h-full p-8">
      {/* Header with Title and Button */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold text-[#2a2a2a]">Accounts</h1>
        <button
          type="submit"
          form="password-form"
          disabled={isPending}
          className="rounded-md bg-[#6a8f3e] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#5b7c35] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Saving..." : "Save"}
        </button>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-lg p-8 shadow-sm max-w-4xl">
        <h2 className="text-xl font-semibold text-[#2a2a2a] mb-6">
          Change password
        </h2>

        <form id="password-form" onSubmit={handleSubmit} className="space-y-5">
          {/* Current Password */}
          <label className="space-y-2">
            <span className="text-sm font-medium text-[#2a2a2a]">
              Current Password
            </span>
            <div className="relative">
              <input
                type={showPasswords.current ? "text" : "password"}
                name="currentPassword"
                placeholder="#############"
                value={formData.currentPassword}
                onChange={handleChange}
                disabled={isPending}
                className={`w-full rounded-lg border ${errors.currentPassword ? "border-red-500" : "border-[#e6e1d8]"} bg-[#f7f4ef] px-3 py-2.5 pr-10 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white disabled:opacity-50`}
              />
              <button
                type="button"
                onClick={() =>
                  setShowPasswords((prev) => ({
                    ...prev,
                    current: !prev.current,
                  }))
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a746e] hover:text-[#2a2a2a]"
              >
                {showPasswords.current ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.currentPassword && (
              <p className="text-xs text-red-500">{errors.currentPassword}</p>
            )}
          </label>

          {/* New Password & Confirm Password */}
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">
                New Password
              </span>
              <div className="relative">
                <input
                  type={showPasswords.new ? "text" : "password"}
                  name="newPassword"
                  placeholder="#############"
                  value={formData.newPassword}
                  onChange={handleChange}
                  disabled={isPending}
                  className={`w-full rounded-lg border ${errors.newPassword ? "border-red-500" : "border-[#e6e1d8]"} bg-[#f7f4ef] px-3 py-2.5 pr-10 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white disabled:opacity-50`}
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPasswords((prev) => ({
                      ...prev,
                      new: !prev.new,
                    }))
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a746e] hover:text-[#2a2a2a]"
                >
                  {showPasswords.new ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.newPassword && (
                <p className="text-xs text-red-500">{errors.newPassword}</p>
              )}
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">
                Confirm New Password
              </span>
              <div className="relative">
                <input
                  type={showPasswords.confirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="#############"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  disabled={isPending}
                  className={`w-full rounded-lg border ${errors.confirmPassword ? "border-red-500" : "border-[#e6e1d8]"} bg-[#f7f4ef] px-3 py-2.5 pr-10 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white disabled:opacity-50`}
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPasswords((prev) => ({
                      ...prev,
                      confirm: !prev.confirm,
                    }))
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a746e] hover:text-[#2a2a2a]"
                >
                  {showPasswords.confirm ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-red-500">{errors.confirmPassword}</p>
              )}
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
