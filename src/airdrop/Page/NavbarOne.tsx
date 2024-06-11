// import React from "react"
import {BsGlobe2} from "react-icons/bs"
import logo from "../asset/image/logo-white.png"
import {useNavigate} from "react-router-dom"
import {useState} from "react"
// import i18n, {changeLanguage} from "../../../language/i18n.tsx"
import i18n, {changeLanguage} from "../../language/i18n.tsx"

const Navbar = () => {
  const navigate = useNavigate()
  const [language, setLanguage] = useState<string>(i18n.language)
  const onClickChangeLanguage = (lng: string) => {
    setLanguage(lng)
    changeLanguage(lng)
  }
  return (
    // <div className='flex relative z-10  flex-1 flex-col pb-16 h-screen overflow-hidden'>
    <header className="relative z-[11] flex h-max justify-between px-6 pb-3 pt-[3.25rem] sm:ml-16 sm:mr-14 sm:pl-12 sm:pr-0 sm:pt-10 lg:pt-9 sm:border-b border-[#787897]">
      <div className="flex flex-1 items-center justify-between gap-5 overflow-x-hidden">
        <div className="flex flex-1 items-center justify-between sm:justify-start">
          <a
            className="flex items-center sm:hidden lg:hidden h-[70px] w-[200px]"
            href="#"
            onClick={() => navigate("/")}>
            <img src={logo} alt="imd" style={{background: "transparent"}} />
          </a>
          <a
            className="hidden items-center sm:flex lg:hidden h-[64px] w-[170px]"
            href="#"
            onClick={() => navigate("/")}>
            <img src={logo} alt="imd" style={{background: "transparent"}} />
          </a>
          <a
            className="hidden items-center justify-center sm:hidden lg:flex h-[64px] w-[170px]"
            href="#"
            onClick={() => navigate("/")}>
            <img src={logo} alt="imd" style={{background: "transparent"}} />
          </a>
          <nav className="ml-6 items-center gap-2 md:flex hidden">
            <div
              className="px-2 py-2 sm:px-4 cursor-pointer"
              style={{
                fontSize: "1.6vh",
                lineHeight: "24px",
                fontWeight: "600",
                letterSpacing: "1.6px",
              }}>
              {/* <a className="text-[#99a3ba] hover:text-white" href="#">
                AIRDROP
              </a> */}
            </div>
            <div
              className="px-2 py-2 sm:px-4 cursor-pointer"
              style={{
                fontSize: "1.6vh",
                lineHeight: "24px",
                fontWeight: "600",
                letterSpacing: "1.6px",
              }}>
              {/* <a className="text-[#99a3ba] hover:text-white" href="#">
                LEADERBOARD
              </a> */}
            </div>
            <div
              className="px-2 py-2 sm:px-4 cursor-pointer"
              style={{
                fontSize: "1.6vh",
                lineHeight: "24px",
                fontWeight: "600",
                letterSpacing: "1.6px",
              }}>
              {/* <a className="text-[#99a3ba] hover:text-white" href="#">
                DEVS
              </a> */}
            </div>
            <div
              className="px-2 py-2 sm:px-4 cursor-pointer"
              style={{
                fontSize: "1.6vh",
                lineHeight: "24px",
                fontWeight: "600",
                letterSpacing: "1.6px",
              }}>
              {/* <a className="text-[#99a3ba] hover:text-white" href="#">
                ABOUT
              </a> */}
            </div>
          </nav>
        </div>
        {language === "ko" ? (
          <div className="hidden overflow-x-auto xs:gap-10 size-[24px] cursor-pointer text-[#99a3ba] hover:text-white sm:flex">
            <BsGlobe2 onClick={() => onClickChangeLanguage("en")} />
          </div>
        ) : (
          <div className="hidden overflow-x-auto xs:gap-10 size-[24px] cursor-pointer text-white hover:text-[#99a3ba] sm:flex">
            <BsGlobe2 onClick={() => onClickChangeLanguage("ko")} />
          </div>
        )}
      </div>
    </header>
    // </div>
  )
}

export default Navbar
