import {useForm} from 'react-hook-form';
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {onToggleEmailModalAction, onToggleLoadingModalAction} from "@action/modal.action.tsx";
import {useAuthMailSendMutation, useNicknameVerifyLazyQuery, useSignUpMutation} from "@graphql/graphql.ts";
import {RootState} from "@reducer/root.reducer.tsx";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import ValidComponent from "@component/valid.tsx";
import {setEmailAction, setInitialStateAction} from "@action/auth.action.tsx";
import {SignUpFormType} from "@type/auth.type.tsx";
import Swal from 'sweetalert2';
import {useTranslation} from "react-i18next";
import EmailModal from "@container/modal/email.modal.tsx";
import Select from "react-select";
import {countryCodes} from "@helper/country.codes.tsx";
import {selectStyles} from "@container/auth/auth.style.tsx";

const SignupContainer = () => {
    const [searchParams] = useSearchParams();
    const referralCode = searchParams.get('referralCode');

    const selectRef = useRef<any>()
    const {t} = useTranslation();
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const [isNicknameValid, setIsNicknameValid] = useState<boolean>(false);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const {register, setValue, watch, handleSubmit, formState: {errors}} = useForm<SignUpFormType>({
        mode: 'all'
    });
    const {emailVerified} = useSelector((root: RootState) => root.AuthReducer)

    const [onAuthMailSend] = useAuthMailSendMutation()
    const [onNickNameVerify] = useNicknameVerifyLazyQuery();
    const [onSinUp] = useSignUpMutation();

    const regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

    useEffect(() => {
        if (watch("nickname") && watch("nickname").length > 0)
            onNickNameVerify({
                variables: {
                    input: {
                        nickname: watch("nickname")
                    }
                }
            }).then(response => {
                return setIsNicknameValid(response.data?.nicknameVerify?.success ?? false);
            }).catch(e => console.log(e))
        else
            setIsNicknameValid(false);
    }, [watch("nickname")]);

    const onChangeAllAccept = (checked: boolean) => {
        setValue('allAccept', checked);
        setValue('term1Accept', checked);
        setValue('term2Accept', checked);
    }

    const onChangeTerms1 = (checked: boolean) => setValue('term1Accept', checked)
    const onChangeTerms2 = (checked: boolean) => setValue('term2Accept', checked)

    useEffect(()=> {
        (watch('term1Accept') && watch('term2Accept')) ? setValue('allAccept', true) : setValue('allAccept', false)
    }, [watch('term1Accept'), watch("term2Accept")])


    useEffect(() => {
        if (watch('email') && watch('email').length > 0 && regex.test(watch('email')))
            setIsEmailValid(false);
        else
            setIsEmailValid(true);
    }, [watch("email")]);

    useEffect(() => {
        if (navigator.language.includes('ko')) {
            selectRef.current.setValue(countryCodes[117]);
            setValue('countryCode', countryCodes[117].value)
        }
    }, []);

    // useEffect(() => {
    //     if (!phoneVerified)
    //         Swal.fire({
    //             color: '#000',
    //             text: 'Proceed to verify your phone.',
    //             preConfirm: () => {
    //                 navigation("/auth/sms");
    //             },
    //         });
    // }, [])

    useEffect(() => {
        window.onpopstate = () => navigation('/auth/login')
    }, [])

    const onClickSend = () => {
        dispatch(onToggleLoadingModalAction(true));
        return onAuthMailSend({
            variables: {
                input: {
                    email: watch("email")
                }
            }
        }).then(_response => {
            dispatch(setEmailAction(watch("email")));
            dispatch(onToggleEmailModalAction(true));
            return;
        }).catch(e => {
            Swal.fire({
                icon: 'error',
                title: t(`auth_signup.email_send_fail`),
                text: e.message,
            });
            return;
        }).finally(() => dispatch(onToggleLoadingModalAction(false)))
    }

    const onSubmit = (data: any) => {
        if (!emailVerified)
            return Swal.fire({
                icon: 'error',
                title: t(`auth_signup.err_title`),
                text: t(`auth_signup.err_msg1`),
            });
        else if (!isNicknameValid)
            return Swal.fire({
                icon: 'error',
                title: t(`auth_signup.err_title`),
                text: t(`auth_signup.nickname_err`),
            });
        else if (!!errors.confirmPassword)
            return Swal.fire({
                icon: 'error',
                title: t(`auth_signup.err_title`),
                text: t(`auth_signup.pw_multi`),
            });
        else if (!watch('allAccept'))
            return Swal.fire({
                icon: 'error',
                title: t(`auth_signup.err_title`),
                text: t(`auth_signup.accept_err`),
            });
        else if (!watch('term1Accept'))
            return Swal.fire({
                icon: 'error',
                title: t(`auth_signup.err_title`),
                text: t(`auth_signup.terms_err`),
            });
        else if (!watch('term2Accept'))
            return Swal.fire({
                icon: 'error',
                title: t(`auth_signup.err_title`),
                text: t(`auth_signup.terms2_err`),
            });
        else {
            dispatch(onToggleLoadingModalAction(true));
            return onSinUp({
                variables: {
                    input: {
                        email: data.email,
                        nickname: data.nickname,
                        password: data.password,
                        countryCode: data.countryCode,
                        referralCode: referralCode
                    }
                }
            }).then(response => {
                if (response.data?.signUp?.id) {
                    dispatch(setInitialStateAction());
                    navigation("/auth/complete");
                } else if (response.data?.signUp.error) {
                    if (response.data.signUp.error.code === 'EMAIL_VERIFY')
                        Swal.fire({
                            icon: 'error',
                            title: t(`auth_signup.err_title`),
                            text: t(`auth_signup.err_msg1`),
                        });
                    else
                         Swal.fire({
                            icon: 'error',
                            title: t(`auth_signup.err_title`),
                            text: t(`auth_signup.err_msg2`),
                        });
                    return;
                }
            }).catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: t(`auth_signup.err_title`),
                    text: e.message,
                })
                return;
            }).finally(() => dispatch(onToggleLoadingModalAction(false)));
        }
    }

    return (
        <>
            <div className="authincation section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="mini-logo text-center my-4"><Link to="/"><img src="/images/logo.png"
                                                                                          alt=""/></Link>
                                <h4 className="card-title mt-5">{t(`auth_signup.title`)}</h4>
                            </div>
                            <div className="auth-form card">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="col-12 mb-3">
                                                <label className="form-label">{t(`auth_signup.email`)}</label>
                                                <div className="email-area rela">
                                                    <input
                                                        type={"email"}
                                                        className="form-control"
                                                        {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                                                        disabled={emailVerified}
                                                    />
                                                    <button className="btn btn-primary nowrap"
                                                            type={'button'}
                                                            disabled={isEmailValid || emailVerified}
                                                            onClick={() => onClickSend()}>{t(`auth_signup.email_button`)}</button>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3 rela">
                                                <label className="form-label">{t(`auth_sms.country_title`)}</label>
                                                <Select ref={selectRef} placeholder={t(`auth_sms.country_select`)} options={countryCodes} styles={selectStyles} onChange={(e: any) => setValue('countryCode', e.value)}/>
                                            </div>

                                            <div className="col-12 mb-3 rela">
                                                <label className="form-label">{t(`auth_signup.nickname`)}</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    {...register("nickname", {required: true, minLength: 1})}
                                                />
                                                {
                                                    watch('nickname')
                                                        ? isNicknameValid ? ValidComponent({
                                                            valid: isNicknameValid,
                                                            text: t(`auth_signup.nickname_confirm`)
                                                        }) : ValidComponent({
                                                            valid: isNicknameValid,
                                                            text: t(`auth_signup.nickname_err`)
                                                        })
                                                        : <></>
                                                }
                                            </div>

                                            <div className="col-12 mb-3 rela">
                                                <label className="form-label">{t(`auth_signup.pw`)}</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    {...register('password', {
                                                        required: true,
                                                        minLength: 8,
                                                        maxLength: 20,
                                                        pattern: passwordRegex
                                                    })}
                                                />
                                                <small>{t('auth_signup.pw_multi')}</small>
                                                {
                                                    errors && watch('password') && watch('password').length > 8
                                                        ? errors.password
                                                            ? ValidComponent({
                                                                valid: false,
                                                                text: t(`auth_signup.pw_multi`)
                                                            })
                                                            : ValidComponent({
                                                                valid: true,
                                                                text: t(`auth_signup.pw_confirm`)
                                                            })
                                                        : <></>
                                                }
                                            </div>

                                            <div className="col-12 mb-3 rela">
                                                <label className="form-label">{t(`auth_signup.confirm_pw`)}</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    {...register("confirmPassword", {
                                                        required: true,
                                                        minLength: 8,
                                                        maxLength: 20,
                                                        validate: (value) => value === watch('password'),
                                                    })}
                                                />
                                                {
                                                    errors && watch('confirmPassword') && watch('confirmPassword').length > 0
                                                        ? errors.confirmPassword ? ValidComponent({
                                                            valid: false,
                                                            text: t(`auth_signup.confirm_pw_err`)
                                                        }) : ValidComponent({
                                                            valid: true,
                                                            text: t(`auth_signup.confirm_pw_confirm`)
                                                        })
                                                        : <></>
                                                }
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check check-all">
                                                    <input type="checkbox"
                                                           id={'allAccept'}
                                                           {...register("allAccept", {
                                                               required: true,
                                                               validate: value => value === true,
                                                               onChange: (e) => onChangeAllAccept(e.target.checked)
                                                           })}
                                                           className="form-check-input "/>
                                                    <label className="form-check-label"
                                                           htmlFor="allAccept">{t(`auth_signup.accept`)}</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input
                                                        id={'term1Accept'}
                                                        type="checkbox"
                                                        className="form-check-input "
                                                        // onChange={(e) => onChangeAllAccept(e.target.checked)}
                                                        {...register("term1Accept", {
                                                            required: true,
                                                            validate: value => value === true,
                                                            onChange: (e) => onChangeTerms1(e.target.checked)
                                                        })}
                                                    />
                                                    <label className="form-check-label" htmlFor={'term1Accept'}>
                                                        {t(`auth_signup.terms_description1`)}
                                                        <Link to={`/terms/${localStorage.getItem('khanway_language') ?? 'en'}/terms-of-service`} target={'_blank'} className="text-primary">{t(`auth_signup.terms_link1`)}</Link>
                                                        {t(`auth_signup.terms_description2`)}
                                                        <Link to={`/terms/${localStorage.getItem('khanway_language') ?? 'en'}/privacy-policy`} target={'_blank'}  className="text-primary">{t(`auth_signup.terms_link2`)}</Link>
                                                        {t(`auth_signup.terms_description3`)}
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input
                                                        id={'term2Accept'}
                                                        type="checkbox"
                                                        className="form-check-input "
                                                        {...register("term2Accept", {
                                                            required: true,
                                                            validate: value => value === true,
                                                            onChange: (e) => onChangeTerms2(e.target.checked)
                                                        })}
                                                    />
                                                    <label className="form-check-label" htmlFor={'term2Accept'}>
                                                        {t(`auth_signup.terms2_description1`)}
                                                        <Link to={`/terms/${localStorage.getItem('khanway_language') ?? 'en'}/terms-of-nfw`} target={'_blank'} className="text-primary">{t(`auth_signup.terms2_link`)}</Link>
                                                        {t(`auth_signup.terms2_description2`)}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 d-grid gap-2">
                                            <button type="submit" className="btn btn-primary mr-2"
                                                    disabled={!!errors.confirmPassword || !emailVerified || !isNicknameValid || !watch('allAccept')}>{t(`auth_signup.button`)}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <EmailModal/>
        </>
    )
}

export default SignupContainer;