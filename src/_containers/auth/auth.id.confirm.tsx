import {Link} from "react-router-dom";
import {useAuthFindEmailQuery} from "@graphql/graphql.ts";
import Loading from "@container/_common/loading.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import {useTranslation} from "react-i18next";

const AuthIDConfirmContainer = () => {
    const { t } = useTranslation();
    const { countryCode, phoneNumber, } = useSelector((root: RootState) => root.AuthReducer);
    const { data, loading }= useAuthFindEmailQuery({
        variables: {
            input: {
                countryCode: countryCode,
                phoneNumber: phoneNumber
            }
        }
    });

    const dateString = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return `Join To ${year}.${month}.${day}`;
    }

    if (loading) return <Loading/>;

    return (
        <div className="authincation section-padding">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-xl-5 col-md-6">
                        <div className="mini-logo text-center my-4"><Link to="/"><img src="/images/logo.png" alt=""/></Link>
                            {data?.authFindEmail.user ? <h4 className="card-title mt-5">{t(`auth_id_confirm.title1`)}</h4> :
                                <h4 className="card-title mt-5">{t(`auth_id_confirm.title2`)}</h4>}
                        </div>
                        <div className="auth-form card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12 mb-3 rela">
                                        <div className="find-txtbox">
                                            <p className="email">{data?.authFindEmail.user?.email}</p>
                                            {data?.authFindEmail.user ? <p className="accession-date">{dateString(new Date(data?.authFindEmail.user?.createdAt))}</p> :
                                                <p className="accession-date">회원정보를 찾을 수 없습니다.</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 d-grid gap-2">
                                    <Link to="/auth/login" className="btn btn-primary mr-2">
                                        {t(`auth_id_confirm.button`)}
                                    </Link>
                                </div>
                                <div className="text-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthIDConfirmContainer;