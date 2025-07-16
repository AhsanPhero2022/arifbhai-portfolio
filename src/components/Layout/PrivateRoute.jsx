// components/PrivateRoute.jsx

import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null; // or loading spinner

  return isSignedIn ? children : <Navigate to="/register" replace />;
}
