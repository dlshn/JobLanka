import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const verifyAdmin = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/verifyToken`,
          {}, // empty body
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );


        setIsAdmin(res.data.isAdmin);
      } catch (error) {
        console.error("Admin verification failed", error);
        setIsAdmin(false);
      }
    };

    verifyAdmin();
  }, []);

  return (
    <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
