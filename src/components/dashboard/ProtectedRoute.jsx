import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import CustomSpinner from "../common/CustomSpinner";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <CustomSpinner className={"h-[90vh]"} />;

  if (!isAuthenticated) return <Navigate to={"/auth/login"} replace />;

  return children;
};

export default ProtectedRoute;
