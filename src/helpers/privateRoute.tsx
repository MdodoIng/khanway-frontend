import {Navigate, useLocation} from 'react-router-dom';
import useAuthenticate from "@helper/useAuthenticate.tsx";
import {ReactNode, useEffect} from "react";
import {useDispatch} from "react-redux";
import Loading from "@container/_common/loading.tsx";
import {
    onToggleEffectModalAction,
    onToggleLoadingModalAction,
} from "@action/modal.action.tsx";

interface PrivateRouteProps {
    children: ReactNode;
}
export function PrivateRoute({ children }: PrivateRouteProps) {
    const path = useLocation();
    const dispatch = useDispatch();
    const {isVerified, loading} = useAuthenticate();

    useEffect(() => {
        dispatch(onToggleLoadingModalAction(false));
        dispatch(onToggleEffectModalAction(false))
    }, []);


    if (loading)
        return <Loading />;

    const getContainer = () => {
        if (isVerified && path.pathname.includes('login')) return <Navigate to="/"/>;
        else if (!isVerified && (path.pathname.includes('sns/complete') || path.pathname.includes('sns/verify') || path.pathname.includes('event/reward'))) return <Navigate to="/auth/login"/>;
        else if (!path.pathname.includes('auth/signup')) return children;
        else if (!path.pathname.includes('profile')) return children;
        else if (!isVerified) return <Navigate to="/"/>;
        else return children;
    }
    return getContainer();
}