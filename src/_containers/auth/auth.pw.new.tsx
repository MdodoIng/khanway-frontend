import {useForm} from "react-hook-form";
import {useAuthFindNewPasswordMutation, useAuthTokenVerifyLazyQuery} from "@graphql/graphql.ts";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {setInitialStateAction} from "@action/auth.action.tsx";
import Swal from "sweetalert2";
import {useTranslation} from "react-i18next";
import ValidComponent from "@component/valid.tsx";
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";
import Loading from "@container/_common/loading.tsx";

const AuthPWNewContainer = () => {
    const {t} = useTranslation();
    const {authToken} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit, watch, formState: {errors}, setValue } = useForm({
        mode: 'all'
    });
    const [onAuthNewPassword] = useAuthFindNewPasswordMutation();
    const passwordRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

    const [onAuthTokenVerify, { loading}] = useAuthTokenVerifyLazyQuery();

    useEffect(() => {
        onAuthTokenVerify({
            variables: {
                input: {
                    authToken: authToken!
                }
            }
        }).then((response) => {
            if (response.data?.authTokenVerify.error || response.data?.authTokenVerify?.verify === false) {
                Swal.fire({
                    icon: 'error',
                    title: t(`auth_pw_new.token_fail`),
                    text: t(`auth_pw_new.token_fail_msg`),
                }).then(() => {
                    navigate("/auth/login");
                })
            }
            return;
        }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: t(`auth_pw_new.token_fail`),
                text: t(`auth_pw_new.token_fail_msg`),
            }).then(() => {
                navigate("/auth/login");
            })
            return;
        })
    }, [])

    const onSubmit = (data: any) => {
        dispatch(onToggleLoadingModalAction(true));
        return onAuthNewPassword({
            variables: {
                input: {
                    password: data.password,
                    confirmPassword: data.confirmPassword,
                    authToken: authToken!
                }
            }
        }).then((response) => {
            if (response.data?.authFindNewPassword?.success === true)
                Swal.fire({
                    icon: 'success',
                    title: t(`auth_pw_new.change_success`),
                    text: t(`auth_pw_new.change_success_msg`),
                }).then(() => {
                    dispatch(setInitialStateAction());
                    navigate("/auth/login");
                })
            else
                Swal.fire({
                    icon: 'error',
                    title: t(`auth_pw_new.change_fail`),
                    text: t(`auth_pw_new.change_fail_msg`),
                });
            return ;
        }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: t(`auth_pw_new.change_fail`),
                text: t(`auth_pw_new.change_fail_msg`),
            });
            return ;
        }).finally(() => dispatch(onToggleLoadingModalAction(false)));
    }

    useEffect(() => {
        setValue('password', '');
        setValue('confirmPassword', '');
    },[])

    const isSubmitDisable = () => {
        const password = watch('password');
        const confirmPassword = watch('confirmPassword');
        return password === undefined || password.length === 0 || confirmPassword === undefined || confirmPassword.length === 0 || !(watch('password') === watch('confirmPassword') && errors.password === undefined && errors.confirmPassword === undefined);
    }

    if (loading) return <Loading/>;

    return (
        <div className="authincation section-padding">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-xl-5 col-md-6">
                        <div className="mini-logo text-center my-4"><Link to="/"><img src="/images/logo.png" alt=""/></Link>
                            <h4 className="card-title mt-5">{t(`auth_pw_new.title`)}</h4>
                        </div>
                        <div className="auth-form card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-12 mb-3 rela">
                                            <label className="form-label">{t(`auth_pw_new.new_title`)}</label>
                                            <br/>
                                            <input
                                                type="password"
                                                className="form-control"
                                                {...register('password', {required: true, minLength: 8, maxLength: 20, pattern: passwordRegex})}
                                                placeholder={t(`auth_pw_new.new_input`)}/>
                                            {
                                                errors && watch('password') && watch('password').length > 8
                                                    ? errors.password
                                                        ? ValidComponent({
                                                            valid: false,
                                                            text: t(`auth_signup.pw_multi`)})
                                                        : ValidComponent({
                                                            valid: true,
                                                            text: t(`auth_signup.pw_confirm`)})
                                                    : <></>
                                            }
                                        </div>
                                        <span className="error-msg">{t(`auth_pw_new.pw_multi`)}</span>
                                        <div className="col-12 mb-3 rela">
                                            <label className="form-label">{t(`auth_pw_new.confirm_title`)}</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                {...register('confirmPassword', {required: true, validate: (value) => value === watch('password')})}
                                                placeholder={t(`auth_pw_new.confirm_input`)}/>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-grid gap-2">
                                        <button type="submit" className="btn btn-primary mr-2" disabled={isSubmitDisable()}>
                                            {t(`auth_pw_new.button`)}
                                        </button></div>
                                </form>
                                <div className="text-center">
                                    <p className="mt-3 mb-0">{t(`auth_pw_new.signin_text1`)}
                                        <Link className="text-cyan" to="/auth/login">{t(`auth_pw_new.signin_link`)}</Link>
                                        {t(`auth_pw_new.signin_text2`)}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPWNewContainer;