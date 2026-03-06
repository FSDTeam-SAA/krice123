export interface UpdateProfilePayload {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  homeAddress?: string;
  city?: string;
  region?: string;
  companyName?: string;
  location?: string;
  avatar?: string;
  image?: string;
  selectedRole?: string;
  role_id?: string;
}

export interface UserProfile extends UpdateProfilePayload {
  id: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProfileResponse {
  success: boolean;
  message?: string;
  data?: UserProfile;
  error?: string;
}
