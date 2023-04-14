import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  let user = sessionStorage.getItem("mobile") ? true : false;
  useEffect(() => {
    if (!user) navigate("/");
  }, []);
  return user && <> {children}</>;
};

export default ProtectedRoute;
