
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";


interface PrivateRouteProps {
  children: ReactNode;
  role: "volunterr" | "investor";
}

export const PrivateRoute = ({ children, role }: PrivateRouteProps) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role") as "volunterr" | "investor" | null;

  const isAuthorized = token && userRole === role;

  if (!isAuthorized) {
    return <Navigate to="/profile-volunter" replace />;
  }

  return <>{children}</>
};

