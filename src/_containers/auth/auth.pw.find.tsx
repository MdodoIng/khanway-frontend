import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useAuthMailResetUrlLazyQuery} from "@graphql/graphql.ts";
import Swal from "sweetalert2";
import {useTranslation} from "react-i18next";
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";

const AuthPWFindContainer = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit, watch,  formState: {errors}} = useForm();
    const [onAuthMailResetURL] = useAuthMailResetUrlLazyQuery();

    const onSubmit = (data: any) => {
        dispatch(onToggleLoadingModalAction(true));
        onAuthMailResetURL({
            variables: {
                input: {
                    email: data.email
                }
            }
        }).then((res) => {
            dispatch(onToggleLoadingModalAction(false));
            if (res.data?.authMailResetURL?.success)
                Swal.fire({
                    icon: "success",
                    title: t(`auth_pw_find.success_title`),
                    text: t(`auth_pw_find.success_text`)
                }).then(() => {
                    navigate("/");
                })
            else if(res.data?.authMailResetURL?.error?.code === '400')
                Swal.fire({
                    icon: 'error',
                    title: t(`auth_pw_find.error_limit_title`),
                    text: t(`auth_pw_find.error_limit_msg`)
                });
            else
                Swal.fire({
                    icon: 'error',
                    title: t(`auth_pw_find.err_title`),
                    text: t(`auth_pw_find.err_msg`)
                });

            return;
        }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: t(`auth_pw_find.err_title`),
                text: t(`auth_pw_find.err_msg`)
            });
            return;
        });
    }

    return (
        <div className="authincation section-padding">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-xl-5 col-md-6">
                        <div className="mini-logo text-center my-3">
                            <Link to="/"><img src="/images/logo.png" alt=""/></Link>
                            <h4 className="card-title mt-5">{t(`auth_pw_find.title`)}</h4>
                        </div>
                        <div className="auth-form card">
                            <div className="card-body">
                                <p className="text-center mb-3">{t(`auth_pw_find.description1`)}</p>
                                <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>

                                    <div className="col-12 rela">
                                        <label className="form-label">{t(`auth_pw_find.email_title`)}</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            {...register("email", {required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/})}
                                            placeholder={t(`auth_pw_find.email_input`)}/>
                                        {errors.email && <span className="error-msg">{t(`auth_pw_find.error`)}</span>}
                                        {/*<span className="error-msg">{t(`auth_pw_find.error`)}</span>*/}
                                    </div>
                                    <div className="alert-text">
                                        <small> {t(`auth_pw_find.description2`)}</small>
                                    </div>
                                    <div className="text-center mt-4">
                                        <button type="submit"
                                                disabled={!watch('email') && errors.email !== undefined}
                                                className="btn btn-primary btn-block w100">{t(`auth_pw_find.button`)}</button>
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

export default AuthPWFindContainer;