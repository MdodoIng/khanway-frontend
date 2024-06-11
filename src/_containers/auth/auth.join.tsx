import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const AUthJoinContainer = () => {
    const {t} = useTranslation()
    return (
        <div className="authincation section-padding">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-xl-5 col-md-6">
                        {/*<div className="alert alert-success  fade show d-flex justify-content-between" role="alert">*/}
                        {/*    <span>Please enter verification token from your device</span>*/}
                        {/*    <span className="c-pointer" data-dismiss="alert">*/}
                        {/*        <i className="ri-close-line"></i>*/}
                        {/*    </span>*/}
                        {/*</div>*/}
                        <div className="mini-logo text-center my-3">
                            <Link to="/"><img src="/images/logo.png" alt=""/></Link>
                        </div>
                        <div className="auth-form card mt-4">
                            <div className="card-body">
                                <div className="col-12">
                                    <img src="/images/welcome.png" alt="" className="join-img"/>
                                </div>
                                <h4 className="card-title mt-1 text-center mb-3">{t(`join.description`)}</h4>
                                <div className="col-12">
                                    <div className="text-center">
                                        <Link to={'/auth/login'} type="button" className="btn btn-primary btn-block w100">{t(`join.button`)}</Link>
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

export default AUthJoinContainer