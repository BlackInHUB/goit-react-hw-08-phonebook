import useAuth from "hooks/useAuth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({component: Component, redirectTo="/"}) => {
    const { isLogin } = useAuth();

    return isLogin ? <Navigate to={redirectTo} /> : Component;
}