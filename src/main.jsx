import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import BlogDetails from "./pages/BlogDetails";
import AuthLayout from "./components/layout/AuthLayout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Private/Dashboard";
import CreateBlog from "./pages/Private/CreateBlog";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/dashboard/ProtectedRoute";
import { Toaster } from "sonner";
import CreateBlogForm from "./components/dashboard/CreateBlogForm";
import EditBlogForm from "./components/dashboard/EditBlogForm";
import Blogs from "./pages/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blogs/:blog", element: <BlogDetails /> },
      { path: "test", element: <CreateBlogForm /> }, //to remove
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "create",
        element: (
          <ProtectedRoute>
            <CreateBlog />
          </ProtectedRoute>
        ),
      },
      {
        path: "edit/:id",
        element: (
          <ProtectedRoute>
            <EditBlogForm />
          </ProtectedRoute>
        ),
      },
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
    <AuthProvider>
      <Toaster richColors position="top-right" />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
