import axios from "axios";
import { base } from "./config";




const api = axios.create({
  baseURL: base,
  headers: {
    "Content-Type": "application/json",
  },
});


export const postLoginUserAPI = (data) => api.post("login", data);
