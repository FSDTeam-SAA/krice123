"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";

export default function AccountPage() {
  const { data: session, status } = useSession();

  const [formData, setFormData] = useState({
    firstName: session?.user?.firstName || "",
    lastName: session?.user?.lastName || "",
    phone: "",
    email: session?.user?.email || "",
    city: "",
    zip: "",
    address: "",
    about: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Add API call to update user profile
  };

  if (status === "loading") {
    return (
      <div className="bg-[#e8e3db] min-h-full p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="h-9 w-32 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-10 w-24 bg-gray-300 rounded animate-pulse"></div>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-sm max-w-4xl">
          <div className="animate-pulse space-y-5">
            <div className="h-6 w-48 bg-gray-200 rounded"></div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#e8e3db] min-h-full p-8">
      {/* Header with Title and Button */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold text-[#2a2a2a]">Accounts</h1>
        <button
          type="submit"
          form="profile-form"
          className="rounded-md bg-[#6a8f3e] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#5b7c35] flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Update
        </button>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-lg p-8 shadow-sm max-w-4xl">
        <h2 className="text-xl font-semibold text-[#2a2a2a] mb-6">
          Personal Information
        </h2>

        <form id="profile-form" onSubmit={handleSubmit} className="space-y-5">
          {/* First Name & Last Name */}
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">
                First Name
              </span>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#f7f4ef] px-3 py-2.5 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">
                Last Name
              </span>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#f7f4ef] px-3 py-2.5 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
          </div>

          {/* Email & Phone */}
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">
                Email Address
              </span>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#f7f4ef] px-3 py-2.5 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">Phone</span>
              <input
                type="tel"
                name="phone"
                placeholder="(000) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#f7f4ef] px-3 py-2.5 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
          </div>

          {/* Country & City/State */}
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">
                Country
              </span>
              <input
                type="text"
                name="city"
                placeholder="Country"
                value={formData.city}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#f7f4ef] px-3 py-2.5 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">
                City/State
              </span>
              <input
                type="text"
                name="address"
                placeholder="City/State"
                value={formData.address}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#f7f4ef] px-3 py-2.5 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
          </div>

          {/* Road/Area */}
          <label className="space-y-2">
            <span className="text-sm font-medium text-[#2a2a2a]">
              Road/Area
            </span>
            <input
              type="text"
              name="about"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              value={formData.about}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#e6e1d8] bg-[#f7f4ef] px-3 py-2.5 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
            />
          </label>

          {/* Postal Code */}
          <label className="space-y-2">
            <span className="text-sm font-medium text-[#2a2a2a]">
              Postal Code
            </span>
            <input
              type="text"
              name="zip"
              placeholder="Postal code"
              value={formData.zip}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#e6e1d8] bg-[#f7f4ef] px-3 py-2.5 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
            />
          </label>
        </form>
      </div>
    </div>
  );
}
