import api from "./api";
import { QuotationFormData, QuotationResponse } from "../types/quotation";

export const createQuotation = async (
  data: QuotationFormData,
): Promise<QuotationResponse> => {
  try {
    // Construct the payload matching the user's requested structure
    const payload = {
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
      isLegalOwner: data.isLegalOwner,
      isSiteReadyToWorkOn: data.isSiteReadyToWorkOn,
      workType: data.workType, // Array
      hasBuiltOrRenovatedBefore: data.hasBuiltOrRenovatedBefore,
      hasSelectedArchitectOrDesigner: data.hasSelectedArchitectOrDesigner,
      hasAllPropertyInfo: data.hasAllPropertyInfo,
      hasPermitsApproved: data.hasPermitsApproved,
      budget: data.budget,
      hasFinancing: data.hasFinancing,
      haveSelected: data.haveSelected, // Array
      expectationsExperienceHelp: data.expectationsExperienceHelp, // Array
      desiredStartTime: data.desiredStartTime,
      preBuildRequirements: data.preBuildRequirements,
      specialRequirements: data.specialRequirements,
      hearAboutUs: data.hearAboutUs,
      buildingConcerns: data.buildingConcerns,
      priorities: {
        communication: data.priorities.communication,
        reliability: data.priorities.reliability,
        experience: data.priorities.experience,
        quality: data.priorities.quality,
        cost: data.priorities.cost,
        maintenance: data.priorities.maintenance,
      }
    };

    let res;
    
    // If there's a file, we MUST use FormData
    if (data.planFile && data.planFile instanceof File) {
      const formData = new FormData();
      
      // Append the metadata as a JSON string in a 'data' field 
      // OR as individual fields if the backend prefers. 
      // Given the "nested JSON object for priorities" requirement in multipart,
      // many backends expect nested fields or stringified JSON.
      // I'll append individual fields but stringify the nested objects/arrays to match the payload reference logic.
      
      Object.entries(payload).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          if (Array.isArray(value) || typeof value === "object") {
            formData.append(key, JSON.stringify(value));
          } else {
            formData.append(key, String(value));
          }
        }
      });
      
      formData.append("planFile", data.planFile);
      
      res = await api.post("/quotations", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } else {
      // If no file, send as clean JSON which naturally supports nesting and arrays
      res = await api.post("/quotations", payload);
    }

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
