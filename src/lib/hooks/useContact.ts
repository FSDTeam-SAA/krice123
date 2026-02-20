import { useMutation } from "@tanstack/react-query";
import { createContact } from "../api/contact";
import { ContactFormData } from "../types/contact";
import { toast } from "sonner";

export function useCreateContact() {
  return useMutation({
    mutationFn: (data: ContactFormData) => createContact(data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message || "Message sent successfully!");
      } else {
        toast.error(response.message || "Failed to send message");
      }
    },
    onError: (error) => {
      toast.error(
        error.message || "An error occurred while sending your message",
      );
    },
  });
}
