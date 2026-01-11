import { createContext, useContext, useEffect, useState } from "react";
import {
  getProfileApi,
  loginApi,
  logoutApi,
  registerApi,
} from "@/api/auth.api";
import { getToken, removeToken, setToken } from "@/lib/token";
import { queryClient } from "@/lib/react-query";
import { toast } from "sonner";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    const initAuth = async () => {
      const token = getToken();
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await getProfileApi();
        setUser(res.data.user);
      } catch (error) {
        removeToken();
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const res = await loginApi(credentials);
      setToken(res.data.token);
      setUser(res.data.user);
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const register = async (credentials) => {
    try {
      const res = await registerApi(credentials);
      setToken(res.data.token);
      setUser(res.data.user);
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const res = await logoutApi();
      toast.success(res.data.message);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Logout failed");
    } finally {
      removeToken();
      setUser(null);
      queryClient.clear();
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, register, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
