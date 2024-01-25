/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="flex items-center justify-center space-x-2">
    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
  </div>
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/signIn"></Navigate>;
};

export default PrivateRoutes;
