import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  console.log("Check user in Private: ", currentUser);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
