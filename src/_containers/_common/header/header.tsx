import { Link, useLocation } from "react-router-dom";
import HeaderLanguage from "@container/_common/header/header.language.tsx";
import HeaderLogin from "@container/_common/header/header.login.tsx";
import HeaderNavigation from "@container/_common/header/header.navi.tsx";
import { useState } from "react";
import useStylesheet from "@helper/useStylesheet";

const HeaderComponent = () => {
  const path = useLocation();
  const [toggle, setToggle] = useState(false);
  useStylesheet("/css/landing_page.css");
  if (path.pathname.includes("auth") || path.pathname.includes("terms"))
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
                      style={{ height: "55px" }}
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
                  onClick={() => setToggle(!toggle)}
                  className="navbar-toggler landing-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  style={{
                    padding: "8px",
                  }}
                >
                  <svg
                    width="44"
                    height="34"
                    style={{
                      width: "32px",
                      height: "auto",
                    }}
                    viewBox="0 0 44 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={
                        toggle
                          ? "M42 3L3.5 31M42 31L3.5 3"
                          : "M41 3H3M41 31H3M41 17H14"
                      }
                      stroke="url(#paint0_linear_15_34)"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_15_34"
                        x1="1.5"
                        y1="3"
                        x2="41"
                        y2="33.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#01FDFE" />
                        <stop offset="1" stopColor="#9966FF" />
                      </linearGradient>
                    </defs>
                  </svg>
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
};

export default HeaderComponent;