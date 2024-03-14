import { inputClasses } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";

const instanse = axios.create({
  baseURL: "https://neocafe-production.up.railway.app/",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

instanse.interceptors.request.use(
  function (config) {
    const token = Cookies.get("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const login = async (data) => {
  try {
    const response = await instanse.post("/api/admin/auth", data);
    console.log("Logged in", response);
    return response.data;
  } catch (error) {
    console.log("Login failed");
    throw error;
  }
};

export const newBranch = async (branchData) => {
  try {
    const response = await instanse.post("/api/branch/newBranch", branchData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getBranch = async (id) => {
  try {
    const response = await instanse.get("/api/branch/{id}", id);

    return response;
  } catch (error) {
    console.log("Could not get branches", error);
    throw error;
  }
};

// add new category

export const addNewCategory = async (data) => {
  try {
    const response = await instanse.post("/api/category/create", data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
