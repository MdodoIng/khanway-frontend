import {Modal} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import {useEffect, useState} from "react";
import {useAuthMailSendMutation, useAuthMailVerifyLazyQuery} from "@graphql/graphql.ts";
import {onToggleEmailModalAction, onToggleLoadingModalAction} from "@action/modal.action.tsx";
import {setEmailVerifiedAction} from "@action/auth.action.tsx";
import {useLocation} from "react-router-dom";
import Swal from "sweetalert2";
import {useTranslation} from "react-i18next";

export const EmailModalComponent = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [verificationCode, setVerificationCode] = useState<string>("")
    const {isOpenEmailModal} = useSelector((root: RootState) => root.ModalReducer);
    const {email} = useSelector((root: RootState) => root.AuthReducer);

    const [onAuthMailVerify] = useAuthMailVerifyLazyQuery();
    const [onAuthMailSend] = useAuthMailSendMutation()
    const path = useLocation();

    useEffect(() => {
        if (path.pathname !== '/auth/signup/email')
            dispatch(onToggleEmailModalAction(false));
    }, []);


    const onClickVerifyEmail = () => {
        dispatch(onToggleLoadingModalAction(true));
        return onAuthMailVerify({
            variables: {
                input: {
                    email: email,
                    text: verificationCode
                }
            }
        }).then(response => {
            if (response.data?.authMailVerify?.success === true) {
                dispatch(setEmailVerifiedAction(true));
                dispatch(onToggleEmailModalAction(false));
                return;
            } else
                Swal.fire({
                    icon: 'error',
                    title: t(`modal_email.err_title`),
                    text: t(`modal_email.err_msg`)
                });
            return;
        }).catch(_e => {
            Swal.fire({
                icon: 'error',
                title: t(`modal_email.err_title`),
                text: t(`modal_email.err_msg`)
            });
            return ;
        }).finally(() => dispatch(onToggleLoadingModalAction(false)));
    }

    const onClickResendEmail = () => {
        return Swal.fire({
            icon: 'warning',
            title: t(`modal_email.resend_request_title`),
            text: t(`modal_email.resend_request_msg`),
            showCancelButton: true,
            confirmButtonText: t(`modal_email.resend_request_confirm`),
            cancelButtonText: t(`modal_email.resend_request_cancel`),
        }).then((result) => {
            if (result.isConfirmed) {
                return onClickResendEmailStart();
            } else {
                return ;
            }
        })
    }

    const onClickResendEmailStart = () => {
        dispatch(onToggleLoadingModalAction(true));
        return onAuthMailSend({
            variables: {
                input: {
                    email: email
                }
            }
        }).then(_response => {
             Swal.fire({
                icon: 'success',
                title: t(`modal_email.resend_title`),
                text: t(`modal_email.resend_msg`)
            })
            return;
        }).catch(e => console.log(e)).finally(() => dispatch(onToggleLoadingModalAction(false)));
    }

    return (
        <Modal show={isOpenEmailModal} animation={true}  centered={true} size={'xl'} backdrop={false} className={"modal-wrap bg-transparent"} contentClassName={'bg-transparent'}>
            <div className="modal-container">
                <div className="mini-logo text-center my-3">
                    <a>
                        <img src="/images/logo.png" alt=""/>
                    </a>
                    <h4 className="card-title mt-5">{t(`modal_email.code_input`)}</h4>
                </div>
                <div className="auth-form card">
                    <div className="card-body">
                        <p className="text-center mb-3">{t(`modal_email.description`)}</p>
                        <form className="row g-3">
                            <div className="col-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                                    <span className="input-group-text mh45">
                                                        <i className="fa-regular fa-envelope i-icon"></i>
                                                    </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={t(`modal_email.code_input`)}
                                        onChange={(e) => setVerificationCode(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-block w100"
                                        disabled={verificationCode.length !== 6}
                                        onClick={() => onClickVerifyEmail()}
                                    >
                                        {t(`modal_email.button`)}
                                    </button>
                                </div>
                            </div>
                            <p>{t('modal_email.email_confirm_description')}</p>
                        </form>
                        <div className="new-account mt-3">
                            <p>{t(`modal_email.resend_text`)}<span className="text-primary" style={{cursor: 'pointer'}} onClick={() => onClickResendEmail()}>{'\u00A0'} {t(`modal_email.resend`)}</span></p>
                        </div>
                    </div>
                </div>
                {/*<button className="btn-clo" onClick={() => dispatch(onToggleEmailModalAction(false))}>*/}
                {/*    <i className="fa-regular fa-circle-xmark"></i>*/}
                {/*</button>*/}
            </div>
        </Modal>
    )
}

export default EmailModalComponent;