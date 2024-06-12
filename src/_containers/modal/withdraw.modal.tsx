import {useDispatch, useSelector} from "react-redux";
import {useCreateWithdrawRequestMutation} from "@graphql/graphql.ts";
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";
import Swal from "sweetalert2";
import {useState} from "react";
import "./withdraw.modal.style.css"
import {useTranslation} from "react-i18next";
import BigNumber from "bignumber.js";
import {RootState} from "@reducer/root.reducer.tsx";

export type WithdrawModalProps = {
    setDetailType: (type: string|undefined) => void;
    detailType: string|undefined;
}

const WithdrawModal = ({detailType, setDetailType}: WithdrawModalProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [onCreateWithdrawRequest] = useCreateWithdrawRequestMutation();
    const [amount, setAmount] = useState<string>();
    const {user} = useSelector((root: RootState) => root.AuthReducer);

    const onCheckAmount = (amount?: string) => {
        return !amount || new BigNumber(amount).isLessThanOrEqualTo(0)
            || new BigNumber(amount).isNaN()
            || new BigNumber(amount).isLessThan(0)
            ||(detailType === 'SELL_WITHDRAW_REQUEST' ? new BigNumber(amount).isGreaterThan(user?.balance ?? 0) : new BigNumber(amount).isGreaterThan(user?.reward_balance ?? 0))
    }

    const onClickWithdraw = () => {
        if (!amount || onCheckAmount(amount)) {
            Swal.fire({
                icon: 'error',
                text: t(`modal_withdraw.fail_amount_error`),
            });
            return;
        }
        dispatch(onToggleLoadingModalAction(true));
        onCreateWithdrawRequest({
            variables: {
                input: {
                    detailType: detailType!,
                    amount: amount
                }
            }
        }).then(response => {
            dispatch(onToggleLoadingModalAction(false));
            if (response.data?.createWithdrawRequest?.isSuccess === true)
                Swal.fire({
                    icon: 'success',
                    title: t(`modal_withdraw.success_title`),
                    text: t(`modal_withdraw.success_msg`),
                }).then(() => window.location.reload());
            else if (response.data?.createWithdrawRequest?.error && response.data?.createWithdrawRequest?.error.code === 'BALANCE_NOT_ENOUGH')
                Swal.fire({
                    icon: 'error',
                    title: t(`modal_withdraw.fail_title`),
                    text: t(`modal_withdraw.fail_amount_error`),
                });
            else
                Swal.fire({
                    icon: 'error',
                    title: t(`modal_withdraw.fail_title`),
                    text: t(`modal_withdraw.fail_msg`),
                });
            return;
        }).catch(_e => {
            dispatch(onToggleLoadingModalAction(false));
            Swal.fire({
                icon: 'error',
                title: t(`modal_withdraw.fail_title`),
                text: t(`modal_withdraw.fail_msg`),
            });
        })
        setDetailType(undefined);
    }

    return (
        <div className={`modal-wrap ${detailType ? 'active' : ''}`}>
            <div className="modal-container">
                <div className="md-body">
                    <div className="md-title">{t(`modal_withdraw.title`)}</div>
                    <div className="md-con">
                        <span>{t(`modal_withdraw.subtitle`)}</span>
                        <h2 className="balance">{detailType === 'SELL_WITHDRAW_REQUEST' ? user?.balance : user?.reward_balance}</h2>
                    </div>

                    <form action="" className="withdrawal">
                        <label htmlFor={'fname'}>{t(`modal_withdraw.input_label`)}</label>
                        <input type="number"
                               onWheel={ event => event.currentTarget.blur() }
                               onChange={(e) => setAmount(e.target.value)}
                               name=""/>
                    </form>

                    <div className="md-btn">
                        <button className="btn btn-black"
                                onClick={() => setDetailType(undefined)}>{t(`modal_withdraw.cancel_button`)}</button>
                        <button className="btn btn-primary"
                                disabled={onCheckAmount(amount)}
                                onClick={() => onClickWithdraw()}>{t(`modal_withdraw.withdraw_button`)}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WithdrawModal;