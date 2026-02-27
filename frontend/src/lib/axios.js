import axios from "axios";

export const axiosInstance = axios.create({
  // Localhost hata kar seedha live URL likh dein
  baseURL: "https://full-chatting-website.onrender.com/api", 
  withCredentials: true,
});