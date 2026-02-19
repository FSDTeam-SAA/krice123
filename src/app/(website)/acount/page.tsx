"use client";

import React, { useState } from "react";

export default function AccountPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    zip: "",
    address: "",
    about: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-semibold text-[#2a2a2a]">Personal Information</h2>
        <p className="mt-1 text-sm text-[#7a746e]">Enter your personal details and address information</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* First Name & Last Name */}
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">First Name</span>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">Last Name</span>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
          </div>

          {/* Phone & Email */}
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">Phone</span>
              <input
                type="tel"
                name="phone"
                placeholder="(000) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">Email Address</span>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
          </div>

          {/* City & Zip */}
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">City</span>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">Zip/Postal</span>
              <input
                type="text"
                name="zip"
                placeholder="Zip code"
                value={formData.zip}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
          </div>

          {/* Address */}
          <label className="space-y-2">
            <span className="text-sm font-medium text-[#2a2a2a]">Address</span>
            <input
              type="text"
              name="address"
              placeholder="Street address"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
            />
          </label>

          {/* About You */}
          <label className="space-y-2">
            <span className="text-sm font-medium text-[#2a2a2a]">About You</span>
            <textarea
              name="about"
              rows={4}
              placeholder="Tell us about yourself"
              value={formData.about}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#e6e1d8] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
            />
          </label>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-[#6a8f3e] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#5b7c35]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
