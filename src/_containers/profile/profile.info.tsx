import {useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import {Link} from "react-router-dom";
import {addComma, getCounty, getDateFormat} from "@helper/data.util.tsx";
import {useTranslation} from "react-i18next";

const ProfileInfoComponent = () => {
    const {t} = useTranslation();
    const {user} = useSelector((state: RootState) => state.AuthReducer);


    return (
        <div className="row">
            <div className="col-xxl-12">
                <div className="card-header px-0">
                    <h4 className="card-title">{t(`profile_info.title`)} </h4>
                    <Link to={'/profile/edit'} className="btn btn-primary">{t(`profile_info.button`)}</Link>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form className="row">
                            <div className="col-12">
                                <div className="user-img" style={{background: ''}}>
                                    <img
                                        src={user?.profileImage === '/images/anonymous.png' ? '/images/profile-img-bg.svg' : user!.profileImage!}
                                        alt="" className="pf-img"/>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="user-info">
                                    <span>{t(`profile_info.id`)}</span>
                                    <h4>{user?.email}</h4>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="user-info">
                                    <span>{t(`profile_info.nickname`)}</span>
                                    <h4>{user?.nickname}</h4>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="user-info">
                                    <span>{t(`profile_info.join`)}</span>
                                    <h4>{getDateFormat(user?.createdAt)}</h4>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="user-info">
                                    <span>{t(`profile_info.country`)}</span>
                                    <h4>{getCounty(user!.countryCode!)}</h4>
                                </div>
                            </div>
                            {
                                user!.isWhitelist && user!.whitelist &&
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div className="user-info">
                                        <span>{t(`profile_info.balance`)}</span>
                                        <h4>$ {addComma((user!.whitelist!.total_count ?? 0) * 1000)}</h4>
                                    </div>
                                </div>
                            }

                        </form>
                    </div>
                </div>
                <div className="sns-acc">
                    <div className="sns-acc-txt">
                        * 마켓에서 NFW구매시 옵션을 지급받으려면 <span className="txt-primary">SNS인증</span>이 완료되어야 합니다.
                    </div>
                    {
                        user?.isSNSVerified
                            ? <a className="btn btn-primary disabled">인증완료</a>
                            : <Link className="btn btn-primary" to={'/sns/verify'}>SNS 인증하기</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileInfoComponent;