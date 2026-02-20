
import { useMutation } from "@tanstack/react-query";
import { createQuotation } from "../api/quotation";
import { QuotationFormData } from "../types/quotation";
import { toast } from "sonner";

export function useCreateQuotation() {
  return useMutation({
    mutationFn: (data: QuotationFormData) => createQuotation(data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message || "Quotation submitted successfully!");
      } else {
        toast.error(response.message || "Failed to submit quotation");
      }
    },
    onError: (error: any) => {
      toast.error(
        error.message || "An error occurred while submitting the quotation",
      );
    },
  });
}
