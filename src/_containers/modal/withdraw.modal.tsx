import {useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import "./withdraw.modal.style.css"
import {useTranslation} from "react-i18next";
import BigNumber from "bignumber.js";
import {RootState} from "@reducer/root.reducer.tsx";
import {HistoryType} from "@container/profile/wallet/wallet.tsx";

export type WithdrawModalProps = {
    detailType: string|undefined;
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    onClickWithdraw: (amount: string) => void;
}

const WithdrawModal = ({detailType, isModalOpen, setIsModalOpen, onClickWithdraw}: WithdrawModalProps) => {
    const {t} = useTranslation();
    const [amount, setAmount] = useState<string>();
    const {user} = useSelector((root: RootState) => root.AuthReducer);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current!.value = '';
    }, [isModalOpen])

    const onCheckAmount = (amount?: string) => {
        if (detailType === 'KHANTEUM_PUSH_WITHDRAW_REQUEST')
            return !amount || new BigNumber(amount).isLessThanOrEqualTo(0)
                || new BigNumber(amount).isNaN()
                || new BigNumber(amount).isLessThan(0)
                || new BigNumber(amount).isGreaterThan(user?.push_balance ?? 0)
                || !/000$/.test(amount);
        return !amount || new BigNumber(amount).isLessThanOrEqualTo(0)
            || new BigNumber(amount).isNaN()
            || new BigNumber(amount).isLessThan(0)
            ||(detailType === 'SELL_WITHDRAW_REQUEST' ? new BigNumber(amount).isGreaterThan(user?.balance ?? 0) : new BigNumber(amount).isGreaterThan(user?.reward_balance ?? 0))
    }



    const getBalance = () => {
        switch (detailType) {
            case HistoryType.BALANCE_WITHDRAW_REQUEST: return user?.balance;
            case HistoryType.REWARD_WITHDRAW_REQUEST: return user?.reward_balance;
            case HistoryType.PUSH_WITHDRAW_REQUEST: return user?.push_balance;
        }
    }

    return (
        <>
        <div className={`modal-wrap ${isModalOpen ? 'active' : ''}`}>
            <div className="modal-container">
                <div className="md-body">
                    <div className="md-title">{t(`modal_withdraw.title`)}</div>
                    <div className="md-con">
                        <span>{t(`modal_withdraw.subtitle`)}</span>
                        <h2 className="balance">{getBalance()}</h2>
                    </div>

                    <form action="" className="withdrawal">
                        <label htmlFor={'fname'}>{t(`modal_withdraw.input_label`)}</label>
                        <input type="number"
                                ref={inputRef}
                               onWheel={ event => event.currentTarget.blur() }
                               onChange={(e) => setAmount(e.target.value)}
                               name=""/>
                        {detailType === 'KHANTEUM_PUSH_WITHDRAW_REQUEST' && <small  style={{color: 'red'}}>* {t(`modal_withdraw.push_balance_info`)}</small>}
                    </form>

                    <div className="md-btn">
                        <button className="btn btn-black"
                                onClick={() => setIsModalOpen(false)}>{t(`modal_withdraw.cancel_button`)}</button>
                        <button className="btn btn-primary"
                                disabled={onCheckAmount(amount)}
                                onClick={() => onClickWithdraw(amount!)}>{t(`modal_withdraw.withdraw_button`)}</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default WithdrawModal;