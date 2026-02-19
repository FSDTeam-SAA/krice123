"use client";

import React, { useState } from "react";

export default function ChangePasswordPage() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Password changed:", formData);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-semibold text-[#2a2a2a]">Change Password</h2>
        <p className="mt-1 text-sm text-[#7a746e]">Update your password to keep your account secure</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Current Password */}
          <label className="space-y-2">
            <span className="text-sm font-medium text-[#2a2a2a]">Current Password</span>
            <div className="relative">
              <input
                type={showPasswords.current ? "text" : "password"}
                name="currentPassword"
                placeholder="Enter current password"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
              <button
                type="button"
                onClick={() =>
                  setShowPasswords((prev) => ({
                    ...prev,
                    current: !prev.current,
                  }))
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#7a746e] hover:text-[#2a2a2a]"
              >
                {showPasswords.current ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          {/* New Password & Confirm Password */}
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">New Password</span>
              <div className="relative">
                <input
                  type={showPasswords.new ? "text" : "password"}
                  name="newPassword"
                  placeholder="Enter new password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPasswords((prev) => ({
                      ...prev,
                      new: !prev.new,
                    }))
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#7a746e] hover:text-[#2a2a2a]"
                >
                  {showPasswords.new ? "Hide" : "Show"}
                </button>
              </div>
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">Confirm Password</span>
              <div className="relative">
                <input
                  type={showPasswords.confirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPasswords((prev) => ({
                      ...prev,
                      confirm: !prev.confirm,
                    }))
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#7a746e] hover:text-[#2a2a2a]"
                >
                  {showPasswords.confirm ? "Hide" : "Show"}
                </button>
              </div>
            </label>
          </div>

          {/* Password Requirements */}
          <div className="rounded-lg bg-[#f9f7f3] p-4">
            <p className="text-sm font-medium text-[#2a2a2a]">Password Requirements:</p>
            <ul className="mt-2 space-y-1 text-xs text-[#7a746e]">
              <li>• At least 8 characters long</li>
              <li>• Contains at least one uppercase letter</li>
              <li>• Contains at least one lowercase letter</li>
              <li>• Contains at least one number</li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-[#6a8f3e] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#5b7c35]"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
