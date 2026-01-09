import api from "./axios";

export const login = (data) => api.post("/auth/login", data);
export const register = (data) => api.post("/auth/sign-up", data);
export const getProfile = () => api.get("/auth/my-profile");
export const logout = () => api.post("/auth/logout");
