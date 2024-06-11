import {useLocation} from "react-router-dom";
import {ReactNode} from "react";

interface HeaderRouteProps {
    children: ReactNode;
}
const HeaderRoute = ({ children }: HeaderRouteProps) => {
    const path = useLocation();

    if (path.pathname === '/' || path.pathname.includes('airdrop')) return null;
    return children;
}

export default HeaderRoute;
