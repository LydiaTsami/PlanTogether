import axios from "axios";

const currentURL = window.location.href;
const ip = new URL(currentURL).hostname;

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: `http://${ip}:8080/api`, // Set your base URL here
  timeout: 10000, // Optional: set a timeout
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add your custom header
    config.headers.Authorization = `Bearer ${sessionStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  },
);

export default axiosInstance;
