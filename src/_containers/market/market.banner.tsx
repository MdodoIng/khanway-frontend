import {t} from "i18next";
import {Link} from "react-router-dom";

const MarketBanner = () => {
    return (
        <div className="container l-banner">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                    <div className="bn-txtbox">
                        <h2>{t('market.banner_title')}</h2>
                        <h1>{t('market.banner_subtitle')}</h1>
                        <p className="p2">{t('market.banner_description')}</p>
                        <br/>
                        <Link to={"/minting"} className="btn btn-grad mb12" data-aos="fade-up">New NFW Minting</Link>
                        <Link to={"/market/explore"} className="btn btn-round-primary mb12" data-aos="fade-up">Buy from the market</Link>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-12 bn-imgbox" data-aos="fade-up">
                    <div className="mb-decobox">
                        <div className="nfw-card">
                            <div className="nfw-item"></div>
                        </div>

                        <div className="txtbox">
                            <img src="/images/icon-profile.png" alt="" className="owned-img"/>

                            <div className="txt">
                                <div className="title">Owned by</div>
                                <div className="owned">Khanway</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketBanner;