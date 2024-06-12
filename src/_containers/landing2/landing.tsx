// import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setInitialStateAction } from "@action/auth.action.tsx";
import Header from "@container/_common/header/header.tsx";
import { useTranslation } from "react-i18next";
// import data from "./data"
// import {data1} from "./data"
// import {Carousel} from "react-bootstrap"
// import YoutubeIcon from "@mui/icons-material/Youtube";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import TelegramIcon from "@mui/icons-material/Telegram";
import { YouTube as YoutubeIcon, Twitter as TwitterIcon, Telegram as TelegramIcon } from "@mui/icons-material";
import image1 from "../../../public/images/latest/7.png";
import image2 from "../../../public/images/latest/7.png";
// import image22 from "../../assets/image22.png"
// import image11 from "../../assets/image1.png"
// import image4 from "../../assets/image4.png"
// import image5 from "../../assets/image5.png"
// import Slider, { Settings } from "react-slick";
// import { useMediaQuery } from "react-responsive";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useStylesheet from "@helper/useStylesheet";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const LandingContainer2 = () => {
  useStylesheet('/css/landing.css')
  useStylesheet('/css/landing-add3.css')
  useStylesheet('/css/landing-add2.css')
  useStylesheet('/css/landing-add.css')
  const dispatch = useDispatch();
  const { t } = useTranslation();
  AOS.init({
    duration: 1200,
    easing: "ease-in-out-back",
  });
  const [selectedQ, setSelectedQ] = useState(0);
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // })
  // const isSmallScreen = useMediaQuery({ maxWidth: 768, minWidth: 427 });
  // const isMobile = useMediaQuery({ maxWidth: 426 });
  // const isTabletOrMobile = useMediaQuery({query: "(max-width: 1224px)"})

  // const settings: Settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: isMobile ? 1 : isSmallScreen ? 2 : 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 4500,
  //   autoplaySpeed: 0.5,
  //   cssEase: "linear",
  //   arrows: false,
  // };
  // const settings2: Settings = {
  //   dots: true,
  //   infinite: true,
  //   fade: true,
  //   autoplay: true,
  //   speed: 5000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   cssEase: "linear",
  //   arrows: false,
  //   initialSlide: 0,
  //   pauseOnHover: true,
  //   //  autoplaySpeed: 0.4,
  //   //  responsive: [
  //   //    {
  //   //      breakpoint: 1024,
  //   //      settings: {
  //   //        slidesToShow: 3,
  //   //        slidesToScroll: 3,
  //   //        infinite: true,
  //   //        dots: true,
  //   //      },
  //   //    },
  //   //    {
  //   //      breakpoint: 600,
  //   //      settings: {
  //   //        slidesToShow: 2,
  //   //        slidesToScroll: 2,
  //   //        initialSlide: 2,
  //   //      },
  //   //    },
  //   //    {
  //   //      breakpoint: 480,
  //   //      settings: {
  //   //        slidesToShow: 1,
  //   //        slidesToScroll: 1,
  //   //      },
  //   //    },
  //   //  ],
  // };
  const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isPaused, setPaused] = useState(false)

  // const handleSelect = (selectedIndex: number) => {
  //   setIndex(selectedIndex)
  // }

  // const handleMouseOver = () => {
  //   setPaused(true)
  // }

  // const handleMouseOut = () => {
  //   setPaused(false)
  // }

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (!isPaused) {
  //       setIndex((prevIndex) => (prevIndex + 1) % data.length)
  //     }
  //   }, 4000)
  //   return () => clearInterval(intervalId)
  // }, [isPaused])
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (!isPaused) {
  //       setIndex((prevIndex) => (prevIndex + 1) % data.length)
  //     }
  //   }, 4000)
  //   return () => clearInterval(intervalId)
  // }, [isPaused])

  useEffect(() => {
    dispatch(setInitialStateAction());
  }, []);

  const image = [image1, image2, image1, image2];
  // const images = [image4, image5, image4, image5]
  // const images1 = [image11, image22, image11, image22]
  // const names = [
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   "The One and Only Red Carpet Event For Crypto and Forex Industry",
  //   "We bring together decentralised and traditional finance start-ups.",
  // ]
  // const wave = ["Connect,", "Prosper,", "Experience"]
  const data = [
    [
      {
        lable: t(`landing.youtube_content4_label`),
        text: t(`landing.youtube_content4_value`),
      },
      {
        lable: t(`landing.youtube_content3_label`),
        text: t(`landing.youtube_content3_value`),
      },
      {
        lable: t(`landing.youtube_content6_label`),
        text: t(`landing.youtube_content6_value`),
      },
    ],
    [
      {
        lable: t(`landing.youtube_content1_label`),
        text: t(`landing.youtube_content1_value`),
      },
      {
        lable: t(`landing.youtube_content2_label`),
        text: t(`landing.youtube_content2_value`),
      },
      {
        lable: t(`landing.youtube_content5_label`),
        text: t(`landing.youtube_content5_value`),
      },
    ],
  ];
  const data1 = [
    {
      id: t(`landing.nfw_title1`),
      heading: t(`landing.nfw_heading1`),
      desc: t(`landing.nfw_desc1`),
    },
    {
      id: t(`landing.nfw_title2`),
      heading: t(`landing.nfw_heading2`),
      desc: t(`landing.nfw_desc2`),
    },
    {
      id: t(`landing.nfw_title3`),
      heading: t(`landing.nfw_heading3`),
      desc: t(`landing.nfw_desc3`),
    },
    {
      id: t(`landing.nfw_title4`),
      heading: t(`landing.nfw_heading4`),
      desc: t(`landing.nfw_desc4`),
    },
    {
      id: t(`landing.nfw_title5`),
      heading: t(`landing.nfw_heading5`),
      desc: t(`landing.nfw_desc5`),
    },
    {
      id: t(`landing.nfw_title6`),
      heading: t(`landing.nfw_heading6`),
      desc: t(`landing.nfw_desc6`),
    },
    {
      id: t(`landing.nfw_title7`),
      heading: t(`landing.nfw_heading7`),
      desc: t(`landing.nfw_desc7`),
    },
    {
      id: t(`landing.nfw_title8`),
      heading: t(`landing.nfw_heading8`),
      desc: t(`landing.nfw_desc8`),
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = currentIndex + 1;
      if (currentIndex === image.length - 1) {
        setCurrentIndex(0);
        // return;
      } else {
        setCurrentIndex(updatedData);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = index + 1;
      if (index === data.length - 1) {
        setIndex(0);
        // return;
      } else {
        setIndex(updatedData);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div id="main-wrapper" className="main-bg">
      <div className="l-banner-bg">
        <Header />

        <div className="container l-banner">
          <div className="row ">
            <div className="col-xl-12 col-lg-12 col-12" data-aos="fade-up">
              <div className="bn-txtbox">
                <h2>{t(`header.menu1`)}</h2>
                <h1>{t(`header.menu3`)}</h1>
                <p className="p2 mt-2">{t(`header.menu4`)}</p>
                {/* <p className="p2">{names[currentIndex]}</p> */}
                <Link
                  to="/minting"
                  className="btn btn-grad mt24"
                  data-aos="zoom-in"
                >
                  {t(`header.menu5`)}
                </Link>
              </div>
            </div>
            <div
              className="col-xl-12 col-lg-12 col-12 bn-imgbox"
              data-aos="zoom-in"
            >
              {/* <img src="/images/Landing/random.png" alt="" className="l-banner-img" /> */}
            </div>
          </div>
        </div>
        <div className="ticket">
          {/* <div className="ticket-side">
            <div className="ticket-side-sub">
              <img className="g" src={images[currentIndex]} alt="img"></img>
              <img className="g3" src={images1[currentIndex]} alt="img"></img>
              <img className="g1" src={image[currentIndex]} alt="img"></img>
            </div>
          </div> */}
          {/* <div className="roullete"> */}
          {/* <img className="g2" src={image[currentIndex]} alt="img"></img>
            <img className="g1" src={image[currentIndex]} alt="img"></img> */}
          {/* 
            <img src="/images/rotate1.png" className="wheel" />
            <img src="/images/fixed.png" className="stand" /> */}
          {/* </div> */}
        </div>
        <div className="video-title2">
          <div className="banner-light"></div>

          <div
            className="banner-tilt text-center absolute inset-0 flex items-center justify-center 
        text-[18px] lg:text-[4.6vh] font-medium"
          >
            <span className="rotate-180 uppercase" style={{ padding: "20px" }}>
              {t(`header.menu1`)}
            </span>
          </div>
          <div className="container">
            <div className="rt">
              <img
                className="video-title2-img img-left"
                src={image[currentIndex]}
                alt="img"
              ></img>

              <img
                src="/images/Roulette21.gif"
                alt=""
                className="video-title2-img img-right"
              />
            </div>
          </div>
        </div>
        <div className="container mtm-200">
          <div className="content">{t(`landing.section7_description`)}</div>
        </div>
      </div>
      {/* <div className="ticket">
        <div className="ticket-side">
          <div className="ticket-side-sub">
            <img className="g" src={images[currentIndex]} alt="img"></img>
            <img className="g1" src={image[currentIndex]} alt="img"></img>
          </div>
        </div>
        <div className="roullete">
          <img src="/images/Landing/wheel.png" className="wheel" />
          <img src="/images/Landing/stand.png" className="stand" />
        </div>
      </div> */}
      {/* <div className="ticket">
        <img src="/images/Landing/wheel.png" className="wheel" />
        <img src="/images/Landing/stand.png" className="stand" />
      </div> */}
      <div className="container l-video">
        {/* <div className="video-title" data-aos="fade-up">
            <h2>Thought of Khanzzang Continuity</h2>
            <h1 className="text-line-deco">World's first goodwill NFW </h1>
          </div> */}
        <div className="row">
          <div className="col-xl-12 video-con">
            {/*<iframe*/}
            {/*  className="youtube-video"*/}
            {/*  width="100%"*/}
            {/*  height="550"*/}
            {/*  src="https://www.youtube.com/embed/RArtLpO1hWM?si=WKQhzxUot-LlBfxC"*/}
            {/*  title="YouTube video player"*/}
            {/*  frameBorder="0"*/}
            {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
            {/*  allowFullScreen*/}
            {/*/>*/}
            {/* <video controls data-aos="zoom-in">
              <source src="/images/video01.mp4" type="video/mp4" />
            </video> */}
          </div>
          <div className="col-sm-12 mt-12">
            <div className="bn-txtbox center" data-aos="fade-up-right">
              {/* <h2>{t(`landing.youtube_title`)}🌐💡</h2> */}
              <h1>{t(`landing.youtube_title1`)}</h1>
            </div>
          </div>
          <div className="col-xl-6 col-sm-12 mt-8">
            <div className="bn-txtbox" data-aos="fade-up-left">
              <ol className="ul">
                <li>
                  <strong>{data[1][0].lable}:</strong> {data[1][0].text}
                </li>
                <li>
                  <strong>{data[1][1].lable}:</strong> {data[1][1].text}
                </li>
                <li>
                  <strong>{data[1][2].lable}:</strong> {data[1][2].text}
                </li>
              </ol>
            </div>
          </div>
          <div className="col-xl-6 col-sm-12 mt-8">
            <div className="bn-txtbox" data-aos="fade-up-left">
              <ol className="ul">
                <li>
                  <strong>{data[0][0].lable}:</strong> {data[0][0].text}
                </li>
                <li>
                  <strong>{data[0][1].lable}:</strong> {data[0][1].text}
                </li>
                <li className="last-li">
                  <strong>{data[0][2].lable}:</strong> {data[0][2].text}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="explore">
          <img
            className="pot-bg"
            src="/images/Landing/pot.png"
            alt=""
            draggable="false"
          />{" "}
          <div className="container" style={{ marginTop: "80px" }}>
            <div className="col-sm-12 mt-8" style={{ marginTop: "50px" }}>
              <div className="bn-txtbox pot" data-aos="fade-up-left">
                <ol className="ul">
                  <li>{t(`landing.pot_desc1`)}</li>
                  <li>{t(`landing.pot_desc2`)}</li>
                  <li>{t(`landing.pot_desc3`)}</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="pot-section">
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-6 col-sm-12" style={{margin: "auto"}}>
                <img src="/images/Landing/wheel.png" className="wheel" />
                <img src="/images/Landing/stand.png" className="stand" />
              </div> */}
                {/* <div className="col-xl-6 col-sm-12">
                <div className="imgs" data-aos="fade-up-right">
                  <img
                    className="network-img"
                    src="/images/Landing/IMG.png"
                    alt=""
                  />
                  <img
                    className="explore-img"
                    src="/images/Landing/explore.png"
                    alt=""
                  />
                </div>
              </div> */}
                {/* <div className="col-xl-6 col-sm-12">
                <div className="" data-aos="fade-up-left">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        <span>MNC</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        <span> NFW</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        <span>Metaverse</span>
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      Youtube, Tiktok, Instagram etc.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      IBM, Dapper Labs, UpBit, KakaoGround X, etc.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      Facebook, Roblox Zepeto, Games, etc.
                    </div>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="golden-silver container" data-aos="fade-up">
        <div className="silver">
          <img src="/images/latest/10.png" alt="silver-egg" />
          <h3>{t(`landing.section3_silver_title`)}</h3>
          <p>{t(`landing.section3_silver_description`)}</p>
        </div>
        <div className="silver">
          <img src="/images/latest/11.png" alt="silver-egg" />
          <h3> {t(`landing.section3_gold_title`)}</h3>
          <p>{t(`landing.section3_gold_description`)}</p>
        </div>
      </div>
      <div className="container l-getegg" data-aos="fade-up">
        <div className="bg-area">
          <div className="row" data-aos="fade-up">
            <div className="getegg-con">
              <div className="btn-box">
                {/*<h2 className="title">{t(`landing.buy_egg`)}</h2>*/}
                <a href="" className="btn btn-grad">
                  {t(`landing.purchase`)}
                </a>
              </div>

              <img
                src="/images/latest/6.png"
                alt=""
                className="get-item01 moving01"
              />
              <img
                src="/images/get-img-02.png"
                alt=""
                className="get-item02 moving02"
              />
              <img
                src="/images/latest/5.png"
                alt=""
                className="get-item03 moving03"
              />
              <img
                src="/images/latest/11.png"
                alt=""
                className="get-item04 moving04"
              />

              <img
                src="/images/latest/green.png"
                alt=""
                className="get-item05 moving04"
              />
              {/* <img
                src="/images/get-img-05.png"
                alt=""
                className="get-item05 movsing04"
              /> */}
              <img
                src="/images/latest/8.png"
                alt=""
                className="get-item06 moving01"
              />
              <img
                src="/images/image-7.png"
                alt=""
                className="get-item07 moving02"
              />
              <img
                src="/images/latest/silver.png"
                alt=""
                className="get-item08 moving03"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <div className="row">
            <div className="slider" style={{ padding: "0px!important" }}>
              <div className="col-xl-12 col-sm-12">
                <div className="" data-aos="fade-up-left">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    {data1?.map((obj: any, i: number) => {
                      return (
                        <>
                          <li className="nav-item" role="presentation">
                            <button
                              className={
                                "nav-link" + (i === selectedQ ? " active" : "")
                              }
                              onClick={() => setSelectedQ(i)}
                              id={obj?.id}
                              data-bs-toggle="pill"
                              data-bs-target={`#${obj?.id}`}
                              type="button"
                              role="tab"
                              aria-controls={obj?.id}
                              aria-selected="true"
                            >
                              <span>{obj?.id}</span>
                            </button>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    {data1?.map((obj: any, i: number) => {
                      return (
                        <>
                          <div
                            className={
                              "tab-pane fade " +
                              (i === selectedQ ? " show active" : "")
                            }
                            id={obj?.id}
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                          >
                            <div className="slider-heading">
                              <h1>{obj?.heading}</h1>
                              <div className="slider-text">{obj?.desc}</div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Slider {...settings2} style={{ display: "none" }}>
          {data1?.map((obj: any) => {
            return (
              <>
                <div className="slider-heading">
                  <h1>
                    {obj?.heading}
                  </h1>
                  <div className="slider-text">
                    {obj?.desc}
                  </div>
                </div>
              </>
            );
          })}
        </Slider> */}
      <div className="container" style={{ paddingBottom: "0px!important" }}>
        <div className="slider" style={{ paddingBottom: "0px!important" }}>
          <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
              showDots={false}
              autoPlaySpeed={2000}
              // customTransition="all .5"
              transitionDuration={500}
              autoPlay={false}
              infinite={true}
              arrows={false}
          >
            {/*<a*/}
            {/*  href="https://www.youtube.com/watch?v=KEki0K2IXKA&t"*/}
            {/*  target="_blank"*/}
            {/*>*/}
            {/*  {" "}*/}
            {/*  <img src="/images/Landing/social/g9.png" alt="" />*/}
            {/*</a>*/}
            <a
                href="https://www.youtube.com/watch?v=_tpYKGpqKjw&t"
                target="_blank"
            >
              <img src="/images/Landing/carousel/SIR.png" alt="" />
            </a>
            {/*<a*/}
            {/*  href="https://www.youtube.com/watch?v=9DqMuo2cxB4"*/}
            {/*  target="_blank"*/}
            {/*>*/}
            {/*  <img src="/images/Landing/carousel/third.png" alt="" />*/}
            {/*</a>*/}
            {/*<a*/}
            {/*  href="https://www.youtube.com/watch?v=4wTexw36fkM&t"*/}
            {/*  target="_blank"*/}
            {/*>*/}
            {/*  <img src="/images/Landing/carousel/four.png" alt="" />*/}
            {/*</a>*/}
            <img src="/images/Landing/social/g1.png" alt="" />

            <img src="/images/Landing//social/g2.png" alt="" />
            {/*<img src="/images/Landing/social/g3.png" alt="" />*/}
            {/*<a*/}
            {/*  href="https://www.youtube.com/watch?v=KT6_yOaWsGY&t"*/}
            {/*  target="_blank"*/}
            {/*>*/}
            {/*  <img src="/images/Landing//social/g4.png" alt="" />*/}
            {/*</a>*/}
            <img src="/images/Landing/social/g5.png" alt="" />
            <img src="/images/Landing/social/g6.png" alt="" />
            <img src="/images/Landing/social/g7.png" alt="" />
            <img src="/images/Landing/social/g8.png" alt="" />
            {/* <a
            href="https://www.youtube.com/watch?v=M0DiNnI8a7o&t"
            target="_blank"
          >
            <img src="/images/Landing/carousel/five.png" alt="" />
          </a> */}
          </Carousel>
        </div>
      </div>
      {/* <div className="multi-carousel-list">
          <ul className="multi-carousel-track ">
            <li className="li">
              <img src="/images/Landing/carousel/SIR.png" alt="" />
            </li>
            <li className="li">
              <img src="/images/Landing/carousel/second.png" alt="" />
            </li>
            <li className="li">
              <img src="/images/Landing/carousel/four.png" alt="" />
            </li>
            <li className="li">
              <img src="/images/Landing/carousel/third.png" alt="" />
            </li>
            <li className="li">
              <img src="/images/Landing/carousel/professional.png" alt="" />
            </li>
            <li className="li">
              <img src="/images/Landing/carousel/network.png" alt="" />
            </li>
            <li className="li">
              <img src="/images/Landing/carousel/party.png" alt="" />
            </li>
            <li className="li">
              <img src="/images/Landing/carousel/exchange.png" alt="" />
            </li>
            {images &&
              images?.map((obj) => {
                return (
                  <li className="li">
                    <img src={obj} alt="" />
                  </li>
                )
              })}
          </ul>
        </div> */}
      {/* </Slider> */}
      <div className="connect-bg" style={{ display: "none" }}>
        {/* <img className="wavebkg" src="/images/Landing/New/birdL.png" alt="" /> */}
        <div className="tag-line">
          <img className="wavebkgup" src="/images/Landing/up.png" id="bird" />
          {/* <h1 className="text-gradient3">{wave[currentIndex]}</h1> */}
          <div className="wave" id="wave">
            <div className="wave-text">
              {/* {data1 &&
                data1?.map((obj) => {
                  return ( */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
                className="w-div"
              >
                <h1 className="text-gradient3 font">{data1[0]?.heading}</h1>
                <p className="text-gradient-p">{data1[0]?.desc}</p>
                {/* <h1 className="text-gradient3 font">{data1[1]?.heading}</h1>
                <p className="text-gradient-p">{data1[1]?.desc}</p> */}
                <h1 className="text-gradient3 font">{data1[5]?.heading}</h1>
                <p className="text-gradient-p">{data1[5]?.desc}</p>
                <h1 className="text-gradient3 font">{data1[3]?.heading}</h1>
                <p className="text-gradient-p">{data1[3]?.desc}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
                className="w-div"
              >
                <h1 className="text-gradient3 font">{data1[4]?.heading}</h1>
                <p className="text-gradient-p">{data1[4]?.desc}</p>
                <h1 className="text-gradient3 font">{data1[2]?.heading}</h1>
                <p className="text-gradient-p">{data1[2]?.desc}</p>
                {/* <h1 className="text-gradient3 font">{data1[6]?.heading}</h1>
                <p className="text-gradient-p">{data1[6]?.desc}</p> */}
                <h1 className="text-gradient3 font">{data1[7]?.heading}</h1>
                <p className="text-gradient-p">{data1[7]?.desc}</p>
              </div>
              {/* )
                })} */}
            </div>
          </div>
          <img
            className="wavebkgfeather"
            src="/images/Landing/feather132.png"
            alt=""
          />
          <img
            className="wavebkgdown"
            src="/images/Landing/wave-cut-min.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div className="social-media">
          <h1 className=" plain">Social</h1>
          <h1 className="social-text plain">Media</h1>
          <div className="media-icon">
            <a href="https://t.me/Khanteum_Channel" target="_blank">
              <TelegramIcon className="link-icon" />
            </a>
            <a href="https://www.youtube.com/@KHAN_ZZANG" target="_blank">
              <YoutubeIcon className="link-icon" />
            </a>
            <a href="https://x.com/KHAN_ZZANG?s=20" target="_blank">
              <TwitterIcon className="link-icon" />
            </a>
            <a href="https://t.me/khanteum_official" target="_blank">
              <TelegramIcon className="link-icon" />
            </a>
          </div>
          {/* <img
          className="img-1 sc moving03"
          src="/images/Social/social9.png"
          alt="social"
        />
        <img
          className="img-2 sc moving04"
          src="/images/Social/social21.png"
          alt="social"
        />
        <img
          className="img-3 sc moving01"
          src="/images/Social/social3.png"
          alt="social"
        />
        <img
          className="img-4 sc moving03"
          src="/images/Social/social4.png"
          alt="social"
        />
        <img
          className="img-5 sc moving02"
          src="/images/Social/social5.png"
          alt="social"
        />
        <img
          className="img-6 sc moving03"
          src="/images/Social/18.png"
          alt="social"
        />
        <img
          className="img-7 sc moving01"
          src="/images/Social/social7.png"
          alt="social"
        /> */}
        </div>
      </div>
      <div className="influencer-box">
        <div className="container">
          <div className="influencer agg">
            <img
              src="/images/latest/mix.png"
              className="inf-img"
              alt="img"
              data-aos="fade-up-right"
            ></img>
            <div className="influencer-text" data-aos="fade-up-right">
              <h1>{t(`landing.section3_title`)}</h1>
              <p>{t(`landing.section3_description1`)}</p>
              <p>{t(`landing.section3_description2`)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="influencer-box">
        <div className="container">
          <div className="influencer">
            <div className="influencer-text" data-aos="fade-up-right">
              <h1>{t(`landing.section4_title`)}</h1>
              <p>{t(`landing.section4_description`)}</p>
            </div>
            <img
              src="/images/k-phone.png"
              alt="img"
              data-aos="fade-up-right"
            ></img>
          </div>
        </div>
      </div>
      <div className="influencer-box">
        <div className="container">
          <div className="influencer">
            <img
              src="/images/img006.png"
              alt="img"
              data-aos="fade-up-left"
            ></img>

            <div className="influencer-text" data-aos="fade-up-right">
              <h1>{t(`landing.section5_title`)}</h1>
              <p>
                {/* All processes of Google’s YouTube copyright royalty sharing
              service since 2021 and all creators’ royalty sharing to third
              parties or issuance and distribution in NFW are a part of the
              receiving rights sharing system that is operated by Khanaires. All
              forms of NFW issued based on digital assets, as acknowledged
              globally, are a part of the rights for property ownership that is
              branched out from the receiving rights sharing system. In the case
              of NFW for liquidizing intellectual property rights, NFWs can only
              be issued, stored, and distributed by using methods similar to
              Khanaires’s Khanteum value which liquidizes invention patents. As
              such, Khanaires collects intangible assets, and Khanaires, which
              distributes those assets, have secured an international original
              patent for the metaverse era and NFW industry to gain an unrivaled
              position in the industry. */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel">
        <div className="container partners">
          <div className="row margin">
            <div className="col-xl-12 partners-title" data-aos="fade-up">
              <div className="influencer-text no_line">
                <h1>{t(`landing.sponsers`)}</h1>
              </div>
            </div>

            <div className="col-xl-12 partners-con" data-aos="fade-up">
              <div className="col-xl-3 col-sm-6 col-md-6 col-xs-6 p-item">
                <Link
                  to={"https://hexlant.com/"}
                  target={"_blank"}
                  className="p-logobox"
                >
                  <img
                    src="/images/partners/hexlant.png"
                    alt=""
                    className="p-logo"
                  />
                </Link>
              </div>

              <div className="col-xl-3 col-sm-6 col-md-6 col-xs-6 p-item">
                <Link
                  to="https://khanaires.com/"
                  target={"_blank"}
                  className="p-logobox"
                >
                  <img
                    src="/images/partners/khansaires.png"
                    alt=""
                    className="p-logo"
                  />
                </Link>
              </div>

              <div className="col-xl-3 col-sm-6 col-md-6 col-xs-6  p-item">
                <Link
                  to="https://m.khanteum.com/"
                  target={"_blank"}
                  className="p-logobox"
                >
                  <img
                    src="/images/partners/khanteum.png"
                    alt=""
                    className="p-logo"
                  />
                </Link>
              </div>
              <div className="col-xl-3 col-sm-6 col-md-6 p-item">
                <Link
                  to={"https://www.tinytingel.ai/"}
                  target={"_blank"}
                  className="p-logobox"
                >
                  <img
                    src="/images/partners/lighting.png"
                    alt=""
                    className="p-logo"
                  />
                </Link>
              </div>
              <div className="col-xl-3 col-sm-6 col-md-6 p-item">
                <Link
                  to={"https://jervis.kr/"}
                  target={"_blank"}
                  className="p-logobox"
                >
                  <img
                    src="/images/partners/jervis.png"
                    alt=""
                    className="p-logo"
                  />
                </Link>
              </div>
              <div className="col-xl-3 col-sm-6 col-md-6 p-item">
                <Link
                  to={"https://www.aasraa.in/"}
                  target={"_blank"}
                  className="p-logobox"
                >
                  <img
                    src="/images/partners/aasraa.png"
                    alt=""
                    className="p-logo"
                    style={{ maxWidth: "90px" }}
                  />
                </Link>
              </div>
              {/*<div className="col-xl-3 col-sm-6 col-md-6 p-item">*/}
              {/*  <Link*/}
              {/*    to={"https://europeandigitaluniversity.com"}*/}
              {/*    target={"_blank"}*/}
              {/*    className="p-logobox"*/}
              {/*  >*/}
              {/*    <img*/}
              {/*      src="/images/partners/european.png"*/}
              {/*      alt=""*/}
              {/*      className="p-logo"*/}
              {/*    />*/}
              {/*  </Link>*/}
              {/*</div>*/}
              {/* <div className="col-xl-3 col-sm-6 col-md-6 p-item">
                <Link
                  to={"https://gdcchain.com/"}
                  target={"_blank"}
                  className="p-logobox"
                >
                  <img
                    src="/images/partners/gdc.png"
                    alt=""
                    className="p-logo"
                  />
                </Link>
              </div> */}
              <div className="col-xl-3 col-sm-6 col-md-6 p-item">
                <Link
                  to={"https://www.itcglobal.io/"}
                  target={"_blank"}
                  className="p-logobox global-bg"
                >
                  <img
                    src="/images/partners/global.png"
                    alt=""
                    className="p-logo"
                  />
                </Link>
              </div>
              <div className="col-xl-3 col-sm-6 col-md-6 p-item">
                <Link
                  to={"https://www.meydanfz.ae/"}
                  target={"_blank"}
                  className="p-logobox"
                >
                  <img
                    src="/images/partners/meydan.png"
                    alt=""
                    className="p-logo"
                  />
                </Link>
              </div>
              <div className="col-xl-3 col-sm-6 col-md-6 p-item">
                <Link
                  to={"https://octet.im"}
                  target={"_blank"}
                  className="p-logobox octet-bg"
                >
                  <img
                    src="/images/partners/octet.png"
                    alt=""
                    className="p-logo"
                  />
                </Link>
              </div>
              <div className="col-xl-3 col-sm-6 col-md-6 p-item">
                <Link
                  to={"https://polygon.technology/"}
                  target={"_blank"}
                  className="p-logobox"
                >
                  <img
                    src="/images/partners/polygon.png"
                    alt=""
                    className="p-logo"
                  />
                </Link>
              </div>
              <div className="col-xl-3 col-sm-6 col-md-6 p-item">
                <a className="p-logobox">
                  <img
                    src="/images/partners/taxtrix.webp"
                    alt=""
                    className="p-logo"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="partner">
          <h1>Sponsors & Partners</h1>
        </div>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          controls={false}
          indicators={false}
          pause={false}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          {data &&
            data?.map((res, id) => {
              return (
                <Carousel.Item key={id}>
                  <div className="grid-data">
                    <img src={res?.img} alt="img" className="p-logo" />
                    <div className="content">
                      <h4>{res?.desc}</h4>
                      <a href={res?.link} target="_blank">
                      </a>
                    </div>
                  </div>
                </Carousel.Item>
              )
            })}
        </Carousel> */}
          <div className="t-member">
            <div className="container k-member">
              <div className="row margin" data-aos="fade-up">
                <div className="col-xl-12 member-title" data-aos="fade-up">
                  <h2 className="khanway">Khanway</h2>
                  <div className="influencer-text no_line">
                    <h1>{t(`landing.section6_title`)}</h1>
                  </div>
                </div>
                <div className="col-xl-12 member-content">
                  <div className=" col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-KIM.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Ha Jung KIM </p>
                      <p className="job">CEO(Dubai/India)</p>
                    </div>
                  </div>{" "}
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-Seok-GuRyu.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Seok-Gu Ryu </p>
                      <p className="job">CEO(Korea)</p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-01.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Chris Cheon</p>
                      <p className="job">CIO (Dubai)</p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-02.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Shiju BJ</p>
                      <p className="job">CMO (Dubai)</p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-03.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Raju Ratna</p>
                      <p className="job">Director (India)</p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-05.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Mangal Tiwari</p>
                      <p className="job">Liaison Director (India)</p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-Bok-WonKim.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Bok-Won Kim </p>
                      <p className="job">CFO(Korea)</p>
                    </div>
                  </div>
                  {/* <div
                  className="col-sm-3 col-4 member"
                  data-aos="fade-up">
                  <div className="m-card">
                    <img src="/images/Member/member-04.png" alt="" className="m-img" />
                    <p className="m-name">Chandra Sekhar Pappu</p>
                    <p className="job">
                      Managing Officer / HR / Training (India)
                    </p>
                  </div>
                </div> */}
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-06.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Zehra Ahmed Khan</p>
                      <p className="job">
                        Executive Assistant to CIO/Head of Administration
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-09.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Michael Harry John</p>
                      <p className="job">Development Head Manager (Dubai)</p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-07.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Vishnu Moorthy</p>
                      <p className="job">Head of Malaysia/Indonesia</p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-081.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Binu Thankappan</p>
                      <p className="job">Maintenance Manager (Dubai)</p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-Syeda.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Syeda Samreen</p>
                      <p className="job">WEF Manager</p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-Pragana.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Pragana Majji</p>
                      <p className="job">WEF Manager</p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-Kyung-NamKim.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Kyung-Nam Kim </p>
                      <p className="job">
                        Foreign Investment Director (Korea/India)
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-11.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">David, Yoo </p>
                      <p className="job">Chief R&D Officer(Korea)</p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-10.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Junho Lee </p>
                      <p className="job">R&D Team Leader(Korea)</p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-Young-HyunLee.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Young-Hyun Lee </p>
                      <p className="job">
                        Khanteum App Development Team Leader(Korea)
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-4 member" data-aos="fade-up">
                    <div className="m-card">
                      <img
                        src="/images/Member/member-Ayesha.png"
                        alt=""
                        className="m-img"
                      />
                      <p className="m-name">Ayesha Zeba </p>
                      <p className="job">WEF Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"golden-silver country text-center container aos-init aos-animate"}>
            <div className={"silver w-100"} data-aos="fade-up">
              <img src={"/images/country/india.svg"} alt={''} style={{maxWidth: '200px'}}/>
              <h3>Khanaires India</h3>

              <p>
                Flat no 405,Botcha Squara,Passport
                Building,Birla Jn,Visakhapatnam,
                Visakhapatnam,Andhra Pradesh,
                India - 530007
              </p>
            </div>
            <div className={"silver w-100"} data-aos="fade-up">
              <img src={"/images/country/korea.svg"} alt={''} style={{maxWidth: '200px'}}/>
              <h3>Khanaires Korea</h3>

              <p>
                Teatown building 203, 25 Digital-ro 32ga-gil,
                Guro-gu, Seoul, Republic of Korea – 08392
              </p>
            </div>
            <div className={"silver w-100"} data-aos="fade-up">
              <img src={"/images/country/united_arab_emirates.svg"} alt={''}
                   style={{maxWidth: '200px', minHeight: '133px', objectFit: 'cover'}}/>
              <h3>Khanaires Dubai</h3>

              <p>
                Business Center 1, M Floor,
                The Meydan Hotel, Nad Al Sheba,
                Dubai, U.A.E
              </p>
            </div>
          </div>
        </div>
        {/* <div className="grid-container">
          <div className="grid-item">
            <Link
              to={"https://hexlant.com/"}
              target={"_blank"}
              className="p-logobox">
              <img
                src="/images/partners/hexlant.png"
                alt=""
                className="p-logo"
              />
            </Link>
          </div>

          <div className="grid-item">
            <Link
              to="https://khanaires.com/"
              target={"_blank"}
              className="p-logobox">
              <img
                src="/images/partners/khansaires.png"
                alt=""
                className="p-logo"
              />
            </Link>
          </div>

          <div className="grid-item">
            <Link
              to="https://m.khanteum.com/"
              target={"_blank"}
              className="p-logobox">
              <img
                src="/images/partners/khanteum.png"
                alt=""
                className="p-logo"
              />
            </Link>
          </div>
          <div className="grid-item">
            <Link
              to={"https://www.tinytingel.ai/"}
              target={"_blank"}
              className="p-logobox">
              <img
                src="/images/partners/lighting.png"
                alt=""
                className="p-logo"
              />
            </Link>
          </div>
          <div className="grid-item">
            <Link
              to={"https://jervis.kr/"}
              target={"_blank"}
              className="p-logobox">
              <img
                src="/images/partners/jervis.png"
                alt=""
                className="p-logo"
              />
            </Link>
          </div>
          <div className="grid-item">
            <Link
              to={"https://www.aasraa.in/"}
              target={"_blank"}
              className="p-logobox">
              <img
                src="/images/partners/aasraa.png"
                alt=""
                className="p-logo"
                style={{maxWidth: "90px"}}
              />
            </Link>
          </div>
          <div className="grid-item">
            <Link
              to={"https://europeandigitaluniversity.com"}
              target={"_blank"}
              className="p-logobox">
              <img
                src="/images/partners/european.png"
                alt=""
                className="p-logo"
              />
            </Link>
          </div>
          <div className="grid-item">
            <Link
              to={"https://gdcchain.com/"}
              target={"_blank"}
              className="p-logobox">
              <img src="/images/partners/gdc.png" alt="" className="p-logo" />
            </Link>
          </div>
          <div className="grid-item">
            <Link
              to={"https://www.itcglobal.io/"}
              target={"_blank"}
              className="p-logobox global-bg">
              <img
                src="/images/partners/global.png"
                alt=""
                className="p-logo"
              />
            </Link>
          </div>
          <div className="grid-item">
            <Link
              to={"https://www.meydanfz.ae/"}
              target={"_blank"}
              className="p-logobox">
              <img
                src="/images/partners/meydan.png"
                alt=""
                className="p-logo"
              />
            </Link>
          </div>
          <div className="grid-item">
            <Link
              to={"https://octet.im"}
              target={"_blank"}
              className="p-logobox octet-bg">
              <img src="/images/partners/octet.png" alt="" className="p-logo" />
            </Link>
          </div>
          <div className="grid-item">
            <Link
              to={"https://polygon.technology/"}
              target={"_blank"}
              className="p-logobox">
              <img
                src="/images/partners/polygon.png"
                alt=""
                className="p-logo"
              />
            </Link>
          </div>
          <div className="grid-item">
            <a className="p-logobox">
              <img
                src="/images/partners/taxtrix.webp"
                alt=""
                className="p-logo"
              />
            </a>
          </div>
        </div> */}
      </div>

      {/* <div className="container l-egg">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
            <div className="bn-txtbox">
              <h1 className="text-line-deco">{t(`landing.section3_title`)}</h1>
              <p className="p2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s text ever since the 1500s
              </p>

              <div className="kind-box">
                <div className="kind-item">
                  {t(`landing.section3_category1`)}
                </div>
                <div className="kind-item">
                  {t(`landing.section3_category2`)}
                </div>
                <div className="kind-item">
                  {t(`landing.section3_category3`)}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
            <img src="/images/agg.png" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="l-text-con" data-aos="fade-up">
            <div className="l-box">
              <img src="/images/silver-egg.png" alt="" className="egg-img" />
              <h2 className="tit">{t(`landing.section3_silver_title`)}</h2>
              <p className="txt">{t(`landing.section3_silver_description`)}</p>
            </div>
            <div className="r-box">
              <img src="/images/gold-egg.png" alt="" className="egg-img" />
              <h2 className="tit">{t(`landing.section3_gold_title`)}</h2>
              <p className="txt">{t(`landing.section3_gold_description`)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container l-random">
        <div className="row" data-aos="fade-up">
          <div className="col-xl-12 random-title" data-aos="fade-up">
            <h1 className="text-line-deco">Random EGGs</h1>
          </div>

          <div className="l-imgbox" data-aos="fade-up">
            <img src="/images/random-img.png" alt="" />
          </div>

          <div className="l-txtbox" data-aos="fade-up">
            The company doesn't even know which industries are determined by the
            three eggs. The three industries are also decided by the vote of the
            members. The birth of the industry on December 24, 2024 is decided
            by a vote of members.
          </div>
        </div>
      </div>

      <div className="container khanaires">
        <div className="row" data-aos="fade-up">
          <div className="col-xl-6 col-lg-6 col-12 img-box">
            <img src="/images/k-phone.png" alt="" className="khan-phone" />
          </div>
          <div className="col-xl-6 col-lg-6 col-12 txt-box">
            <h1 className="text-line-deco">{t(`landing.section4_title`)} </h1>
            <p className="p3">{t(`landing.section4_description`)}</p>
          </div>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-xl-6 col-lg-6 col-12 txt-box">
            <h2 className="text-line-deco">{t(`landing.section5_title`)}</h2>
          </div>

          <div className="col-xl-6 col-lg-6 col-12 img-box2">
            <img src="/images/img006.png" alt="" className="khan-phone" />
          </div>
        </div>
      </div>
      <div className="container k-member">
        <div className="row" data-aos="fade-up">
          <div className="col-xl-12 member-title" data-aos="fade-up">
            <h2>Khanway</h2>
            <h1 className="text-line-deco">{t(`landing.section6_title`)}</h1>
          </div>

          <div className="col-xl-12 member-content">
            <div className="col-lg-3 col-sm-6 col-6 member" data-aos="fade-up">
              <div className="m-card">
                <img src="/images/member-01.png" alt="" className="m-img" />
                <p className="m-name">Chris Cheon</p>
                <p className="job">CIO (Dubai)</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6 member" data-aos="fade-up">
              <div className="m-card">
                <img src="/images/member-02.png" alt="" className="m-img" />
                <p className="m-name">Shiju BJ</p>
                <p className="job">CMO (Dubai)</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6 member" data-aos="fade-up">
              <div className="m-card">
                <img src="/images/member-03.png" alt="" className="m-img" />
                <p className="m-name">Raju Ratna</p>
                <p className="job">Director (India)</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6 member" data-aos="fade-up">
              <div className="m-card">
                <img src="/images/member-04.png" alt="" className="m-img" />
                <p className="m-name">Chandra Sekhar Pappu</p>
                <p className="job">Managing Officer / HR / Training (India)</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6 member" data-aos="fade-up">
              <div className="m-card">
                <img src="/images/member-05.png" alt="" className="m-img" />
                <p className="m-name">Mangal Tiwari</p>
                <p className="job">Liaison Director (India)</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6 member" data-aos="fade-up">
              <div className="m-card">
                <img src="/images/member-06.png" alt="" className="m-img" />
                <p className="m-name">Zehra Ahmed Khan</p>
                <p className="job">Executive Assistant to CIO (Dubai)</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6 member" data-aos="fade-up">
              <div className="m-card">
                <img src="/images/member-07.png" alt="" className="m-img" />
                <p className="m-name">Vishnu Moorthy</p>
                <p className="job">Head of Malaysia/Indonesia</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6 member" data-aos="fade-up">
              <div className="m-card">
                <img src="/images/member-08.png" alt="" className="m-img" />
                <p className="m-name">Binu Thankappan</p>
                <p className="job">Maintenance Manager (Dubai)</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6 member" data-aos="fade-up">
              <div className="m-card">
                <img src="/images/member-09.png" alt="" className="m-img" />
                <p className="m-name">Michael Harry John</p>
                <p className="job">Development Head Manager (Dubai)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container partners">
        <div className="row">
          <div className="col-xl-12 partners-title" data-aos="fade-up">
            <h1 className="text-line-deco">Sponsors & Partners</h1>
          </div>

          <div className="col-xl-12 partners-con" data-aos="fade-up">
            <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
              <Link
                to={"https://hexlant.com/"}
                target={"_blank"}
                className="p-logobox"
              >
                <img
                  src="/images/partners/hexlant.png"
                  alt=""
                  className="p-logo"
                />
              </Link>
            </div>

            <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
              <Link
                to="https://khanaires.com/"
                target={"_blank"}
                className="p-logobox"
              >
                <img
                  src="/images/partners/khansaires.png"
                  alt=""
                  className="p-logo"
                />
              </Link>
            </div>

            <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
              <Link
                to="https://m.khanteum.com/"
                target={"_blank"}
                className="p-logobox"
              >
                <img
                  src="/images/partners/khanteum.png"
                  alt=""
                  className="p-logo"
                />
              </Link>
            </div>
            <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
              <Link
                to={"https://www.tinytingel.ai/"}
                target={"_blank"}
                className="p-logobox"
              >
                <img
                  src="/images/partners/lighting.png"
                  alt=""
                  className="p-logo"
                />
              </Link>
            </div>
            <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
              <Link
                to={"https://jervis.kr/"}
                target={"_blank"}
                className="p-logobox"
              >
                <img
                  src="/images/partners/jervis.png"
                  alt=""
                  className="p-logo"
                />
              </Link>
            </div>
            <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
              <Link
                to={"https://www.aasraa.in/"}
                target={"_blank"}
                className="p-logobox"
              >
                <img
                  src="/images/partners/aasraa.png"
                  alt=""
                  className="p-logo"
                  style={{ maxWidth: "90px" }}
                />
              </Link>
            </div>
            <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
              <Link
                to={"https://europeandigitaluniversity.com"}
                target={"_blank"}
                className="p-logobox"
              >
                <img
                  src="/images/partners/european.png"
                  alt=""
                  className="p-logo"
                />
              </Link>
            </div>
            <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
              <Link
                to={"https://gdcchain.com/"}
                target={"_blank"}
                className="p-logobox"
              >
                <img src="/images/partners/gdc.png" alt="" className="p-logo" />
              </Link>
            </div>
            <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
              <Link
                to={"https://www.itcglobal.io/"}
                target={"_blank"}
                className="p-logobox global-bg"
              >
                <img
                  src="/images/partners/global.png"
                  alt=""
                  className="p-logo"
                />
              </Link>
            </div>
            <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
              <Link
                to={"https://www.meydanfz.ae/"}
                target={"_blank"}
                className="p-logobox"
              >
                <img
                  src="/images/partners/meydan.png"
                  alt=""
                  className="p-logo"
                />
              </Link>
            </div>
            <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
              <Link
                to={"https://octet.im"}
                target={"_blank"}
                className="p-logobox octet-bg"
              >
                <img
                  src="/images/partners/octet.png"
                  alt=""
                  className="p-logo"
                />
              </Link>
            </div>
            <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
              <Link
                to={"https://polygon.technology/"}
                target={"_blank"}
                className="p-logobox"
              >
                <img
                  src="/images/partners/polygon.png"
                  alt=""
                  className="p-logo"
                />
              </Link>
            </div>
            <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
              <a className="p-logobox">
                <img
                  src="/images/partners/taxtrix.webp"
                  alt=""
                  className="p-logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LandingContainer2;
