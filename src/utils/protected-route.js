import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const nameFromLS = localStorage.getItem("lsname");

  if (!nameFromLS?.length) {
    return <Navigate to={"/signin"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
