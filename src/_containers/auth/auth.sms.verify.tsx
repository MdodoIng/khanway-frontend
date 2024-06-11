import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import {useAuthSmsSendMutation, useAuthSmsVerifyMutation} from "@graphql/graphql.ts";
import {Link, useNavigate} from "react-router-dom";
import {onChangePhoneAction, setPhoneVerifiedAction} from "@action/auth.action.tsx";
import Swal from "sweetalert2";
import {useTranslation} from "react-i18next";
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";

const AuthSMSVerifyContainer = () => {
    const {t} = useTranslation();
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const {countryCode, phoneNumber} = useSelector((root: RootState) => root.AuthReducer);
    const [verifyCode, setVerifyCode] = useState<string>('');
    const [onAuthSMSSend] = useAuthSmsSendMutation();
    const [onAuthSMSVerify] = useAuthSmsVerifyMutation();

    const onClickVerify = async () => {
        dispatch(onToggleLoadingModalAction(true));
        return onAuthSMSVerify({
            variables: {
                input: {
                    countryCode: countryCode,
                    phoneNumber: phoneNumber,
                    verifyCode: verifyCode
                }
            }
        }).then(response => {
            dispatch(onToggleLoadingModalAction(false));
            if (response.data?.authSMSVerify?.success === true) {
                dispatch(onChangePhoneAction(phoneNumber!));
                dispatch(setPhoneVerifiedAction(true))
                return navigation("/auth/signup");
            } else
                Swal.fire({
                    icon: 'error',
                    title: t(`auth_sms_verify.err_title`),
                    text: t(`auth_sms_verify.err_msg`),
                })
            return;
        }).catch(_e => {
            dispatch(onToggleLoadingModalAction(false));
            return Swal.fire({
                icon: 'error',
                title: t(`auth_sms_verify.err_title`),
                text: t(`auth_sms_verify.err_msg`),
            })
        })
    }

    const onClickResend = async () => onAuthSMSSend({
        variables: {
            input: {
                countryCode: countryCode,
                phoneNumber: phoneNumber
            }
        }
    }).then(response => {
        if (response.data?.authSMSSend?.success === true)
            Swal.fire({
                icon: 'success',
                title: t(`auth_sms_verify.resend_success`),
                text: t(`auth_sms_verify.resend_success_msg`),
            })
        else
            throw new Error(response.data?.authSMSSend?.error?.message ?? 'Auth SMS Resend failed');
    }).catch(_e => {
        Swal.fire({
            icon: 'error',
            title: t(`auth_sms_verify.resend_fail`),
            text: t(`auth_sms_verify.resend_fail_msg`),
        })
    })

    return (
        <div className="authincation section-padding">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-xl-5 col-md-6">
                        <div className="mini-logo text-center my-3">
                            <Link to={"/"}><img src="/images/logo.png" alt=""/></Link>
                            <h4 className="card-title mt-5">{t(`auth_sms_verify.title`)}</h4>
                        </div>
                        <div className="auth-form card">
                            <div className="card-body">
                                <p className="text-center mb-3">{t(`auth_sms_verify.description`)}</p>
                                <form className="row g-3">
                                    <div className="col-12">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text mh45">
                                                    <i className="fa-solid fa-mobile-screen i-icon"></i>
                                                </span>
                                            </div>
                                            <input type="text" className="form-control" placeholder={t(`auth_sms_verify.code_input`)} onChange={(e) => setVerifyCode(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary btn-block w100" onClick={() => onClickVerify()}>{t(`auth_sms_verify.button`)}</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="new-account mt-3">
                                    <p>{t(`auth_sms_verify.resend_text`)}<span className="text-primary" onClick={() => onClickResend()} style={{cursor: "pointer"}}>{'\u00A0'} {t(`auth_sms_verify.resend`)}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthSMSVerifyContainer;