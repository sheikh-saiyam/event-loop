/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user info using token
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.user);
      setError(null);
    } catch (err) {
      setUser(null);
      setError("Failed to fetch user info!");
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // Logout function
  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Logged out successfully!");
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, logOut, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth custom hook
export const useAuth = () => useContext(AuthContext);
