import {Link} from "react-router-dom";
import {RootState} from "@reducer/root.reducer.tsx";
import {useSelector} from "react-redux";
import {t} from "i18next";

const MarketUse = () => {
    const {user} = useSelector((root: RootState) => root.AuthReducer);

    return (
        <div className="container m-use">
            <div className="row">

                <div className="col-xl-12 use-title aos-init aos-animate" data-aos="fade-up">
                    <h1 className="text-line-deco">{t('market.use_title')}</h1>
                    <h4 style={{color: "#c0ccda"}}>{t('market.use_subtitle')}</h4>
                </div>

                <div className="col-xl-6 col-lg-6 col-12 use-items" data-aos="fade-up">
                    <div className="usebox">
                        <div className="pointsquare">KYC</div>
                        <div className="textbox">
                            <h3>{t('market.use_case1_title')}</h3>
                            <p>{t('market.use_case1_description')}</p>
                        </div>
                        <Link to={user ? '/auth/login' : '/auth/login'} className="explore">Explore <i
                            className="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-12 use-items" data-aos="fade-up">
                    <div className="usebox">
                        <div className="pointsquare">1+1</div>
                        <div className="textbox">
                            <h3>{t('market.use_case2_title')}</h3>
                            <p>{t('market.use_case2_description')}</p>
                        </div>
                        <Link to={user ? '/auth/login' : '/auth/login'} className="explore">Explore <i
                            className="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-12 use-items" data-aos="fade-up">
                    <div className="usebox">
                        <div className="pointsquare">9</div>
                        <div className="textbox">
                            <h3>{t('market.use_case3_title')}</h3>
                            <p>{t('market.use_case3_description')}</p>
                        </div>
                        <Link to={`/terms/${localStorage.getItem('khanway_language') ?? 'en'}/terms-of-nfw`}
                              className="explore">Explore <i className="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-12 use-items" data-aos="fade-up">
                    <div className="usebox">
                        <div className="pointsquare">$</div>
                        <div className="textbox">
                            <h3>{t('market.use_case4_title')}</h3>
                            <p>{t('market.use_case4_description')}</p>
                        </div>
                        <Link to={user ? '/profile/wallet' : '/auth/login'} className="explore">Explore <i className="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketUse;