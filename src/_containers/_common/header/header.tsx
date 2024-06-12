import {Link, useLocation} from "react-router-dom";
import HeaderLanguage from "@container/_common/header/header.language.tsx";
import HeaderLogin from "@container/_common/header/header.login.tsx";
import HeaderNavigation from "@container/_common/header/header.navi.tsx";

const HeaderComponent = () => {
    const path = useLocation();

    if (path.pathname.includes('auth') || path.pathname.includes('terms'))
        return null;

  return (
    <div className="header landing" style={{ position: "relative" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="navigation">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="brand-logo">
                  <Link to="/">
                    {/*<img src="/images/logo-h-white.png" alt="" className="logo-primary khanway"/>*/}
                    {/*<img src="/images/logow.png" alt="" className="logo-white"/>*/}
                    {/**/}
                    <img
                      src="/images/logo-h-white.png"
                      alt=""
                      className="logo-primary"
                      style={{ height: "45px" }}
                    />
                    {/*<img src="/images/logow.png" alt="" className="logo-white"/>*/}
                    {/*<img src="/images/logo.png" alt="" className="logo-primary"/>*/}
                    <img
                      src="/images/logow.png"
                      alt=""
                      className="logo-white"
                    />
                  </Link>
                </div>
                <button
                  className="navbar-toggler landing-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <HeaderNavigation />
                <div className="signin-btn d-flex align-items-center">
                  <div className="nav-dropdown">
                    {/* Todo: onCLick*/}
                    <ul className="top-iconbox">
                      <HeaderLanguage />
                      <HeaderLogin />
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
