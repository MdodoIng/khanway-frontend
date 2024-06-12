import {removeTrailingZeros} from "@helper/data.util.tsx";

export type ProfileWalletTabProps = {
    title: string;
    balance: string;
    onClickWithdraw: () => void;
    onClickDetail: () => void;
    isActivated: boolean;
}

const ProfileWalletTab = (props: ProfileWalletTabProps) => {
    const {title, balance, onClickWithdraw, onClickDetail, isActivated} = props;
    return (
        <div>
            <div className="tab-box">
                <span className="box-title">{title}</span>
                <div className="amount">
                    <span className="currency">$</span>
                    <span className="formattedAmount">{removeTrailingZeros(balance)}</span>
                </div>
                <div className="btnbox">
                    <div className={`tab ${isActivated && 'active'}`} onClick={() => onClickDetail()}>상세보기</div>
                    <a className="wd-btn" onClick={onClickWithdraw}>출금하기</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileWalletTab;