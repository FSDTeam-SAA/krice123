export interface TeamMember {
  _id: string;
  name: string;
  email: string;
  role: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TeamResponse {
  success: boolean;
  data: TeamMember[];
}
