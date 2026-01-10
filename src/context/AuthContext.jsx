import { createContext, useContext, useEffect, useState } from "react";
import {
  getProfileApi,
  loginApi,
  logoutApi,
  registerApi,
} from "@/api/auth.api";
import { getToken, removeToken, setToken } from "@/lib/token";

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
        setUser(res.data.profile);
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
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (credentials) => {
    try {
      const res = await registerApi(credentials);
      console.log(res.data);
      setToken(res.data.token);
      setUser(res.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await logoutApi();
    } catch (error) {
      console.error(error);
    } finally {
      removeToken();
      setUser(null);
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
