import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPageAction, setUserAction} from "@action/auth.action.tsx";
import {RootState} from "@reducer/root.reducer.tsx";
import {useTranslation} from "react-i18next";

const HeaderLogin = () => {
  const {t} = useTranslation();
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

  return (
      <li id="login-profile" className="login-profile active">
        {
          user ?
              <>
                <label><img src="/images/icon-profile.png" alt=""/></label>
                <ul id="submenu">
                  <li><Link to="/profile">{t(`profile_navigation.menu1`)}</Link></li>
                  <li><Link to="/profile/nfw">{t(`profile_navigation.menu2`)}</Link></li>
                  <li><Link to="/profile/history">{t(`profile_navigation.menu3`)}</Link></li>
                  <li><Link to="/profile/wallet">{t(`profile_navigation.menu4`)}</Link></li>
                  <li><Link to="/profile/kyc">{t(`profile_navigation.menu10`)}</Link></li>
                  {/*<li><Link to="/profile/setting">{t(`profile_navigation.menu5`)}</Link></li>*/}
                  <li><a onClick={() => onClickLogout()}>{t(`profile_navigation.menu6`)}</a></li>
                </ul>
              </>
              :
              <a className="btn btn-primary-line ml12 loginbtn" onClick={() => onClickLogin()}>
                <span>{t(`profile_navigation.menu7`)}</span>
              </a>
        }
      </li>
  )
}

export default HeaderLogin;