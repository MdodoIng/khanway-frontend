import {Link, useLocation} from "react-router-dom"
import {useTranslation} from "react-i18next"
// import "../../../public/css/lading-add2.css"

const LandingFooter = () => {
  const {t} = useTranslation()
  const path = useLocation()

  if (path.pathname.includes("/auth")) return <></>

  return (
    <>
      <div
        className="footer-two"
        style={
          path.pathname === "/airdrop"
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <div className="footer-top">
          <div className="container">
            <div className="footerinside">
              <div style={{ display: "block", maxWidth: 400 }}>
                <img
                  src="/images/horizontal-gif-logo.gif"
                  alt=""
                  className="logo-primary khanway-bottom"
                />
                {/* <p>{t(`footer.description`)}</p> */}
              </div>
              <div className="footerinside-link">
                <div>
                  <ul className="link-tab">
                    <li>
                      <Link to="/">{t(`footer.menu1`)}</Link>
                    </li>
                    <li>
                      <Link to="#">{t(`footer.menu7`)}</Link>
                    </li>
                    <li>
                      <a href="">{t(`footer.menu9`)}</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="link-tab">
                    <li>
                      <Link to="/profile/nfw">{t(`footer.menu4`)}</Link>
                    </li>
                    <li>
                      <Link to="/profile">{t(`footer.menu5`)}</Link>
                    </li>
                    <li>
                      <Link to="/profile/setting">{t(`footer.menu6`)}</Link>
                    </li>
                    <li>
                      <Link
                        to={`/terms/${
                          localStorage.getItem("khanway_language") ?? "en"
                        }/privacy-policy`}
                        target={"_blank"}
                      >
                        {t(`footer.menu8`)}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-newsletter">
                <input
                  type="email"
                  style={{
                    background: "transparent",
                    // width: "80%",
                    marginInline: "auto",
                  }}
                  className="form-control"
                  placeholder={t(`auth_login.email_input`)}
                />
                <Link
                  to="/minting"
                  className="btn btn-grad mt24"
                  style={{ paddingInline: "0px", maxWidth: "270px" }}
                  data-aos="zoom-in"
                >
                  {t(`footer.menu10`)}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-bottom ">
          <div className="footer-bottom-text">
            © Copyright 2024,{" "}
            <a href="#" style={{ color: "#a74fff" }}>
              Khanway's{" "}
            </a>
            All Rights Reserved
          </div>
          <div className="footer-social">
            <ul>
              <li>
                <a href="https://www.facebook.com/khanteum.fb" target="_blank">
                  <i
                    className="bi bi-facebook"
                    style={{ width: "25px", height: "25px" }}
                  ></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/KHAN_ZZANG" target="_blank">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://t.me/Khanteum_Channel" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="30"
                    fill="currentColor"
                    className="bi bi-telegram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://t.me/khanteum_official" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="30"
                    fill="currentColor"
                    className="bi bi-telegram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@KHAN_ZZANG" target="_blank">
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="footer-bottom-privacy">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="footer-bottom-text">Terms</div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="footer-bottom-text">Privacy</div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="footer-bottom-text">Policy and Cookie Policy</div>
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default LandingFooter
