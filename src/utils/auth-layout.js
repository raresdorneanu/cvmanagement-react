import { Outlet, Navigate } from "react-router-dom";

export const AuthLayout = () => {
  const nameFromLS = localStorage.getItem("lsname");
  if (nameFromLS?.length) {
    return <Navigate to={"/dashboard"} replace />;
  }
  return <Outlet />;
};
