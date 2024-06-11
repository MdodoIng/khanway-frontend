import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export type ProfileTitleComponentProps = {
    path: string;
}
const ProfileTitleComponent = (props: ProfileTitleComponentProps) => {
    const {t} = useTranslation();
    return (
        <div className="page-title">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-6">
                        <div className="page-title-content">
                            <h3>{t(`profile_title.title`)}</h3>
                            <p className="mb-2">{t(`profile_title.subtitle`)} </p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="breadcrumbs">
                            <Link to="/">{t(`profile_title.home`)} </Link>
                            <span><i className="ri-arrow-right-s-line"></i></span>
                            <Link to="/profile">{t(`profile_title.title`)}</Link>
                            {
                                props.path !== 'My Page' &&
                                <>
                                    <span><i className="ri-arrow-right-s-line"></i></span>
                                    <a>{props.path}</a>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileTitleComponent;