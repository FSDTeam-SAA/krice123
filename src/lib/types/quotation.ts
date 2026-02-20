export interface QuotationFormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  spouseFirstName: string;
  spouseLastName: string;
  streetAddress: string;
  streetAddressLine2: string;
  city: string;
  stateOrProvince: string;
  postalOrZipCode: string;
  siteAddressIfDifferent: string;

  // Project Information
  isLegalOwner: boolean;
  isSiteReadyToWorkOn: boolean;
  workType: string[];
  hasBuiltOrRenovatedBefore: boolean;
  hasSelectedArchitectOrDesigner: boolean;
  hasAllPropertyInfo: boolean;
  hasPermitsApproved: boolean;
  budget: string;
  hasFinancing: boolean;
  haveSelected: string[];
  expectationsExperienceHelp: string[];
  desiredStartTime: string;
  preBuildRequirements: string;
  specialRequirements: string;
  hearAboutUs: string;
  buildingConcerns: string;
  planFile?: File | null;

  // Priorities (1-5 ranking)
  priorities: {
    communication: number;
    reliability: number;
    experience: number;
    quality: number;
    cost: number;
    maintenance: number;
  };
}

export interface QuotationResponse {
  success: boolean;
  message: string;
  data?: any;
}
