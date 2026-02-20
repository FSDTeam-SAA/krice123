import axios from "axios";

import { getSession } from "next-auth/react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session?.accessToken}`;
    } else {
      console.warn("No token in session");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;


