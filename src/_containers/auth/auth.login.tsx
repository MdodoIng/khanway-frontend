import {LoginInput, useLoginMutation} from "@graphql/graphql.ts";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setInitialStateAction, setRememberMeAction, setUserAction} from "@action/auth.action.tsx";
import {Link, useNavigate} from "react-router-dom";
import {RootState} from "@reducer/root.reducer";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

const SignInContainer = () => {
    const {t} = useTranslation();
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const [onLogin] = useLoginMutation();
    const [idState, setIdState] = useState(true);
    const {register, handleSubmit} = useForm<LoginInput>();
    const {currentPage, rememberMe} = useSelector((state: RootState) => state.AuthReducer);

    const storedValue = localStorage.getItem("airdrop")
    console.log("%c Line:25 🌰 storedValue", "color:#6ec1c2", storedValue)

    useEffect(() => {
        dispatch(setInitialStateAction());
    }, []);
    const onSubmit = (data: LoginInput) => {
        onLogin({
            variables: {
                input: data
            }
        }).then(response => {
            if (rememberMe === true)
                localStorage.setItem('khanway_access_token', response.data?.login?.access_token || "");
            else
                sessionStorage.setItem('khanway_access_token', response.data?.login?.access_token || "");
            dispatch(setUserAction(response.data?.login?.user || null));
            navigation(currentPage || '/')
            return;
        }).catch(_e => {
            setIdState(false)
            return;
        })
    }

    return (
        <div className="authincation section-padding">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-xl-5 col-md-6">
                        <div className="mini-logo text-center my-4">
                            <Link to="/">
                                <img src="/images/logo.png" alt=""/>
                            </Link>
                            <h4 className="card-title mt-5">{t(`auth_login.title`)}</h4>
                        </div>
                        <div className="auth-form card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-12 mb-3"><label className="form-label">{t(`auth_login.email`)}</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder={t(`auth_login.email_input`)}
                                                {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                                        </div>
                                        <div className="col-12 mb-3"><label className="form-label">{t(`auth_login.pw`)}</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                {...register("password", {required: true})}
                                                placeholder={t(`auth_login.pw_input`)}/>
                                            {idState ? <></> : <span className="text-danger">{t(`auth_login.err_msg1`)}<br/>{t(`auth_login.err_msg2`)}</span>}
                                        </div>
                                        <div className="col-6">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input "
                                                    onChange={(e) => dispatch(setRememberMeAction(e.target.checked))}/>
                                                <label className="form-check-label">{t(`auth_login.remember_check`)}</label>
                                            </div>
                                        </div>
                                        <div className="col-6 text-end">
                                            <Link to={'/auth/find-pw'} className="text-cyan">{t(`auth_login.forgot_link`)}</Link>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-grid gap-2">
                                        <button type="submit" className="btn btn-primary mr-2">{t(`auth_login.login_button`)}</button>
                                    </div>
                                </form>
                                <p className="mt-3 mb-0">
                                    {t(`auth_login.signup_text`)} <Link className="text-cyan" to="/auth/signup">{t(`auth_login.signup_link`)}</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInContainer;