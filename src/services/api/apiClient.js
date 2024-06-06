import axios from "axios";
import { API_BASE_URL } from "@config/apiConfig";
import { constantToken } from "@constants/constantToken";
import { store } from "app/store";
import { logout } from "app/reducers/user/userSlice";

const axiosInstance = axios.create({
     baseURL: `${API_BASE_URL}/api`,
     headers: {
          "Content-Type": "application/json",
     },
});

axiosInstance.interceptors.response.use(
     (config) => { 
          return config;  
     },
     (error) => {
          const { response: { status } } = error;
          if (status === 401) {
               store.dispatch(logout()); 
          }
          return Promise.reject(error); 
     }
);

axiosInstance.interceptors.request.use(
     (config) => {
          const token = localStorage.getItem(constantToken);
          if (token) {
               config.headers.Authorization = "Bearer " + token;
          }
          return config;
     },
     (error) => {
          return Promise.reject(error);
     }
);

// Function for making GET requests
export const getData = async (endpoint) => {
     try {
          const response = await axiosInstance.get(endpoint);
          return response.data;
     } catch (error) {
          throw Error(error.response?.data?.message || "An error occurred");
     }
};

// Function for making POST requests
export const postData = async (endpoint, data) => {
     try {
          const response = await axiosInstance.post(endpoint, data);
          return response.data;
     } catch (error) {
          throw Error(error.response?.data?.message || "An error occurred");
     }
};

// Function for making Update requests
export const updateData = async (endpoint, data) => {
     try {
          const response = await axiosInstance.put(endpoint, data);
          return response.data;
     } catch (error) {
          return error;
     }
};

// Function for making Delete requests
export const deleteData = async (endpoint) => {
     try {
          const response = await axiosInstance.delete(endpoint);
          return response;
     } catch (error) {
          return error;
     }
};
