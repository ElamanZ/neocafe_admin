import { loginSuccess } from "../redux/slices/UserSlice";
import Cookies from "js-cookie";
import { login } from "./index";

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const data = await login(credentials);
    const token = data;

    Cookies.set("token", token, { expires: 10 });
    dispatch(loginSuccess({ token }));
  } catch (error) {
    console.log("Login failed", error);
  }
};
