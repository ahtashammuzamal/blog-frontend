import api from "./axios";

export const loginApi = (data) => api.post("/auth/login", data);
export const registerApi = (data) => api.post("/auth/sign-up", data);
export const getProfileApi = () => api.get("/auth/my-profile");
export const logoutApi = () => api.post("/auth/logout");
