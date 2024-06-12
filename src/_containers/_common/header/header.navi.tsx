import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import {setCurrentPageAction, setUserAction} from "@action/auth.action.tsx";
import {useTranslation} from "react-i18next";
import {changeLanguage} from "../../../language/i18n.tsx";

const HeaderNavigation = () => {
    const path = useLocation();
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state: RootState) => state.AuthReducer);

    const onClickLogin = () => {
        dispatch(setCurrentPageAction(path.pathname));
        navigation('/auth/login');
    }

    const onClickLogout = () => {
        localStorage.removeItem('khanway_access_token');
        sessionStorage.removeItem('khanway_access_token');
        dispatch(setUserAction(null));
        if (path.pathname.includes('profile'))
            navigation('/');
    }

    const getHeaderMenu = () => {
        if (import.meta.env.MODE === 'prod')
            return (
                <>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to="/minting">{t(`header.menu2_sub1`)}</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to="/airdrop">{t(`header.menu2_sub3`)}</Link>
                    </li>
                </>
            )
        else
            return (
                <>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to="/market">{t(`header.main_menu2`)}</Link>

                        <div className="drop-box">
                            <Link to="/minting" className="drop-box-item">{t(`header.menu2_sub1`)}</Link>
                            <Link to="/market/explore" className="drop-box-item">{t(`header.menu2_sub2`)}</Link>
                            <Link to="/airdrop" className="drop-box-item">{t(`header.menu2_sub3`)}</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown m-menu w-hidden">
                        <Link className="nav-link" to="/airdrop" replace={true}>{t(`header.menu2_sub3`)}</Link>
                    </li>
                    <li className="nav-item dropdown m-menu w-hidden">
                        <Link className="nav-link" to="/market/explore" replace={true}>{t(`header.menu2_sub2`)}</Link>
                    </li>
                    <li className="nav-item dropdown m-menu w-hidden">
                        <Link className="nav-link" to="/minting" replace={true}>{t(`header.menu2_sub1`)}</Link>
                    </li>
                </>
            )
    }

    const {t} = useTranslation();
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
                    <Link className="nav-link" to="/" reloadDocument={true}>{t(`header.main_menu1`)}</Link>
                </li>
                {
                    getHeaderMenu()
                }

                <li className="nav-item dropdown m-menu">
                    <Link className="nav-link" to={user ? "/profile/nfw" : '/auth/login'}
                          reloadDocument={true}>{t(`profile_navigation.menu2`)}</Link>
                </li>
                <li className="nav-item dropdown m-menu">
                    <Link className="nav-link" to={user ? "/profile" : '/auth/login'}
                          reloadDocument={true}>{t(`profile_navigation.menu1`)}</Link>
                </li>
                <li className="nav-item dropdown m-menu">
                    <Link className="nav-link" to={user ? "/profile/history" : '/auth/login'}
                          reloadDocument={true}>{t(`profile_navigation.menu3`)}</Link>
                </li>
                <li className="nav-item dropdown m-menu">
                    <Link className="nav-link" to={user ? "/profile/wallet" : '/auth/login'}
                          reloadDocument={true}>{t(`profile_navigation.menu4`)}</Link>
                </li>
                <li className="nav-item dropdown m-menu">
                    <Link className="nav-link" to={user ? "/profile/setting" : "/auth/login"}
                          reloadDocument={true}>{t(`profile_navigation.menu5`)}</Link>
                </li>
                {
                    !user
                        ?
                        <li className="nav-item dropdown m-menu">
                            <a className="nav-link" onClick={() => onClickLogin()}>{t(`profile_navigation.menu7`)}</a>
                        </li>
                        :
                        <li className="nav-item dropdown m-menu">
                            <a className="nav-link" onClick={() => onClickLogout()}>{t(`profile_navigation.menu6`)}</a>
                        </li>
                }

                <li className="nav-item dropdown m-menu lan-box">
                    <a onClick={() => changeLanguage('ko')}>
                        <img src="/images/icon-kr.png" alt=""/>
                        한국어
                    </a>
                    <a onClick={() => changeLanguage('en')}>
                        <img src="/images/icon-en.png" alt=""/>
                        English
                    </a>
                </li>


            </ul>
        </div>
    )
}

export default HeaderNavigation;
