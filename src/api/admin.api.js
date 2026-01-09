import api from "./axios";

export const getAuthors = () => api.get("/authors");
export const getAuthorById = (id) => api.get(`/authors/${id}`);
export const updateAuthorById = (id, data) => api.patch(`/authors/${id}`, data);
export const deleteAuthorById = (id) => api.delete(`/authors/${id}`);
