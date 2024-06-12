import {useTranslation} from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setInitialStateAction} from "@action/auth.action.tsx";

const LandingContainer = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out-back'
    });

    useEffect(() => {
        dispatch(setInitialStateAction());
    }, []);

    return (
        <div id="main-wrapper" className="front main-bg">
            <div className="container l-banner">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                        <div className="bn-txtbox">
                            <h2>{t(`landing.section1_subtitle`)}</h2>
                            <h1>{t(`landing.section1_title`)}</h1>
                            <p className="p2">{t(`landing.section1_description`)}</p>
                            <Link to={'/minting'} className="btn btn-grad mt24" data-aos="fade-up">{t(`landing.section1_button`)}</Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12 bn-imgbox" data-aos="fade-up">
                        <img src="/images/khan003.png" alt="" className="l-banner-img"/>
                    </div>
                </div>
            </div>
            <div className="container l-video">
                <div className="row">
                    <div className="col-xl-12 video-title" data-aos="fade-up">
                        <h2>{t(`landing.section2_subtitle`)}</h2>
                        <h1 className="text-line-deco">{t(`landing.section2_title`)}</h1>
                    </div>
                    <div className="col-xl-12 video-con">
                        <iframe src="https://www.youtube.com/embed/RArtLpO1hWM?si=rsvhgFi21jZCmkh_"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen={true}></iframe>
                    </div>
                </div>
            </div>

            <div className="container l-egg">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                        <div className="bn-txtbox">
                            <h1 className="text-line-deco">{t(`landing.section3_title`)}</h1>
                            <p className="p2">{t(`landing.section3_description1`)}<br/><br/>{t(`landing.section3_description2`)}
                            </p>


                            <div className="kind-box">
                                <div className="kind-item">{t(`landing.section3_category1`)}</div>
                                <div className="kind-item">{t(`landing.section3_category2`)}</div>
                                <div className="kind-item">{t(`landing.section3_category3`)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                        <img src="/images/agg.png" alt=""/>
                    </div>
                </div>

                <div className="row">
                    <div className="l-text-con" data-aos="fade-up">
                        <div className="l-box">
                            <img src="/images/silver-egg.png" alt="" className="egg-img"/>
                            <h2 className="tit">{t(`landing.section3_silver_title`)}</h2>
                            <p className="txt">{t(`landing.section3_silver_description`)}</p>
                        </div>
                        <div className="r-box">
                            <img src="/images/gold-egg.png" alt="" className="egg-img"/>
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
                        <img src="/images/random-img.png" alt=""/>
                    </div>

                    <div className="l-txtbox" data-aos="fade-up">
                        {t(`landing.section7_description`)}
                    </div>
                </div>
            </div>

            <div className="container l-getegg" data-aos="fade-up">
                <div className="bg-area">
                    <div className="row" data-aos="fade-up">
                        <div className="getegg-con">
                            <div className="btn-box">
                                <h2 className="title">Coming Soon</h2>
                                <a className="btn btn-grad">{t(`landing.section1_button`)}</a>
                            </div>

                            <img src="/images/get-img-01.png" alt="" className="get-item01 moving01"/>
                            <img src="/images/get-img-02.png" alt="" className="get-item02 moving02"/>
                            <img src="/images/get-img-03.png" alt="" className="get-item03 moving03"/>
                            <img src="/images/get-img-04.png" alt="" className="get-item04 moving04"/>

                            <img src="/images/get-img-05.png" alt="" className="get-item05 moving04"/>
                            <img src="/images/get-img-06.png" alt="" className="get-item06 moving01"/>
                            <img src="/images/get-img-07.png" alt="" className="get-item07 moving02"/>
                            <img src="/images/get-img-08.png" alt="" className="get-item08 moving03"/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container khanaires">
                <div className="row" data-aos="fade-up">
                    <div className="col-xl-6 col-lg-6 col-12 img-box">
                        <img src="/images/k-phone.png" alt="" className="khan-phone"/>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12 txt-box">
                        <h1 className="text-line-deco">{t(`landing.section4_title`)} </h1>
                        <p className="p3">{t(`landing.section4_description`)}</p>
                    </div>
                </div>

                <div className="row" data-aos="fade-up">

                    <div className="col-xl-6 col-lg-6 col-12 txt-box">
                        <h2 className="text-line-deco">{t(`landing.section5_title`)}
                        </h2>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-12 img-box2">
                        <img src="/images/img006.png" alt="" className="khan-phone"/>
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

                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/Ha-Jung-KIM.png" alt="" className="m-img"/>
                                <p className="m-name">Ha Jung KIM</p>
                                <p className="job">CEO (Dubai / India)</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-Seok-GuRyu.png" alt="" className="m-img"/>
                                <p className="m-name">Seok-Gu Ryu </p>
                                <p className="job">CEO (Korea) </p>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-01.png" alt="" className="m-img"/>
                                <p className="m-name">Chris Cheon</p>
                                <p className="job">CIO (Dubai)</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-02.png" alt="" className="m-img"/>
                                <p className="m-name">Shiju BJ</p>
                                <p className="job">CMO (Dubai)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-03.png" alt="" className="m-img"/>
                                <p className="m-name">Raju Ratna</p>
                                <p className="job">Director (India)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-05.png" alt="" className="m-img"/>
                                <p className="m-name">Mangal Tiwari</p>
                                <p className="job">Liaison Director (India)</p>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-Bok-WonKim.png" alt="" className="m-img"/>
                                <p className="m-name">Bok-Won Kim </p>
                                <p className="job">CFO (Korea)</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-06.png" alt="" className="m-img"/>
                                <p className="m-name">Zehra Ahmed Khan</p>
                                <p className="job">Executive Assistant to CIO/Head of Administration</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-09.png" alt="" className="m-img"/>
                                <p className="m-name">Michael Harry John</p>
                                <p className="job">Development Head Manager (Dubai)</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-07.png" alt="" className="m-img"/>
                                <p className="m-name">Vishnu Moorthy</p>
                                <p className="job">Head of Malaysia/Indonesia</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-08.png" alt="" className="m-img"/>
                                <p className="m-name">Binu Thankappan</p>
                                <p className="job">Maintenance Manager (Dubai)</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-Syeda.png" alt="" className="m-img"/>
                                <p className="m-name">Syeda Samreen</p>
                                <p className="job">WEF Manager
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-Pragana.png" alt="" className="m-img"/>
                                <p className="m-name">Pragana Majji </p>
                                <p className="job">WEF Manager</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-Kyung-NamKim.png" alt="" className="m-img"/>
                                <p className="m-name">Kyung-Nam Kim</p>
                                <p className="job">Foreign Investment Director (Korea/India)</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-11.png" alt="" className="m-img"/>
                                <p className="m-name">David, Yoo</p>
                                <p className="job">Chief R&D Officer(Korea)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-10.png" alt="" className="m-img"/>
                                <p className="m-name">Junho Lee </p>
                                <p className="job">R&D Team Leader(Korea)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-Young-HyunLee.png" alt="" className="m-img"/>
                                <p className="m-name">Young-Hyun Lee</p>
                                <p className="job">Khanteum App Development Team Leader(Korea)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-4 member" data-aos="fade-up">
                            <div className="m-card">
                                <img src="/images/member-Ayesha.png" alt="" className="m-img"/>
                                <p className="m-name">Ayesha Zeba</p>
                                <p className="job">WEF Manager</p>
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
                            <Link to={'https://hexlant.com/'} target={'_blank'} className="p-logobox">
                                <img src="/images/partners/hexlant.png" alt="" className="p-logo"/>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
                            <Link to="https://khanaires.com/" target={'_blank'} className="p-logobox">
                                <img src="/images/partners/khansaires.png" alt="" className="p-logo"/>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
                            <Link to="https://m.khanteum.com/" target={'_blank'} className="p-logobox">
                                <img src="/images/partners/khanteum.png" alt="" className="p-logo"/>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
                            <Link to={'https://www.tinytingel.ai/'} target={'_blank'} className="p-logobox">
                                <img src="/images/partners/lighting.png" alt="" className="p-logo"/>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
                            <Link to={'https://jervis.kr/'} target={'_blank'} className="p-logobox">
                                <img src="/images/partners/jervis.png" alt="" className="p-logo"/>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
                            <Link to={'https://www.aasraa.in/'} target={'_blank'} className="p-logobox">
                                <img src="/images/partners/aasraa.png" alt="" className="p-logo"
                                     style={{maxWidth: '90px'}}/>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
                            <Link to={'https://europeandigitaluniversity.com'} target={'_blank'} className="p-logobox">
                                <img src="/images/partners/european.png" alt="" className="p-logo"/>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
                            <Link to={'https://www.itcglobal.io/'} target={'_blank'} className="p-logobox global-bg">
                                <img src="/images/partners/global.png" alt="" className="p-logo"/>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
                            <Link to={'https://www.meydanfz.ae/'} target={'_blank'} className="p-logobox">
                                <img src="/images/partners/meydan.png" alt="" className="p-logo"/>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
                            <Link to={'https://octet.im'} target={'_blank'} className="p-logobox octet-bg">
                                <img src="/images/partners/octet.png" alt="" className="p-logo"/>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
                            <Link to={'https://polygon.technology/'} target={'_blank'} className="p-logobox">
                                <img src="/images/partners/polygon.png" alt="" className="p-logo"/>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-6 col-12 p-item">
                            <Link to={'https://taxtrix.in/'} target={'_blank'} className="p-logobox">
                                <img src="/images/partners/taxtrix.webp" alt="" className="p-logo"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingContainer;