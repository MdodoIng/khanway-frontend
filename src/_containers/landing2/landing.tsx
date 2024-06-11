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
import {
  YouTube as YoutubeIcon,
  Twitter as TwitterIcon,
  Telegram as TelegramIcon,
} from "@mui/icons-material";
import image1 from "/images/latest/7.png";
import image2 from "/images/latest/7.png";
// import image22 from "../../assets/image22.png"
// import image11 from "../../assets/image1.png"
// import image4 from "../../assets/image4.png"
// import image5 from "../../assets/image5.png"
// import Slider, { Settings } from "react-slick";
// import { useMediaQuery } from "react-responsive";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useStylesheet from "@helper/useStylesheet";

import greenEgg from "../../assets/landing/green egg.png";
import sliverEgg from "../../assets/landing/silver egg.png";
import orangeEgg from "../../assets/landing/orange egg.png";
import purpleEgg from "../../assets/landing/purple eggs.png";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import dots from "../../assets/landing/langing hero section dots.svg";

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
  useStylesheet("/css/landing.css");
  useStylesheet("/css/landing-add3.css");
  useStylesheet("/css/landing-add2.css");
  useStylesheet("/css/landing-add.css");
  useStylesheet("/css/landing_page.css");
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const isKr = i18n.language === "ko";

  AOS.init({
    duration: 1200,
    easing: "ease-in-out-back",
  });
  const [selectedQ, setSelectedQ] = useState(0);

  const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(setInitialStateAction());
  }, []);

  const eggs = [greenEgg, purpleEgg, orangeEgg, sliverEgg];

  const image = [image1, image2, image1, image2];

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

  const twoEggsInBoxes = [
    {
      title: t(`landing.section3_silver_title`),
      subtitle: t(`landing.section3_silver_description`),
      image: "/images/latest/10.png",
    },
    {
      title: t(`landing.section3_gold_title`),
      subtitle: t(`landing.section3_gold_description`),
      image: "/images/latest/11.png",
    },
  ];

  const partners = [
    {
      link: "https://hexlant.com/",
      image: "/images/partners/hexlant.png",
    },
    {
      link: "https://khanaires.com/",
      image: "/images/partners/khansaires.png",
    },
    {
      link: "https://m.khanteum.com/",
      image: "/images/partners/khanteum.png",
    },
    {
      link: "https://www.tinytingel.ai/",
      image: "/images/partners/lighting.png",
    },
    {
      link: "https://jervis.kr/",
      image: "/images/partners/jervis.png",
    },
    {
      link: "https://www.aasraa.in/",
      image: "/images/partners/aasraa.png",
    },
    {
      link: "https://www.itcglobal.io/",
      image: "/images/partners/global.png",
      bg: "#191919",
    },
    {
      link: "https://www.meydanfz.ae/",
      image: "/images/partners/meydan.png",
    },
    {
      link: "https://octet.im",
      image: "/images/partners/octet.png",
      bg: "#39999E",
    },
    {
      link: "https://polygon.technology/",
      image: "/images/partners/polygon.png",
    },
    {
      link: "",
      image: "/images/partners/taxtrix.webp",
    },
  ];
  const teamMembers = [
    {
      title: "Ha Jung KIM",
      subtitle: "CEO(Dubai/India)",
      image: "/images/Member/member-KIM.png",
    },
    {
      title: "Seok-Gu Ryu",
      subtitle: "CEO(Korea)",
      image: "/images/Member/member-Seok-GuRyu.png",
    },
    {
      title: "Chris Cheon",
      subtitle: "CIO (Dubai)",
      image: "/images/Member/member-01.png",
    },
    {
      title: "Shiju BJ",
      subtitle: "CMO (Dubai)",
      image: "/images/Member/member-02.png",
    },
    {
      title: "Raju Ratna",
      subtitle: "Director (India)",
      image: "/images/Member/member-03.png",
    },
    {
      title: "Mangal Tiwari",
      subtitle: "Liaison Director (India)",
      image: "/images/Member/member-05.png",
    },
    {
      title: "Bok-Won Kim",
      subtitle: "CFO(Korea)",
      image: "/images/Member/member-Bok-WonKim.png",
    },
    {
      title: "Zehra Ahmed Khan",
      subtitle: "Executive Assistant to CIO/Head of Administration",
      image: "/images/Member/member-06.png",
    },
    {
      title: "Michael Harry John",
      subtitle: "Development Head Manager (Dubai)",
      image: "/images/Member/member-09.png",
    },
    {
      title: "Vishnu Moorthy",
      subtitle: "Head of Malaysia/Indonesia",
      image: "/images/Member/member-07.png",
    },
    {
      title: "Binu Thankappan",
      subtitle: "Maintenance Manager (Dubai)",
      image: "/images/Member/member-081.png",
    },
    {
      title: "Syeda Samreen",
      subtitle: "WEF Manager",
      image: "/images/Member/member-Syeda.png",
    },
    {
      title: "Pragana Majji",
      subtitle: "WEF Manager",
      image: "/images/Member/member-Pragana.png",
    },
    {
      title: "Kyung-Nam Kim",
      subtitle: "Foreign Investment Director (Korea/India)",
      image: "/images/Member/member-Kyung-NamKim.png",
    },
    {
      title: "David, Yoo",
      subtitle: "Chief R&D Officer(Korea)",
      image: "/images/Member/member-11.png",
    },
    {
      title: "Junho Lee",
      subtitle: "R&D Team Leader(Korea)",
      image: "/images/Member/member-10.png",
    },
    {
      title: "Young-Hyun Lee",
      subtitle: "Khanteum App Development Team Leader(Korea)",
      image: "/images/Member/member-Young-HyunLee.png",
    },
    {
      title: "Ayesha Zeba",
      subtitle: "WEF Manager",
      image: "/images/Member/member-Ayesha.png",
    },
  ];
  const locations = [
    {
      title: "Khanaires India",
      subtitle:
        "Flat no 405,Botcha Squara,Passport Building,Birla Jn,Visakhapatnam, Visakhapatnam,Andhra Pradesh, India - 530007",
      image: "/images/country/india.svg",
    },
    {
      title: "Khanaires Korea",
      subtitle:
        "Teatown building 203, 25 Digital-ro 32ga-gil, Guro-gu, Seoul, Republic of Korea - 08392",
      image: "/images/country/korea.svg",
    },
    {
      title: "Khanaires Dubai",
      subtitle:
        "Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba,Dubai, U.A.E",
      image: "/images/country/united_arab_emirates.svg",
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
  }, [currentIndex, image.length]);
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
  }, [data.length, index]);

  return (
    <div id="main-wrapper" className={`main-bg ${isKr ? "langKr" : ""}`}>
      <div className="l-banner-bg">
        <Header />

        <img src={dots} alt="" className="dots" />
        <div className="container l-banner">
          <div className={`row heroSection `}>
            <div className="col-xl-12 col-lg-12 col-12" data-aos="fade-up">
              <div className="">
                <h2>{t(`header.menu1`)}</h2>
                <h1>{t(`header.menu3`)}</h1>
                <p className="">{t(`header.menu4`)}</p>
                {/* <p className="p2">{names[currentIndex]}</p> */}
                <Link to="/minting" className="" data-aos="zoom-in">
                  {t(`header.menu5`)}
                </Link>
              </div>
            </div>

            <div className="col-xl-12 col-lg-12 col-12 bn-imgbox">
              {/* <img src="/images/Landing/random.png" alt="" className="l-banner-img" /> */}
              <div className="__bottomEggs">
                {eggs.map((item, idx) => (
                  <img
                    data-aos="slide-up"
                    data-aos-delay={idx * 50}
                    data-aos-once="true"
                    key={idx}
                    src={item}
                    alt=""
                    loading="lazy"
                    style={{
                      paddingTop: `${idx < eggs.length - 1 ? idx * 40 : 0}px`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* khanways egh */}
        <section className="container KhanHwang--about gridc">
          <div className="left" data-aos="fade-right">
            <h2>{t(`header.menu1`)}</h2>
            <p>{t(`landing.section7_description`)}</p>
          </div>
          <div className="right" data-aos="fade-left">
            <img
              src="images/roulette800*450.gif"
              alt=""
              width={400}
              height={400}
            />
          </div>
        </section>
      </div>

      <div className="golden-silver container twoEggsInBoxes">
        {twoEggsInBoxes.map((item, idx) => (
          <div
            key={idx}
            className="single"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-delay={idx + 1 * 150}
          >
            <img src={item.image} alt="silver-egg" />
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="container l-getegg" data-aos="fade-up">
        <div
          style={{
            maxWidth: "1200px",
          }}
          className="bg-area container"
        >
          <div className="row" data-aos="fade-up">
            <div className="getegg-con">
              <div className="btn-box">
                {/*<h2 className="title">{t(`landing.buy_egg`)}</h2>*/}
                <a href="" className="getegg-con-btn">
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
      {/* breadcrumbs */}
      <section className="explore">
        <div
          style={{
            maxWidth: "1200px",
          }}
          className="container"
        >
          <div
            style={{
              width: "100%",
              marginInline: 0,
            }}
            className="row"
          >
            <div className="slider" style={{ padding: "0px!important" }}>
              <div className="col-xl-12 col-sm-12">
                <div className="" data-aos="fade-up-left">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    {data1?.map((obj, i: number) => {
                      return (
                        <li
                          key={i}
                          role="presentation"
                          className={
                            "single_one" + (i === selectedQ ? " active" : "")
                          }
                          onClick={() => setSelectedQ(i)}
                          id={obj?.id}
                          data-bs-toggle="pill"
                          data-bs-target={`#${obj?.id}`}
                          aria-controls={obj?.id}
                          aria-selected="true"
                        >
                          {obj?.id}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    {data1?.map((obj, i: number) => {
                      return (
                        <div
                          key={i}
                          className={
                            "tab-pane fade " +
                            (i === selectedQ ? " show active" : "")
                          }
                          id={obj?.id}
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <div className="slider-heading">
                            <div>
                              <h1
                                style={{
                                  padding: 0,
                                }}
                              >
                                {obj?.heading}
                              </h1>
                              <div
                                style={{
                                  padding: 0,
                                }}
                                className="slider-text"
                              >
                                {obj?.desc}
                              </div>
                            </div>
                            <div>
                              <img
                                src="/images/multi eggs.png"
                                width={400}
                                height={400}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* carousel */}
      <section className="container" style={{ paddingBottom: "0px!important" }}>
        <div className="slider" style={{ paddingBottom: "0px!important" }}>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            autoPlaySpeed={2000}
            // customTransition="all .5"
            transitionDuration={500}
            autoPlay={true}
            infinite={true}
            arrows={false}
          >
            <a
              href="https://www.youtube.com/watch?v=_tpYKGpqKjw&t"
              target="_blank"
            >
              <img src="/images/Landing/carousel/SIR.png" alt="" />
            </a>

            <a
              href="https://www.youtube.com/watch?v=_tpYKGpqKjw&t"
              target="_blank"
            >
              <img src="/images/Landing/social/g1.png" alt="" />
            </a>

            <a
              href="https://www.youtube.com/watch?v=_tpYKGpqKjw&t"
              target="_blank"
            >
              <img src="/images/Landing//social/g2.png" alt="" />
            </a>

            <a
              href="https://www.youtube.com/watch?v=_tpYKGpqKjw&t"
              target="_blank"
            >
              <img src="/images/Landing/social/g5.png" alt="" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=_tpYKGpqKjw&t"
              target="_blank"
            >
              <img src="/images/Landing/social/g6.png" alt="" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=_tpYKGpqKjw&t"
              target="_blank"
            >
              <img src="/images/Landing/social/g7.png" alt="" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=_tpYKGpqKjw&t"
              target="_blank"
            >
              <img src="/images/Landing/social/g8.png" alt="" />
            </a>
          </Carousel>
        </div>
      </section>

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

      {/* social-media */}
      <div
        style={{
          maxWidth: "1200px",
        }}
        className="container"
      >
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

      <section className="influencer-box">
        <div
          style={{
            maxWidth: "1200px",
          }}
          className="container margin"
        >
          <div className="influencer agg">
            <img
              src="/images/latest/mix.png"
              className="inf-img"
              alt="img"
              data-aos="fade-up-right"
            />

            <div className="influencer-text" data-aos="fade-up-right">
              <h1>{t(`landing.section3_title`)}</h1>
              <p className="top">{t(`landing.section3_description1`)}</p>
              <p>{t(`landing.section3_description2`)}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="influencer-box ">
        <div
          style={{
            maxWidth: "1200px",
          }}
          className="container"
        >
          <div className="influencer margin">
            <img
              src="/images/k-phone.png"
              alt="img"
              data-aos="fade-up-right"
              className="mob"
            />

            <div className="influencer-text grid" data-aos="fade-up-right">
              <h1>{t(`landing.section4_title`)}</h1>
              <p className="top">{t(`landing.section4_description`)}</p>
            </div>
            <div className="desk">
              <img
                src="/images/k-phone.png"
                alt="img"
                data-aos="fade-up-right"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="influencer-box">
        <div
          style={{
            maxWidth: "1200px",
          }}
          className="container "
        >
          <div className="influencer meta margin">
            <img src="/images/img006.png" alt="img" data-aos="fade-up-left" />

            <h1 data-aos="fade-up-right" className="">
              {t(`landing.section5_title`)}
            </h1>
          </div>
        </div>
      </div>
      <div className="carousel">
        <div className="container partners">
          <div
            style={{
              padding: 0,
              maxWidth: "1200px",
            }}
            className="row margin container"
          >
            <h1 data-aos="fade-up">{t(`landing.sponsers`)}</h1>

            <div className=" partners-con" data-aos="fade-up">
              {partners.map((item, idx) => (
                <div key={idx} className="">
                  <Link
                    to={item.link}
                    target={"_blank"}
                    className="p-logobox"
                    style={{
                      background: item.bg ? item.bg : "#FFFFFF",
                      borderColor: item.bg ? item.bg : "#FFFFFF",
                    }}
                  >
                    <img src={item.image} alt="" className="p-logo" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/*  */}
          <div
            style={{
              maxWidth: "1200px",
            }}
            className="l-video container"
          >
            <div className="row">
              <div className="col-xl-12 video-con"></div>
              <div
                style={{
                  padding: 0,
                }}
                className="col-sm-12 mt-12"
              >
                <div
                  className="bn-txtbox center Why-Khanway"
                  data-aos="fade-up-right"
                >
                  {/* <h2>{t(`landing.youtube_title`)}🌐💡</h2> */}
                  <h1>{t(`landing.youtube_title1`)}</h1>
                </div>
              </div>
              <div className="col-xl-6 col-sm-12">
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
              <div className="col-xl-6 col-sm-12 mobMt12">
                <div className="bn-txtbox" data-aos="fade-up-left">
                  <ol className="ul">
                    <li>
                      <strong>{data[0][0].lable}:</strong> {data[0][0].text}
                    </li>
                    <li>
                      <strong>{data[0][1].lable}:</strong> {data[0][1].text}
                    </li>
                    <li className="">
                      <strong>{data[0][2].lable}:</strong> {data[0][2].text}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div
              className="explore"
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              data-aos-offset="200"
              data-aos-delay="700"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            >
              <img
                className="pot-bg"
                src="/images/Landing/pot.png"
                alt=""
                draggable="false"
              />{" "}
              <div
                className="bottomPotBg"
                style={{ marginTop: "80px", maxWidth: "1110px",
                  marginInline: "auto"
                 }}
              >
                <div className="col-sm-12 mt-8" style={{ marginTop: "40px" }}>
                  <div className="bn-txtbox pot" data-aos="fade-up-left">
                    <ol
                      style={{
                        width: "100%",
                      }}
                      className="ul"
                    >
                      <li>{t(`landing.pot_desc1`)}</li>
                      <li>{t(`landing.pot_desc2`)}</li>
                      <li>{t(`landing.pot_desc3`)}</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="t-member ">
            <div className="container k-member">
              <div
                style={{
                  maxWidth: "1200px",
                }}
                className="row margin"
                data-aos="fade-up"
              >
                <div
                  style={{
                    padding: 0,
                  }}
                  className="col-xl-12 member-title"
                  data-aos="fade-up"
                >
                  <h2 className="khanway">Khanway</h2>
                  <div className="influencer-text">
                    <h1>{t(`landing.section6_title`)}</h1>
                  </div>
                </div>
                <div
                  style={{
                    padding: 0,
                  }}
                  className="col-xl-12 member-content"
                >
                  {teamMembers.map((item, idx) => (
                    <div
                      key={idx}
                      className=" col-sm-3 col-4 member"
                      data-aos="fade-up"
                      data-aos-once="false"
                    >
                      <div className="m-card">
                        <img src={item.image} alt="" className="m-img" />
                        <p className="m-name">{item.title}</p>
                        <p className="job">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="countryTitle ">
            <h1>{t(`Offices.title`)}</h1>
          </div>
          <div className={"country container"}>
            {locations.map((item, idx) => (
              <div key={idx} className={"silver w-100"} data-aos="fade-up">
                <img src={item.image} alt={""} />
                <h3>{item.title}</h3>

                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* border */}

      {/* <div className="dummi_margn ">
        <span />
        <span />
      </div> */}

      {/*  */}
    </div>
  );
};

export default LandingContainer2;