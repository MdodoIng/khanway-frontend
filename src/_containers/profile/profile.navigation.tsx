import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const ProfileNavigationComponent = () => {
    const {t} = useTranslation();
    const path = useLocation();

    return (
        <div className="row">
            <div className="col-12">
                <ul className="settings-menu">
                    <li className={`${(path.pathname === '/profile' || path.pathname === '/profile/edit') && 'active'}`}>
                        <Link to="/profile">{t(`profile_navigation.menu1`)}</Link>
                    </li>
                    <li className={`${path.pathname.includes('/profile/nfw') && 'active'}`}>
                        <Link to="/profile/nfw">{t(`profile_navigation.menu2`)}</Link>
                    </li>
                    <li className={`${path.pathname.includes('/profile/history') && 'active'}`}>
                        <Link to="/profile/history">{t(`profile_navigation.menu3`)}</Link>
                    </li>
                    <li className={`${path.pathname.includes('/profile/wallet') && 'active'}`}>
                        <Link to="/profile/wallet">{t(`profile_navigation.menu4`)}</Link>
                    </li>
                    {
                        import.meta.env.MODE !== 'prod' &&
                        <li className={`${path.pathname.includes('/profile/kyc') && 'active'}`}>
                            <Link to="/profile/kyc">{t(`profile_navigation.menu8`)}</Link>
                        </li>
                    }

                    <li className={`${path.pathname.includes('/profile/setting') && 'active'}`}>
                        <Link to="/profile/setting">{t(`profile_navigation.menu5`)}</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileNavigationComponent;