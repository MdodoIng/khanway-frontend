import {RootState} from "@reducer/root.reducer.tsx";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const ProfileRewardsWithdraw = () => {
    const {t} = useTranslation();
    const {user} = useSelector((state: RootState) => state.AuthReducer);

    return (
        <div className="card-header px-0">
            <h4 className="card-title">{t(`profile_reward.title`)}</h4>
            <div className="right-box">
                <div className="total-fee">
                    <span>{t(`profile_reward.total`)}</span>
                    <h2>${user?.available_amount ?? 0}</h2>
                </div>
                <button className="btn btn-primary"
                        disabled={parseInt(user?.available_amount ?? '0') === 0}
                        >
                        {/*onClick={() => dispatch(onToggleWithdrawModalAction(true))}>*/}
                    {t(`profile_reward.button`)}
                </button>
            </div>
        </div>
    )
}

export default ProfileRewardsWithdraw;