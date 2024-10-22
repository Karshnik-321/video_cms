import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthenticationContext";
import { getCookie } from "../utils/cookies";

const PrivateRoutes = () => {
    const { isAuthenticated , loading} = useAuth();

    if (loading) {
      return <div>Loading...</div>;
    }
    
    return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace />;
  };
  export default PrivateRoutes;