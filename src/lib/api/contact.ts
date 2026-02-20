import { ContactFormData, ContactResponse } from "../types/contact";
import api from "./api";

export const createContact = async (
  data: ContactFormData,
): Promise<ContactResponse> => {
  try {
    const res = await api.post("/contact-us", data);

    return {
      success: true,
      message: "Message sent successfully",
      data: res.data,
    };
  } catch (error) {
    console.error("Error sending contact message:", error);

      return {
        success: false,
        message: error instanceof Error ? error.message : "Failed to send message",
      };
    
    
   
  }
};
