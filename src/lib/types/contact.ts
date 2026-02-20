export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  address?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: any;
}
