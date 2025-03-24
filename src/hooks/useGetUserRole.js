import { useState, useEffect } from "react";

const getUserRole = () => {
  return localStorage.getItem("userRole") || "admin";
};

export default function useGetUserRole() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const roleFromStorage = getUserRole();
    setRole(roleFromStorage);
  }, []);

  return role;
}
