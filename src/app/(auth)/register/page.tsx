"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate form
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill all required fields");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      setLoading(false);
      return;
    }

    if (!formData.agreeToTerms) {
      alert("Please agree to the terms & conditions");
      setLoading(false);
      return;
    }

    // Simulate API call
    console.log("Form submitted:", formData);
    setTimeout(() => {
      setLoading(false);
      alert("Account created successfully!");
    }, 1000);
  };

  return (
    <div className="w-full space-y-6 bg-white rounded-2xl shadow-xl px-8 py-10">
      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src="/images/logo.svg"
          alt="Klondike Construction"
          width={150}
          height={50}
          className="h-auto w-auto"
        />
      </div>

      {/* Header */}
      <div className="text-center">
        <p className="text-sm text-[#7a746e]">Welcome to Wellness Made Clear</p>
        <h1 className="text-3xl font-bold text-[#2a2a2a] md:text-4xl">
          Create an account
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <label className="block">
          <span className="text-sm font-semibold text-[#2a2a2a]">
            First Name <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your name..."
            value={formData.firstName}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
          />
        </label>

        {/* Last Name */}
        <label className="block">
          <span className="text-sm font-semibold text-[#2a2a2a]">
            Last Name <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your name..."
            value={formData.lastName}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
          />
        </label>

        {/* Email */}
        <label className="block">
          <span className="text-sm font-semibold text-[#2a2a2a]">
            Email <span className="text-red-500">*</span>
          </span>
          <input
            type="email"
            name="email"
            placeholder="Enter your mail address..."
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
          />
        </label>

        {/* Password */}
        <label className="block">
          <span className="text-sm font-semibold text-[#2a2a2a]">
            Password <span className="text-red-500">*</span>
          </span>
          <div className="relative mt-2">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password..."
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a746e] hover:text-[#2a2a2a]"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </label>

        {/* Confirm Password */}
        <label className="block">
          <span className="text-sm font-semibold text-[#2a2a2a]">
            Confirm Password <span className="text-red-500">*</span>
          </span>
          <div className="relative mt-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Enter password..."
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a746e] hover:text-[#2a2a2a]"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </label>

        {/* Terms & Conditions */}
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="h-5 w-5 cursor-pointer rounded border-[#e6e1d8] bg-[#fbfaf8] accent-[#6a8f3e]"
          />
          <span className="text-sm text-[#2a2a2a]">
            I agree to the{" "}
            <Link
              href="#"
              className="font-semibold text-[#6a8f3e] hover:underline"
            >
              terms & conditions
            </Link>
          </span>
        </label>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-[#6a8f3e] py-2 text-white hover:bg-[#5b7c35] disabled:bg-[#a0b86b]"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>

      {/* Login Link */}
      <div className="text-center">
        <p className="text-sm text-[#7a746e]">
          Don't have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#6a8f3e] hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
