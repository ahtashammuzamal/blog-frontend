import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import BlogsList from "./pages/BlogsList";
import BlogDetails from "./pages/BlogDetails";
import AuthLayout from "./pages/AuthLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Private/Dashboard";
import CreateBlog from "./pages/Private/CreateBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blogs", element: <BlogsList /> },
      { path: "blogs/:blog", element: <BlogDetails /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "create", element: <CreateBlog /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
