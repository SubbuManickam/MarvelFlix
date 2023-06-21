import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthAction";
import { toast } from "react-toastify";

export const login = async (user, dispatch) => {
    const apiBaseUrl = 'https://marvel-flix-backend.vercel.app/api';
    dispatch(loginStart());
    try {
        const res = await axios.post(`${apiBaseUrl}/auth/login`, user);
        const token = res.data;
        localStorage.setItem(("user"), JSON.stringify(token));
        await dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
        toast.error("Login Failed! Enter valid credentials!");
    }
};