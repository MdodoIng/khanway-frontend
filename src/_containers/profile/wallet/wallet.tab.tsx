import {removeTrailingZeros} from "@helper/data.util.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import {useTranslation} from "react-i18next";
import {onErrorSwal, onInfoSwal} from "@helper/swal.handler.tsx";
import {useNavigate} from "react-router-dom";

export type ProfileWalletTabProps = {
    title: string;
    balance: string;
    onClickWithdraw: () => void;
    onClickDetail: () => void;
    isActivated: boolean;
    isPush: boolean;
}

const ProfileWalletTab = (props: ProfileWalletTabProps) => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const {title, balance, onClickDetail, onClickWithdraw, isActivated, isPush} = props;
    const {user} = useSelector((root: RootState) => root.AuthReducer);

    const onClickWithdrawButton = () => {
        if (user?.isKYCVerified === false)
            onErrorSwal(t('common.kyc_not_verified_title'), t('common.kyc_not_verified'), undefined, undefined, () => navigate('/profile/kyc', {replace: true}));
        else if (isPush)
            onInfoSwal(t('profile_wallet.push_withdraw_info_title'), t('profile_wallet.push_withdraw_info_message'));
        else
            onClickWithdraw();
        return;
    }

    return (
        <div>
            <div className="tab-box">
                <span className="box-title">{title}</span>
                <div className="amount">
                    <span className="currency">$</span>
                    <span className="formattedAmount">{removeTrailingZeros(balance)}</span>
                </div>
                <div className="btnbox">
                    <div className={`tab ${isActivated && 'active'}`} onClick={() => onClickDetail()}>{t('profile_wallet.detail_button')}</div>
                    <a className="wd-btn" onClick={onClickWithdrawButton}>{isPush ? t('profile_wallet.push_withdraw_button') : t('profile_wallet.withdraw_button')}</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileWalletTab;