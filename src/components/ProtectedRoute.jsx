import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!isAuthenticated) return <Navigate to={"/auth/login"} replace />;

  return children;
};

export default ProtectedRoute;
