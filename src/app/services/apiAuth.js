import axios from "axios";
import Cookies from "js-cookie";
import { base } from "./config";

const api = axios.create({
  baseURL: base,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("access_token");
    token          
      ? (config.headers['Authorization'] = `Bearer ${token}`)
      : (window.location.href = "/login");
    return config;
  },
  (error) => {
    window.location.href = "/login";
    return Promise.reject(error);
  }
);

export const getLogoutAPI = () => api.get("logout");
export const getStudentProfileAPI = () => api.get("profile");
export const allUserApi=()=>api.get("users");
export const changePasswordAPI = (data) =>
  api.post("change-password", data);


