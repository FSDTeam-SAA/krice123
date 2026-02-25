/* eslint-disable @typescript-eslint/no-explicit-any */

export interface QuotationFormData {
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
  isLegalOwner: boolean;
  siteAddressIfDifferent: boolean;
  isSiteReadyToWorkOn: boolean;
  workType: string;
  hasBuiltOrRenovatedBefore: boolean;
  hasSelectedArchitectOrDesigner: boolean;
  hasAllPropertyInfo: boolean;
  hasPermitsApproved: boolean;
  budget: string;
  hasFinancing: boolean; // Based on "Yes" value
  haveSelected: boolean;   // Based on "Yes" value
  expectationsExperienceHelp: string;
  desiredStartTime: string;
  preBuildRequirements: string;
  specialRequirements: string;
  hearAboutUs: string;
  expectationsBuilder: string;
  builderExpectations: string;
  "priorities[communication]": number;
  "priorities[reliability]": number;
  "priorities[experience]": number;
  "priorities[quality]": number;
  "priorities[cost]": number;
  wantsFreeMaintenance: number; 
  planFiles: File | null; 
}

export interface QuotationResponse {
  success: boolean;
  message: string;
 
  data?: any;
}
