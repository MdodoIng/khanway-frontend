import React from "react"
import NavbarOne from "../Page/NavbarOne"
// import "../../../public/css/add-style.css"
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {/* <div className="relative flex flex-1 overflow-hidden w-screen h-screen min-w-screen min-h-screen bg-black"> */}
        {/* <div className="relative  flex min-h-full w-full flex-1 flex-col "> */}
          <div className="__variable_d69ff7">
            <div className="relative flex min-h-screen w-screen px-[11px] py-[12px] sm:py-[11px]  sm:h-screen">
              <div className="relative flex min-h-full w-full flex-1 flex-col overflow-clip rounded-md border-2 border-camo-500 transition-colors bg-gradient-to-b from-[#11140C] from-[27.54%] to-[#custombg]">
                <div className="bg-black duration-[0ms] opacity-0 pointer-events-none absolute inset-0 z-0 h-full w-full transition-opacity"></div>
                <NavbarOne />
                <div className="relative flex flex-1 sm:px-6 mb-1 sm:mb-8 xl:mb-1 pt-1 sm:pt-6 sm:mx-auto sm:pl-14 sm:pr-14 overflow-x-hidden overflow-y-hidden example lg:pt-14">
                  {children}
                </div>
              </div>
              <div
                className="absolute left-0 right-0 top-0 z-20 h-[14px] border-b-2 border-camo-500 bg-black sm:h-[13px]"
                style={{ position: "absolute" }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 z-20 h-[14px] border-t-2 border-camo-500 bg-black sm:h-[13px]"></div>
              <img
                alt=""
                loading="lazy"
                width="597"
                height="0"
                decoding="async"
                data-nimg="1"
                className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
                style={{ color: "transparent", position: "absolute" }}
                src="/images/bg/corner-sm-top-left.svg"
              />
              <img
                alt=""
                loading="lazy"
                width="465"
                height="0"
                decoding="async"
                data-nimg="1"
                className="pointer-events-none absolute right-0 top-0 z-20 hidden md:block"
                style={{ color: "transparent", position: "absolute" }}
                src="/images/bg/corner-sm-top-right.svg"
              />
              <img
                alt=""
                loading="lazy"
                width="150"
                height="0"
                decoding="async"
                data-nimg="1"
                className="pointer-events-none absolute left-0 top-0 z-20 block md:hidden"
                style={{ color: "transparent", position: "absolute" }}
                src="/images/bg/corner-top-left.svg"
              />
              <img
                alt=""
                loading="lazy"
                width="211"
                height="0"
                decoding="async"
                data-nimg="1"
                className="pointer-events-none absolute right-0 top-0 z-20 block md:hidden"
                style={{ color: "transparent", position: "absolute" }}
                src="/images/bg/corner-top-right.svg"
              />
              <img
                alt=""
                loading="lazy"
                width="465"
                height="0"
                decoding="async"
                data-nimg="1"
                className="pointer-events-none absolute bottom-0 right-0 z-20 hidden md:block"
                style={{ color: "transparent" }}
                src="/images/bg/corner-sm-bottom-right.svg"
              />
              <img
                alt=""
                loading="lazy"
                width="211"
                height="0"
                decoding="async"
                data-nimg="1"
                className="pointer-events-none absolute bottom-0 right-0 z-20 block md:hidden"
                style={{ color: "transparent" }}
                src="/images/bg/corner-bottom-right.svg"
              />
              <div className="absolute bottom-5 z-20 hidden animate-appear-expand-right items-center xs:left-[150px] xs:right-[180px] xs:flex md:left-[600px] md:right-60"></div>
              <img
                alt=""
                loading="lazy"
                width="597"
                height="0"
                decoding="async"
                data-nimg="1"
                className="pointer-events-none absolute bottom-0 left-0 z-20 hidden md:block"
                style={{ color: "transparent" }}
                src="/images/bg/corner-sm-bottom-left.svg"
              />
              <img
                alt=""
                loading="lazy"
                width="150"
                height="0"
                decoding="async"
                data-nimg="1"
                className="pointer-events-none absolute bottom-0 left-0 z-20 block md:hidden"
                style={{ color: "transparent" }}
                src="/images/bg/corner-bottom-left.svg"
              />
            </div>
          {/* </div> */}
        </div>
      {/* </div> */}
    </>
  );
}

export default Layout
