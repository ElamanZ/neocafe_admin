import { inputClasses } from "@mui/material";
import axios from "axios";

const instanse = axios.create({
  baseURL: "https://neocafe-production.up.railway.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

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
  // headers:{
  //   "Content-Type":'multipart/form-data',
  // },

  try {
    const response = await instanse.post("/api/branch/newBranch");

    return response;
  } catch (error) {
    console.log("Branch adding failed", error);
  }
};
