import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Change to your backend URL

export const loginUser = async (email, password) => {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password }, { withCredentials: true });
    return res.data;
};

export const registerUser = async (userData) => {
    const res = await axios.post(`${API_URL}/auth/register`, userData, { withCredentials: true });
    return res.data;
};

export const getUser = async () => {
    const res = await axios.get(`${API_URL}/auth/user`, { withCredentials: true });
    return res.data;
};

export const logoutUser = async () => {
    await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
};
