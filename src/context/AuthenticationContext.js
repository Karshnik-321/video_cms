import React, { createContext, useContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "../utils/cookies";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
      setIsLoading(true)
      const storedToken = getCookie("authToken");
      
      if (storedToken) {
        setToken(true);
        setIsLoading(false)
      } 
    }, [navigate]);

    const login = () => {
      setIsLoading(true)
      setCookie("authToken", "setCookie-token");
      const userToken = getCookie("authToken");
      setIsLoading(false)
      setToken(userToken);
    };
    const logout = () => {
      setToken(false);
    };
    const isAuthenticated = token;
    const loading = isLoading
    return (
      <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };