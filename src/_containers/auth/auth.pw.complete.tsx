import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const AuthPWCompleteContainer = () => {
    const {t} = useTranslation();
    return (
        <div className="authincation section-padding">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-xl-5 col-md-6">
                        {/*<div className="alert alert-success  fade show d-flex justify-content-between" role="alert">*/}
                        {/*    <span>Please enter verification token from your device</span>*/}
                        {/*    <span className="c-pointer" data-dismiss="alert"><i className="ri-close-line"></i></span>*/}
                        {/*</div>*/}
                        <div className="mini-logo text-center my-3">
                            <Link to="/"><img src="/images/logo.png" alt=""/></Link>
                            <h4 className="card-title mt-5"></h4>
                        </div>
                        <div className="auth-form card">
                            <div className="card-body">
                                <div className="col-12 find-txtbox">
                                    <p className="title">{t(`auth_pw_complete.title`)}</p>
                                    <p className="txt">{t(`auth_pw_complete.description1`)} <br/>{t(`auth_pw_complete.description2`)}</p>
                                </div>
                                <div className="col-12">
                                    <div className="text-center">
                                        <Link to="/login" type="submit" className="btn btn-primary btn-block w100">{t(`auth_pw_complete.button`)}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPWCompleteContainer;