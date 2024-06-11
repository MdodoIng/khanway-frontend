import ProfileTitleComponent from "@container/profile/profile.title.tsx";
import ProfileNavigationComponent from "@container/profile/profile.navigation.tsx";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const ProfileSettingContainer = () => {
    const {t} = useTranslation();
    return (
        <div id="main-wrapper" className="front">
            <ProfileTitleComponent path={'Setting'}/>
            <div className="profile-page">
                <div className="container">
                    <ProfileNavigationComponent />
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="card-header px-0">
                                <h4 className="card-title">{t(`profile_setting.title1`)} </h4>
                            </div>
                            <Link  to="https://paypal.com" target={"_blank"} className="paypal-connect">
                                <img src="/images/paypal2.png" alt="" className="paypal-img"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSettingContainer;