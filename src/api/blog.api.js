import api from "./axios";

export const getAllBlogsApi = () => api.get("/blogs");
export const createBlogApi = (data) => api.post("/blogs", data);
export const getBlogByIdApi = (id) => api.get(`/blogs/${id}`);
export const updateBlogByIdApi = ({id, data}) => api.patch(`/blogs/${id}`, data);
export const deleteBlogByIdApi = (id) => api.delete(`blogs/${id}`);
