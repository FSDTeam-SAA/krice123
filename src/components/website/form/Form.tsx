"use client";

import React, { useState } from "react";
import { useCreateQuotation } from "@/lib/hooks/useQuotation";
import { QuotationFormData } from "@/lib/types/quotation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const Form = () => {
  const { mutate: submitQuotation, isPending } = useCreateQuotation();
  const [formData, setFormData] = useState<QuotationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    spouseFirstName: "",
    spouseLastName: "",
    streetAddress: "",
    streetAddressLine2: "",
    city: "",
    stateOrProvince: "",
    postalOrZipCode: "",
    siteAddressIfDifferent: "",
    isLegalOwner: false,
    isSiteReadyToWorkOn: false,
    workType: [],
    hasBuiltOrRenovatedBefore: false,
    hasSelectedArchitectOrDesigner: false,
    hasAllPropertyInfo: false,
    hasPermitsApproved: false,
    budget: "",
    hasFinancing: false,
    haveSelected: [],
    expectationsExperienceHelp: [],
    desiredStartTime: "",
    preBuildRequirements: "",
    specialRequirements: "",
    hearAboutUs: "",
    buildingConcerns: "",
    planFile: null,
    priorities: {
      communication: 1,
      reliability: 1,
      experience: 1,
      quality: 1,
      cost: 1,
      maintenance: 1,
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (
    name: keyof QuotationFormData,
    checked: boolean,
  ) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleArrayCheckboxChange = (
    name: keyof QuotationFormData,
    value: string,
    checked: boolean,
  ) => {
    setFormData((prev) => {
      const currentArray = prev[name] as string[];
      return {
        ...prev,
        [name]: checked
          ? [...currentArray, value]
          : currentArray.filter((item) => item !== value),
      };
    });
  };

  const handlePriorityChange = (
    key: keyof QuotationFormData["priorities"],
    value: number,
  ) => {
    setFormData((prev) => ({
      ...prev,
      priorities: { ...prev.priorities, [key]: value },
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, planFile: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitQuotation(formData);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-neutral-50">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 1: Personal Information */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Let&apos;s Get To Know You & Your Project
          </h2>
          <p className="text-sm text-neutral-600 mb-6">
            So We Can Help Build Please fill in all required information as
            possible
          </p>

          <div className="space-y-6">
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm font-semibold">
                  Your Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-semibold">
                  <span className="invisible">Last Name</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="First Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phoneNumber" className="text-sm font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your name..."
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="email" className="text-sm font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your name..."
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Spouse Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label
                  htmlFor="spouseFirstName"
                  className="text-sm font-semibold"
                >
                  Spouse Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="spouseFirstName"
                  name="spouseFirstName"
                  placeholder="First Name"
                  value={formData.spouseFirstName}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="spouseLastName"
                  className="text-sm font-semibold"
                >
                  <span className="invisible">Last Name</span>
                </Label>
                <Input
                  id="spouseLastName"
                  name="spouseLastName"
                  placeholder="First Name"
                  value={formData.spouseLastName}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Address Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label
                  htmlFor="streetAddress"
                  className="text-sm font-semibold"
                >
                  Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="streetAddress"
                  name="streetAddress"
                  placeholder="Street Address"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="streetAddressLine2"
                  className="text-sm font-semibold"
                >
                  <span className="invisible">Address Line 2</span>
                </Label>
                <Input
                  id="streetAddressLine2"
                  name="streetAddressLine2"
                  placeholder="Street Address Line 2"
                  value={formData.streetAddressLine2}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Address Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city" className="text-sm font-semibold">
                  <span className="invisible">City</span>
                </Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="stateProvince"
                  className="text-sm font-semibold"
                >
                  <span className="invisible">State/Province</span>
                </Label>
                <Input
                  id="stateOrProvince"
                  name="stateOrProvince"
                  placeholder="State / Province"
                  value={formData.stateOrProvince}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Postal Code */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label
                  htmlFor="postalZipCode"
                  className="text-sm font-semibold"
                >
                  Postal / Zip Code
                </Label>
                <Input
                  id="postalZipCode"
                  name="postalOrZipCode"
                  placeholder="Enter your postal or zip code..."
                  value={formData.postalOrZipCode}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Site Address */}
            <div>
              <Label
                htmlFor="siteAddressIfDifferent"
                className="text-sm font-semibold"
              >
                Site Address (if different)
              </Label>
              <Input
                id="siteAddressIfDifferent"
                name="siteAddressIfDifferent"
                placeholder="Enter your site address..."
                value={formData.siteAddressIfDifferent}
                onChange={handleInputChange}
                className="mt-1 w-full"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Project Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Project Informations</h2>

          <div className="space-y-6">
            {/* Legal Owner */}
            <div>
              <Label className="text-sm font-semibold mb-2 block">
                Are you the legal owner of the section?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="legalOwnerYes"
                    name="isLegalOwner"
                    checked={formData.isLegalOwner === true}
                    onChange={() => handleCheckboxChange("isLegalOwner", true)}
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="legalOwnerYes"
                    className="text-sm cursor-pointer"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="legalOwnerNo"
                    name="isLegalOwner"
                    checked={formData.isLegalOwner === false}
                    onChange={() => handleCheckboxChange("isLegalOwner", false)}
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="legalOwnerNo"
                    className="text-sm cursor-pointer"
                  >
                    No
                  </Label>
                </div>
              </div>
            </div>

            {/* Section Ready to Work */}
            <div>
              <Label className="text-sm font-semibold mb-2 block">
                Is the section ready to work on?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="isSiteReadyToWorkOn"
                    name="isSiteReadyToWorkOn"
                    checked={formData.isSiteReadyToWorkOn === true}
                    onChange={() =>
                      handleCheckboxChange("isSiteReadyToWorkOn", true)
                    }
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="isSiteReadyToWorkOn"
                    className="text-sm cursor-pointer"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="isSiteReadyToWorkOnNo"
                    name="isSiteReadyToWorkOn"
                    checked={formData.isSiteReadyToWorkOn === false}
                    onChange={() =>
                      handleCheckboxChange("isSiteReadyToWorkOn", false)
                    }
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="isSiteReadyToWorkOnNo"
                    className="text-sm cursor-pointer"
                  >
                    No
                  </Label>
                </div>
              </div>
            </div>

            {/* Work Type */}
            <div>
              <Label className="text-sm font-semibold mb-2 block">
                What type of work are you wanting done?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <div className="space-y-2">
                {[
                  "New Home",
                  "Extension / Addition",
                  "Renovation",
                  "Other",
                ].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`workType-${type}`}
                      checked={formData.workType.includes(type)}
                      onCheckedChange={(checked) =>
                        handleArrayCheckboxChange(
                          "workType",
                          type,
                          checked as boolean,
                        )
                      }
                    />
                    <Label
                      htmlFor={`workType-${type}`}
                      className="text-sm cursor-pointer"
                    >
                      {type}
                    </Label>
                  </div>
                ))}
                {formData.workType.includes("Other") && (
                  <Input
                    placeholder="Write Here"
                    className="mt-2"
                    name="workTypeOther"
                  />
                )}
              </div>
            </div>

            {/* Built or Renovated Before */}
            <div>
              <Label className="text-sm font-semibold mb-2 block">
                Have you Built or Renovated Before{" "}
                <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="hasBuiltOrRenovatedBefore"
                    name="hasBuiltOrRenovatedBefore"
                    checked={formData.hasBuiltOrRenovatedBefore === true}
                    onChange={() =>
                      handleCheckboxChange("hasBuiltOrRenovatedBefore", true)
                    }
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="hasBuiltOrRenovatedBefore"
                    className="text-sm cursor-pointer"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="hasBuiltOrRenovatedNo"
                    name="hasBuiltOrRenovatedBefore"
                    checked={formData.hasBuiltOrRenovatedBefore === false}
                    onChange={() =>
                      handleCheckboxChange("hasBuiltOrRenovatedBefore", false)
                    }
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="hasBuiltOrRenovatedNo"
                    className="text-sm cursor-pointer"
                  >
                    No
                  </Label>
                </div>
              </div>
            </div>

            {/* Selected Architect/Designer */}
            <div>
              <Label className="text-sm font-semibold mb-2 block">
                Have you selected Architect/Designer{" "}
                <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="hasSelectedArchitectOrDesigner"
                    name="hasSelectedArchitectOrDesigner"
                    checked={formData.hasSelectedArchitectOrDesigner === true}
                    onChange={() =>
                      handleCheckboxChange("hasSelectedArchitectOrDesigner", true)
                    }
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="hasSelectedArchitectOrDesigner"
                    className="text-sm cursor-pointer"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="architectNo"
                    name="hasSelectedArchitectOrDesigner"
                    checked={formData.hasSelectedArchitectOrDesigner === false}
                    onChange={() =>
                      handleCheckboxChange("hasSelectedArchitectOrDesigner", false)
                    }
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="architectNo"
                    className="text-sm cursor-pointer"
                  >
                    No
                  </Label>
                </div>
              </div>
            </div>

            {/* Property Information */}
            <div>
              <Label className="text-sm font-semibold mb-2 block">
                Do you have all your property information?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="propertyInfoYes"
                    name="hasAllPropertyInfo"
                    checked={formData.hasAllPropertyInfo === true}
                    onChange={() =>
                      handleCheckboxChange("hasAllPropertyInfo", true)
                    }
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="propertyInfoYes"
                    className="text-sm cursor-pointer"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="propertyInfoNo"
                    name="hasAllPropertyInfo"
                    checked={formData.hasAllPropertyInfo === false}
                    onChange={() =>
                      handleCheckboxChange("hasAllPropertyInfo", false)
                    }
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="propertyInfoNo"
                    className="text-sm cursor-pointer"
                  >
                    No
                  </Label>
                </div>
              </div>
            </div>

            {/* Permits Approved */}
            <div>
              <Label className="text-sm font-semibold mb-2 block">
                If required, have permits been approved?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="permitsYes"
                    name="hasPermitsApproved"
                    checked={formData.hasPermitsApproved === true}
                    onChange={() =>
                      handleCheckboxChange("hasPermitsApproved", true)
                    }
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="permitsYes"
                    className="text-sm cursor-pointer"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="permitsNo"
                    name="hasPermitsApproved"
                    checked={formData.hasPermitsApproved === false}
                    onChange={() =>
                      handleCheckboxChange("hasPermitsApproved", false)
                    }
                    className="w-4 h-4"
                  />
                  <Label htmlFor="permitsNo" className="text-sm cursor-pointer">
                    No
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="permitsNotRequired"
                    name="hasPermitsApproved"
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="permitsNotRequired"
                    className="text-sm cursor-pointer"
                  >
                    Not sure if required
                  </Label>
                </div>
              </div>
            </div>

            {/* Budget */}
            <div>
              <Label
                htmlFor="budget"
                className="text-sm font-semibold mb-2 block"
              >
                What is the budget for this project?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="budget"
                name="budget"
                placeholder="0.00"
                value={formData.budget}
                onChange={handleInputChange}
                className="max-w-md"
              />
            </div>

            {/* Financing */}
            <div>
              <Label className="text-sm font-semibold mb-2 block">
                Do you have financing if you please answer follow-up questions{" "}
                <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="financingYes"
                    name="hasFinancing"
                    checked={formData.hasFinancing === true}
                    onChange={() => handleCheckboxChange("hasFinancing", true)}
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="financingYes"
                    className="text-sm cursor-pointer"
                  >
                    Yes-I have financing setup for this project
                  </Label>
                </div>
              </div>
              <div className="flex items-center space-x-6 mt-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="financingWorking"
                    name="hasFinancing"
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="financingWorking"
                    className="text-sm cursor-pointer"
                  >
                    No-I am working on financing
                  </Label>
                </div>
              </div>
              <div className="flex items-center space-x-6 mt-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="financingNoPlan"
                    name="hasFinancing"
                    checked={formData.hasFinancing === false}
                    onChange={() => handleCheckboxChange("hasFinancing", false)}
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="financingNoPlan"
                    className="text-sm cursor-pointer"
                  >
                    No-I am paying cash
                  </Label>
                </div>
              </div>
            </div>

            {/* Selected Items */}
            <div>
              <Label className="text-sm font-semibold mb-2 block">
                Have you selected <span className="text-red-500">*</span>
              </Label>
              <div className="space-y-2">
                {["Colors", "Products & Fittings", "Other"].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <Checkbox
                      id={`selected-${item}`}
                      checked={formData.haveSelected.includes(item)}
                      onCheckedChange={(checked) =>
                        handleArrayCheckboxChange(
                          "haveSelected",
                          item,
                          checked as boolean,
                        )
                      }
                    />
                    <Label
                      htmlFor={`selected-${item}`}
                      className="text-sm cursor-pointer"
                    >
                      {item}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience and Advice */}
            <div>
              <Label className="text-sm font-semibold mb-2 block">
                What can our experience and advice help you with{" "}
                <span className="text-red-500">*</span>
              </Label>
              <div className="space-y-2">
                {[
                  "Electrical layout",
                  "Products & Fittings",
                  "Kitchen Design",
                  "Landscaping",
                  "Products and fittings",
                  "Others",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <Checkbox
                      id={`experience-${item}`}
                      checked={formData.expectationsExperienceHelp.includes(
                        item,
                      )}
                      onCheckedChange={(checked) =>
                        handleArrayCheckboxChange(
                          "expectationsExperienceHelp",
                          item,
                          checked as boolean,
                        )
                      }
                    />
                    <Label
                      htmlFor={`experience-${item}`}
                      className="text-sm cursor-pointer"
                    >
                      {item}
                    </Label>
                  </div>
                ))}
                {formData.expectationsExperienceHelp.includes("Others") && (
                  <Input placeholder="Write Here" className="mt-2" />
                )}
              </div>
            </div>

            {/* How Soon to Start */}
            <div>
              <Label className="text-sm font-semibold mb-2 block">
                How soon would you like to get started?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <div className="space-y-2">
                {[
                  "As soon as possible",
                  "2-4 Months",
                  "4-6 Months",
                  "12+ Months",
                ].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={`timeline-${option}`}
                      checked={formData.desiredStartTime === option}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData((prev) => ({
                            ...prev,
                            desiredStartTime: option,
                          }));
                        }
                      }}
                    />
                    <Label
                      htmlFor={`timeline-${option}`}
                      className="text-sm cursor-pointer"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Construction Help */}
            <div>
              <Label
                htmlFor="preBuildRequirements"
                className="text-sm font-semibold mb-2 block"
              >
                What do you need to happen before building work can start?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="preBuildRequirements"
                name="preBuildRequirements"
                placeholder="Write Here"
                value={formData.preBuildRequirements}
                onChange={handleInputChange}
                rows={4}
                className="w-full"
              />
            </div>

            {/* Special Requirements */}
            <div>
              <Label
                htmlFor="specialRequirements"
                className="text-sm font-semibold mb-2 block"
              >
                Do you have any special requirements for your home?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="specialRequirements"
                name="specialRequirements"
                placeholder="Write Here"
                value={formData.specialRequirements}
                onChange={handleInputChange}
                rows={4}
                className="w-full"
              />
            </div>

            {/* How Did You Hear */}
            <div>
              <Label
                htmlFor="hearAboutUs"
                className="text-sm font-semibold mb-2 block"
              >
                How did you hear about us?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="hearAboutUs"
                name="hearAboutUs"
                placeholder="Write Here"
                value={formData.hearAboutUs}
                onChange={handleInputChange}
                rows={4}
                className="w-full"
              />
            </div>

            {/* Building Concerns */}
            <div>
              <Label
                htmlFor="buildingConcerns"
                className="text-sm font-semibold mb-2 block"
              >
                What are the building concerns of your builder?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="buildingConcerns"
                name="buildingConcerns"
                placeholder="Write Here"
                value={formData.buildingConcerns}
                onChange={handleInputChange}
                rows={4}
                className="w-full"
              />
            </div>

            {/* Upload Plans */}
            <div>
              <Label
                htmlFor="planFile"
                className="text-sm font-semibold mb-2 block"
              >
                Upload any plans or files here
              </Label>
              <div className="border-2 border-dashed border-neutral-300 rounded-lg p-4 text-center">
                <input
                  type="file"
                  id="planFile"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.dwg,.png,.jpg,.jpeg"
                />
                <Label htmlFor="planFile" className="cursor-pointer">
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      className="w-6 h-6 text-neutral-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="text-sm text-neutral-600">
                      Choose file to Drag & Drop
                    </span>
                  </div>
                  {formData.planFile && (
                    <p className="text-sm text-green-600 mt-2">
                      Selected: {formData.planFile.name}
                    </p>
                  )}
                </Label>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Priorities */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Please indicate your priorities (1 being most important, 5 being
            least)
          </h2>

          <div className="space-y-4">
            {(
              [
                { key: "communication", label: "Communication" },
                { key: "reliability", label: "Reliability" },
                { key: "experience", label: "Experience" },
                { key: "quality", label: "Quality" },
                { key: "cost", label: "Cost" },
                {
                  key: "maintenance",
                  label: "60 Day FREE maintenance after completion",
                },
              ] as const
            ).map(({ key, label }) => (
              <div key={key} className="flex items-center justify-between">
                <Label className="text-sm font-semibold flex-1">
                  {label} <span className="text-red-500">*</span>
                </Label>
                <div className="flex items-center space-x-4">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div key={value} className="flex items-center space-x-1">
                      <input
                        type="radio"
                        id={`${key}-${value}`}
                        name={key}
                        checked={formData.priorities[key] === value}
                        onChange={() => handlePriorityChange(key, value)}
                        className="w-4 h-4"
                      />
                      <Label
                        htmlFor={`${key}-${value}`}
                        className="text-sm cursor-pointer"
                      >
                        {value}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <Button
            type="submit"
            disabled={isPending}
            className="bg-[#7FB539] hover:bg-[#6da02f] text-white px-16 py-6 text-lg font-semibold rounded-md"
          >
            {isPending ? "Submitting..." : "Submit Now"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
