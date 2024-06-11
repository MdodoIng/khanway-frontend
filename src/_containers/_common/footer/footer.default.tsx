import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const DefaultFooter = () => {
    const {t} = useTranslation();
    const path = useLocation();

    if (path.pathname.includes('/auth') || path.pathname.includes('terms')) return (<></>)

    if (path.pathname === '/')
        return

    return (
        <>
            <div className="bottom section-padding triangle-top-dark triangle-bottom-dark">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="bottom-logo"><img className="pb-3" src="/images/logo.png" alt=""/>
                                <p>{t(`footer.description`)}</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-8 col-sm-8">
                            <div className="bottom-widget">
                                <h4 className="widget-title"></h4>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <ul>
                                            <li><Link to="/">{t(`footer.menu1`)}</Link></li>
                                            <li><Link to="/minting">{t(`footer.menu2`)}</Link></li>
                                            <li><Link to="/market">{t(`footer.menu3`)}</Link></li>
                                            <li><Link to={`/terms/${localStorage.getItem('khanway_language') ?? 'en'}/terms-of-service`} target={'_blank'}>{t(`footer.menu7`)}</Link></li>
                                            <li><Link to={`/terms/${localStorage.getItem('khanway_language') ?? 'en'}/terms-of-nfw`} target={'_blank'}>{t(`footer.menu9`)}</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <ul>
                                            <li><Link to="/profile/nfw">{t(`footer.menu4`)}</Link></li>
                                            <li><Link to="/profile">{t(`footer.menu5`)}</Link></li>
                                            {/*<li><Link to="/profile/setting">{t(`footer.menu6`)}</Link></li>*/}
                                            <li><Link
                                                to={`/terms/${localStorage.getItem('khanway_language') ?? 'en'}/privacy-policy`}
                                                target={'_blank'}>{t(`footer.menu8`)}</Link></li>
                                            <li><Link to={'/contactus'}>{t(`footer.menu11`)}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="copyright">
                                <p>© Copyright 2023 <a href="#">KhanHwang's</a>All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="footer-social">
                                <ul>
                                    <li><a href="https://t.me/Khanteum_Channel"><i className="ri-telegram-fill"></i></a></li>
                                    <li><a href="https://t.me/khanteum_official"><i className="ri-telegram-fill"></i></a></li>
                                    <li><a href="https://www.facebook.com/khanteum.fb" target="_blank"><i className="ri-facebook-circle-fill"></i></a></li>
                                    <li><a href="https://twitter.com/KHAN_ZZANG" target="_blank"><i className="ri-twitter-fill"></i></a></li>
                                    <li><a href={`https://www.youtube.com/${localStorage.getItem('khanway_language') === 'ko' ? 'c/khanteum' : '@KHAN_ZZANG '}`} target="_blank"><i className="ri-youtube-fill"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DefaultFooter;
