export interface Project {
  _id: string;
  title: string;
  description: string;
  pastImage: string;
  remodelImage: string;
  thumbnailImage: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProjectsResponse {
  success: boolean;
  data: Project[];
}
