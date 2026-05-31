import { Navigate } from "react-router-dom";

export default function ProtectedAdmin({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const role = localStorage.getItem("userRole");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
