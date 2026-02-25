import api from "./api";
import { QuotationFormData, QuotationResponse } from "../types/quotation";

export const createQuotation = async (
  data: QuotationFormData,
): Promise<QuotationResponse> => {
  try {
    let res;
    
    // Check if there is a file to determine if we use FormData
    if (data.planFiles && data.planFiles instanceof File) {
      const formData = new FormData();
      
      // Append all fields to FormData
      Object.entries(data).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          if (value instanceof File) {
            formData.append(key, value);
          } else if (typeof value === "boolean") {
            formData.append(key, value ? "true" : "false");
          } else {
            formData.append(key, String(value));
          }
        }
      });
      
      res = await api.post("/quotations", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } else {
      // If no file, send as clean JSON
      const { planFiles, ...jsonData } = data;
      res = await api.post("/quotations", jsonData);
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
