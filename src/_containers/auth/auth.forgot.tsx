import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const AuthForgotContainer = () => {
    const { t } = useTranslation();
    return (
        <div className="authincation section-padding">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-xl-4 col-md-5">
                        <div className="mini-logo text-center my-3">
                            <Link to="/">
                                <img src="/images/logo.png" alt=""/>
                            </Link>
                            <h4 className="card-title mt-5">{t(`auth_forgot.title`)}</h4>
                        </div>
                        <div className="auth-form card">
                            <div className="card-body">
                                <Link to="/auth/find-id" className="btn btn-primary-dark w100 mb12">{t(`auth_forgot.id_button`)}</Link>
                                <Link to="/auth/find-pw" className="btn btn-primary-dark w100">{t(`auth_forgot.pw_button`)}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForgotContainer