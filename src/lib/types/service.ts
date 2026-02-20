export interface Service {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ServicesResponse {
  success: boolean;
  data: Service[];
}
