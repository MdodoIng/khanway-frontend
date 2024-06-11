import Select from 'react-select'
import { countryCodes } from "@helper/country.codes";
import {selectStyles} from "@container/auth/auth.style.tsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import {Link, useNavigate} from "react-router-dom";
import {useAuthSmsSendMutation} from "@graphql/graphql.ts";
import {onChangeCountryAction, onChangePhoneAction, setInitialStateAction} from "@action/auth.action.tsx";
import Swal from "sweetalert2";
import {useTranslation} from "react-i18next";
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";
import {setPhoneFormat, verifyPhoneFormat} from "@helper/data.util.tsx";

const AuthSmsContainer = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const {countryCode, phoneNumber} = useSelector((state: RootState) => state.AuthReducer);
    const [submitDisable, setSubmitDisable] = useState<boolean>(true);
    const [onAuthSMSSend] = useAuthSmsSendMutation();

    const onClickSend = () => {
        if (!verifyPhoneFormat(countryCode!, phoneNumber!))
            return Swal.fire({
                icon: 'error',
                title: t(`auth_sms.err_title`),
                text: t(`auth_sms.err_msg1`),
            });
        dispatch(onToggleLoadingModalAction(true));
        onAuthSMSSend({
            variables: {
                input: {
                    countryCode: countryCode,
                    phoneNumber: setPhoneFormat(countryCode!, phoneNumber!)
                }
            }
        }).then(response => {
            if (response.data?.authSMSSend?.success === true) {
                dispatch(onChangePhoneAction(setPhoneFormat(countryCode!, phoneNumber!)))
                dispatch(onToggleLoadingModalAction(false));
                return navigation("/auth/sms/verify");
            } else
                throw new Error(response.data?.authSMSSend?.error?.message ?? 'Auth SMS Send failed');

        }).catch(_e => {
            dispatch(onToggleLoadingModalAction(false))
            if (_e.message === '이미 존재하는 전화번호 입니다.')
                return Swal.fire({
                    icon: 'error',
                    title: t(`auth_sms.err_title`),
                    text: t(`auth_sms.err_msg2`),
                })
            else
                return Swal.fire({
                    icon: 'error',
                    title: t(`auth_sms.err_title`),
                    text: t(`auth_sms.err_msg1`),
                })
        })
    }

    useEffect(() => {
        if (phoneNumber && countryCode && !phoneNumber.includes('-'))
            return setSubmitDisable(false);
        else
            return setSubmitDisable(true);
    }, [phoneNumber, countryCode])

    useEffect(() => {
        dispatch(setInitialStateAction());
    }, []);


    return (
        <div className="authincation section-padding">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-xl-5 col-md-6">
                        <div className="mini-logo text-center my-3">
                            <Link to="/">
                                <img src="/images/logo.png" alt=""/>
                            </Link>
                            <h4 className="card-title mt-5">{t(`auth_sms.title`)}</h4>
                        </div>
                        <div className="auth-form card">
                            <div className="card-body">
                                <p className="text-center mb-3">{t(`auth_sms.description1`)}</p>
                                <form className="row g-3">
                                    <div className="col-12">
                                        <label className="form-label">{t(`auth_sms.country_title`)}</label>
                                        <Select placeholder={t(`auth_sms.country_select`)} options={countryCodes} styles={selectStyles} onChange={(e: any) => dispatch(onChangeCountryAction(e.value))}/>
                                    </div>
                                    <div className="col-12"><label className="form-label">{t(`auth_sms.phone_title`)}</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span className="input-group-text">{countryCode ?? '+'}</span></div>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder=""
                                                onChange={(e) => dispatch(onChangePhoneAction(e.target.value))}
                                                value={phoneNumber}
                                            />
                                        </div>
                                    </div>
                                    <div className="alert-text">
                                        <small>{t(`auth_sms.description2`)}</small>
                                    </div>
                                    <div className="text-center mt-4">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-block w100"
                                            onClick={() => onClickSend()}
                                            disabled={submitDisable}>{t(`auth_sms.button`)}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthSmsContainer;