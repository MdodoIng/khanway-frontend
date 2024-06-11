import {useState} from "react";
import {useAuthFindSmsSendMutation, useAuthFindSmsVerifyMutation} from "@graphql/graphql.ts";
import {RootState} from "@reducer/root.reducer.tsx";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {useTranslation} from "react-i18next";

const AuthPWVerifyContainer = () => {
    const {t} = useTranslation();
    const navigation = useNavigate();
    const [verifyCode, setVerifyCode] = useState('');
    const {countryCode, phoneNumber, email} = useSelector((root: RootState) => root.AuthReducer);
    const [onAuthFindSMSVerify] = useAuthFindSmsVerifyMutation();
    const [onAuthFindSMSSend] = useAuthFindSmsSendMutation();

    const onClickVerify = async () => onAuthFindSMSVerify({
        variables: {
            input: {
                phoneNumber: phoneNumber!,
                countryCode: countryCode!,
                verifyCode: verifyCode
            }
        }
    }).then(response => {
        if (response.data?.authFindSMSVerify?.success === true)
            navigation('/auth/find-pw/new');
        else
            Swal.fire({
                icon: 'error',
                title: t(`auth_pw_verify.err_title`),
                text: t(`auth_pw_verify.err_msg`),
            });

        return;
    }).catch(() =>  Swal.fire({
        icon: 'error',
        title: t(`auth_pw_verify.err_title`),
        text: t(`auth_pw_verify.err_msg`),
    }));

    const onClickResend = async () => onAuthFindSMSSend({
        variables: {
            input: {
                email: email,
                phoneNumber: phoneNumber!,
                countryCode: countryCode!
            }
        }
    }).then(response => {
        if (response.data?.authFindSMSSend?.success === true)
            return Swal.fire({
                icon: 'success',
                title: t(`auth_pw_verify.resend_success`),
                text: t(`auth_pw_verify.resend_success_msg`),
            });
        else
            return Swal.fire({
                icon: 'error',
                title: t(`auth_pw_verify.resend_fail`),
                text: t(`auth_pw_verify.resend_fail_msg`),
            });
    }).catch(_e => Swal.fire({
        icon: 'error',
        title: t(`auth_pw_verify.resend_fail`),
        text: t(`auth_pw_verify.resend_fail_msg`),
    }));

    return (
        <div className="authincation section-padding">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-xl-5 col-md-6">
                        <div className="alert alert-success  fade show d-flex justify-content-between" role="alert">
                            <span>{t(`auth_pw_verify.alert`)}</span>
                            <span className="c-pointer" data-dismiss="alert"><i className="ri-close-line"></i></span>
                        </div>
                        <div className="mini-logo text-center my-3">
                            <Link to="/"><img src="/images/logo.png" alt=""/></Link>
                            <h4 className="card-title mt-5"> {t(`auth_pw_verify.title`)}</h4>
                        </div>
                        <div className="auth-form card">
                            <div className="card-body">
                                <p className="text-center mb-3">{t(`auth_pw_verify.description`)}</p>
                                <form className="row g-3">
                                    <div className="col-12">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text mh45">
                                                    <i className="fa-solid fa-mobile-screen i-icon"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder={t(`auth_pw_verify.code_input`)} onChange={(e) => setVerifyCode(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary btn-block w100" onClick={() => onClickVerify()}>{t(`auth_pw_verify.button`)}</button>
                                        </div>
                                    </div>

                                </form>
                                <div className="new-account mt-3">
                                    <p>{t(`auth_pw_verify.resend_text`)}<span className="text-cyan" onClick={() => onClickResend()}> {t(`auth_pw_verify.resend`)}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPWVerifyContainer;