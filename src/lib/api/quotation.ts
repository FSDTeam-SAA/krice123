import api from "./api";
import { QuotationFormData, QuotationResponse } from "../types/quotation";

export const createQuotation = async (
  data: QuotationFormData,
): Promise<QuotationResponse> => {
  try {
    const formData = new FormData();

    // Define the exact fields the backend expects
    const fieldMapping = {
      // Personal Information
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      spouseFirstName: data.spouseFirstName,
      spouseLastName: data.spouseLastName,
      streetAddress: data.streetAddress,
      streetAddressLine2: data.streetAddressLine2,
      city: data.city,
      stateOrProvince: data.stateOrProvince,
      postalOrZipCode: data.postalOrZipCode,
      siteAddressIfDifferent: data.siteAddressIfDifferent,

      // Project Information
      isLegalOwner: data.isLegalOwner,
      isSiteReadyToWorkOn: data.isSiteReadyToWorkOn,
      hasBuiltOrRenovatedBefore: data.hasBuiltOrRenovatedBefore,
      hasSelectedArchitectOrDesigner: data.hasSelectedArchitectOrDesigner,
      hasAllPropertyInfo: data.hasAllPropertyInfo,
      hasPermitsApproved: data.hasPermitsApproved,
      budget: data.budget,
      hasFinancing: data.hasFinancing,
      specialRequirements: data.specialRequirements,
      buildingConcerns: data.buildingConcerns,

      // Arrays - will be stringified
      workType: data.workType,
      haveSelected: data.haveSelected,
      expectationsExperienceHelp: data.expectationsExperienceHelp,

      // Text fields
      desiredStartTime: data.desiredStartTime,
      preBuildRequirements: data.preBuildRequirements,
      hearAboutUs: data.hearAboutUs,

      // Object - will be stringified
      priorities: data.priorities,
    };

    // Append fields to FormData
    Object.entries(fieldMapping).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        if (Array.isArray(value)) {
          // Stringify arrays
          formData.append(key, JSON.stringify(value));
        } else if (typeof value === "object") {
          // Stringify objects (priorities)
          formData.append(key, JSON.stringify(value));
        } else {
          // Append primitive values as strings
          formData.append(key, String(value));
        }
      }
    });

    // Handle file upload separately
    if (data.planFile && data.planFile instanceof File) {
      formData.append("planFile", data.planFile);
    }

    const res = await api.post("/quotations", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return {
      success: true,
      message: "Quotation submitted successfully",
      data: res.data,
    };
  } catch (error: any) {
    console.error("Error creating quotation:", error);
    return {
      success: false,
      message: error.response?.data?.message || "Failed to submit quotation",
    };
  }
};
