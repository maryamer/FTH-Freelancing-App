import { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. load the authenticated user
  const { isAuthenticated, isLoading, isAuthorized } = useAuthorize();

  // 2. check if is Authorized or not, check is is Authenticagted or not
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  // 3. while loading => show a loading
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );

  // 4.  if user isAuthenticated and isAuthrozexd => rendere the app
  if (isAuthenticated && isAuthorized) return children;
}
export default ProtectedRoute;
