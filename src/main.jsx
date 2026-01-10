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
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blogs", element: <BlogsList /> },
      { path: "blogs/:blog", element: <BlogDetails /> },
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
