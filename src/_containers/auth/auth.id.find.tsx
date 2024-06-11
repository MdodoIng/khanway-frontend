import {Link, useNavigate} from "react-router-dom";
import Select from "react-select";
import {countryCodes} from "@helper/country.codes.tsx";
import {selectStyles} from "@container/auth/auth.style.tsx";
import {onChangeCountryAction, onChangePhoneAction, setTypeAction} from "@action/auth.action.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import {useState} from "react";
import Swal from "sweetalert2";
import {useAuthFindSmsSendMutation} from "@graphql/graphql.ts";
import {useTranslation} from "react-i18next";
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";
import {setPhoneFormat, verifyPhoneFormat} from "@helper/data.util.tsx";

const AuthIDFindContainer = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [phone, setPhone] = useState<string>();
    const {countryCode} = useSelector((state: RootState) => state.AuthReducer);
    const [onAuthFindSMSSend] = useAuthFindSmsSendMutation();


    const onSubmit = () => {
        if (!countryCodes || !phone)
            return;
        if (!verifyPhoneFormat(countryCode!, phone!))
            return Swal.fire({
                icon: 'error',
                title: t(`auth_sms.err_title`),
                text: t(`auth_sms.err_msg1`),
            });
        dispatch(onToggleLoadingModalAction(true));
        return onAuthFindSMSSend({
            variables: {
                input: {
                    countryCode: countryCode!,
                    phoneNumber: setPhoneFormat(countryCode!, phone!)
                }
            }
        }).then(response => {
            if (response.data?.authFindSMSSend?.success === true) {
                dispatch(onChangeCountryAction(countryCode!));
                dispatch(onChangePhoneAction(setPhoneFormat(countryCode!, phone!)));
                dispatch(setTypeAction('ID'))
                navigate("/auth/find/verify");
            } else
                Swal.fire({
                    icon: 'error',
                    title: t(`auth_id_find.err_title`),
                    text: t(`auth_id_find.err_msg`),
                });
            return;
        }).catch(_e => {
            Swal.fire({
                icon: 'error',
                title: t(`auth_id_find.err_title`),
                text: t(`auth_id_find.err_msg`),
            });
            return;
        }).finally(() => dispatch(onToggleLoadingModalAction(false)));
    }

    return (
        <div className="authincation section-padding">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-xl-5 col-md-6">
                        <div className="mini-logo text-center my-4"><Link to="/"><img src="/images/logo.png" alt=""/></Link>
                            <h4 className="card-title mt-5">{t(`auth_id_find.title`)}</h4>
                        </div>
                        <div className="auth-form card">
                            <div className="card-body">
                                <form className="row g-3">
                                    <div className="col-12">
                                        <label className="form-label">{t(`auth_id_find.country_title`)}</label>
                                        <Select placeholder={t(`auth_id_find.country_select`)} options={countryCodes} styles={selectStyles} onChange={(e: any) => dispatch(onChangeCountryAction(e.value))}/>
                                    </div>
                                    <div className="col-12"><label className="form-label">{t(`auth_id_find.phone_title`)}</label>
                                        <div className="input-group ">
                                            <div className="input-group-prepend ">
                                                <span className="input-group-text">{countryCode ?? '+'}</span>
                                            </div>
                                            <input type="text" className="form-control"
                                                   onChange={(e) => setPhone(e.target.value)}
                                                   placeholder={t(`auth_id_find.phone_input`)}/>
                                        </div>
                                    </div>

                                    <div className="text-center mt-4">
                                        <button type="button" className="btn btn-primary btn-block w100"
                                                disabled={!phone || !countryCode}
                                                onClick={() => onSubmit()}>{t(`auth_id_find.button`)}</button>
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

export default AuthIDFindContainer