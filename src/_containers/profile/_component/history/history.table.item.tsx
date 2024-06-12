import {timeAgo} from "@helper/timeAgo.tsx";
import {UserHistory} from "@graphql/graphql.ts";
import {addComma, removeTrailingZeros} from "@helper/data.util.tsx";
import {t} from "i18next";

export type HistoryTableItemProps = {
    type: string;
    history: UserHistory;
    currencyExchange: string;
}
const HistoryTableItem = (props: HistoryTableItemProps) => {
    const {type, history} = props;
    const krw = parseFloat(history.amount ?? '0') * parseFloat(props.currencyExchange.replace(',', ''));

    const getTypeText = (type: string) => {
        switch (type) {
            case 'DIRECT_DEPOSIT_PENDING':
            case 'DIRECT_DEPOSIT_CANCEL':
            case 'DIRECT_DEPOSIT_CONFIRM':
            case 'PAYPAL_CONFIRM':
                return 'PAYMENT';
            case 'EVENT_SILVER':
            case 'EVENT_GOLD':
            case 'EVENT_SILVER_OPEN':
            case 'EVENT_GOLD_OPEN':
                return 'EVENT';
            case 'SELL_WITHDRAW_REQUEST':
            case 'FEE_WITHDRAW_REQUEST':
                return 'REQUEST';
            case 'SELL_WITHDRAW':
            case 'FEE_WITHDRAW':
                return 'WITHDRAW';
            default:
                return type;
        }
    }

    const getImage = (type: string) => {
        switch (type) {
            case 'EVENT_SILVER':
            case 'EVENT_SILVER_OPEN':
                return `${import.meta.env.VITE_APP_S3_URL}/dev/silver-egg.gif`;
            case 'EVENT_GOLD':
            case 'EVENT_GOLD_OPEN':
                return `${import.meta.env.VITE_APP_S3_URL}/dev/gold-egg.gif`;
            case 'WITHDRAW':
                return '/images/khan001.png';
            case 'WITHDRAW_REQUEST':
                return '/images/khan001.png';
            default:
                return '/images/khan001.png';
        }
    }

    const getContent = () => {
        switch (history.detailType) {
            case 'EVENT_SILVER': return t('profile_history.event_silver');
            case 'EVENT_GOLD': return t('profile_history.event_gold');
            case 'EVENT_SILVER_OPEN': return t('profile_history.event_silver_open');
            case 'EVENT_GOLD_OPEN': return t('profile_history.event_gold_open');
            case 'DIRECT_DEPOSIT_PENDING': return t('profile_history.direct_deposit_pending');
            case 'DIRECT_DEPOSIT_CANCEL': return t('profile_history.direct_deposit_cancel');
            case 'DIRECT_DEPOSIT_CONFIRM': return t('profile_history.direct_deposit_confirm');
            case 'PAYPAL_CONFIRM': return t('profile_history.paypal_confirm');
            case 'MINT': return t('profile_history.mint');
            case 'BUY': return t('profile_history.buy');
            case 'SELL': return t('profile_history.sell');
            default: return "application for witlication for witlication";
        }
    }

    return (
        <li className="h-block tit">
            <ul className="h-items">
                <li className="sale col-2">{getTypeText(history.detailType ?? '')}</li>
                <li className="item col-3">
                    <img src={history.nft?.metadata?.image ?? getImage(history.detailType!)} alt="" className="nfw-thumb"/>
                    <div className="nfw">
                        <p className="name">{history.nft?.metadata?.name ?? "application for witlication for witlication"}</p>
                        <p className="price">$ {removeTrailingZeros(history.amount ?? "0")} <span>\{addComma(krw)}</span></p>
                    </div>
                </li>
                {
                    type === 'PAYMENT'
                        ? <>
                        <li className="c-fee">
                            <div className="c-fee-box">
                                <p className="tit">Creator Fee(4%)</p>
                            <p className="value">-
                            </p>
                        </div>
                        </li>
                        <li className="c-fee">
                            <div className="c-fee-box">
                                <p className="tit">Fee(4%)</p>
                            <p className="value">-
                            </p>
                        </div>
                    </li>
                        </>
                        : <li className="msg col-1">
                            <div className="message">
                                <p className="tit">Message</p>
                                <p className="value">{getContent()}</p>
                            </div>
                        </li>
                }

                <li className="fromto col-2">
                    <div className="from">
                        <p className="tit">From</p>
                        <p className="value">{history.from?.nickname}</p>
                    </div>
                    <div className="to">
                        <p className="tit">To</p>
                        <p className="value">{history.to?.nickname}</p>
                    </div>
                </li>
                <li className="time col-2">
                    <p className="tit">time</p>
                    <p className="value">{timeAgo(new Date(history.createdAt))}</p>
                </li>
            </ul>
        </li>
    )

}

export default HistoryTableItem;