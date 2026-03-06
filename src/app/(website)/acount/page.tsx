"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import {
  useGetUserProfile,
  useUpdateUserProfile,
} from "@/lib/hooks/useProfile";
import { toast } from "sonner";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const { data: profileData, isLoading: isProfileLoading } = useGetUserProfile(
    session?.user?.id,
  );
  const { mutate: updateProfile, isPending: isUpdating } =
    useUpdateUserProfile();
  const userProfile = profileData?.data?.data ?? profileData?.data ?? {};

  const [formData, setFormData] = useState({
    firstName: undefined as string | undefined,
    lastName: undefined as string | undefined,
    phoneNumber: undefined as string | undefined,
    email: undefined as string | undefined,
    city: undefined as string | undefined,
    region: undefined as string | undefined,
    homeAddress: undefined as string | undefined,
    companyName: undefined as string | undefined,
    location: undefined as string | undefined,
    selectedRole: undefined as string | undefined,
    role_id: undefined as string | undefined,
    avatar: undefined as string | undefined,
    image: undefined as string | undefined,
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

    if (!session?.user?.id) {
      toast.error("User ID not found");
      return;
    }

    updateProfile(
      {
        userId: session.user.id,
        payload: {
          firstName: formData.firstName ?? userProfile.firstName,
          lastName: formData.lastName ?? userProfile.lastName,
          phoneNumber: formData.phoneNumber ?? userProfile.phoneNumber,
          homeAddress: formData.homeAddress ?? userProfile.homeAddress,
          city: formData.city ?? userProfile.city,
          region: formData.region ?? userProfile.region,
          companyName: formData.companyName ?? userProfile.companyName,
          location: formData.location ?? userProfile.location,
          avatar: formData.avatar ?? userProfile.avatar,
          image: formData.image ?? userProfile.image,
          selectedRole: formData.selectedRole ?? userProfile.selectedRole,
          role_id: formData.role_id ?? userProfile.role_id,
        },
      },
      {
        onSuccess: (result) => {
          if (result.success) {
            toast.success(result.message || "Profile updated successfully");
          } else {
            toast.error(result.message || "Failed to update profile");
          }
        },
        onError: (error) => {
          toast.error("An error occurred while updating profile");
          console.error(error);
        },
      },
    );
  };

  if (status === "loading" || isProfileLoading) {
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
          disabled={isUpdating}
          className="rounded-md bg-[#6a8f3e] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#5b7c35] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isUpdating ? (
            <>
              <svg
                className="w-4 h-4 animate-spin"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Updating...
            </>
          ) : (
            <>
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
            </>
          )}
        </button>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-lg p-8 shadow-sm ">
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
                value={formData.firstName ?? userProfile.firstName ?? ""}
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
                value={formData.lastName ?? userProfile.lastName ?? ""}
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
                value={formData.email ?? userProfile.email ?? ""}
                disabled
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#f7f4ef] px-3 py-2.5 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">
                Phone Number
              </span>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="(000) 000-0000"
                value={formData.phoneNumber ?? userProfile.phoneNumber ?? ""}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#f7f4ef] px-3 py-2.5 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
          </div>

          {/* Home Address & City */}
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">
                Home Address
              </span>
              <input
                type="text"
                name="homeAddress"
                placeholder="Enter home address"
                value={formData.homeAddress ?? userProfile.homeAddress ?? ""}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#f7f4ef] px-3 py-2.5 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">City</span>
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                value={formData.city ?? userProfile.city ?? ""}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#f7f4ef] px-3 py-2.5 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
          </div>

          {/* Region & Location */}
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">Region</span>
              <input
                type="text"
                name="region"
                placeholder="Enter region"
                value={formData.region ?? userProfile.region ?? ""}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#f7f4ef] px-3 py-2.5 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#2a2a2a]">
                Location
              </span>
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                value={formData.location ?? userProfile.location ?? ""}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#e6e1d8] bg-[#f7f4ef] px-3 py-2.5 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
              />
            </label>
          </div>

          {/* Company Name */}
          <label className="space-y-2">
            <span className="text-sm font-medium text-[#2a2a2a]">
              Company Name
            </span>
            <input
              type="text"
              name="companyName"
              placeholder="Enter company name"
              value={formData.companyName ?? userProfile.companyName ?? ""}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#e6e1d8] bg-[#f7f4ef] px-3 py-2.5 text-sm text-[#3a3a3a] outline-none transition-colors focus:border-[#6a8f3e] focus:bg-white"
            />
          </label>
        </form>
      </div>
    </div>
  );
}
