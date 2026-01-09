import api from "./axios";

export const getAllBlogs = () => api.get("/blogs");
export const createBlog = (data) => api.post("/blogs", data);
export const getBlogById = (id) => api.get(`/blogs/${id}`);
export const updateBlogById = (id, data) => api.patch(`/blogs/${id}`, data);
export const deleteBlogById = (id) => api.delete(`blogs/${id}`);
