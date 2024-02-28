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
