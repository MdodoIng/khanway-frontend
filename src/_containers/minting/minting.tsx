import {
    CurrencySymbol,
    PaymentStatus, useGetBlockNumberQuery, useGetCurrencyExchangeLazyQuery, useGetNftPriceCapQuery,
    useGetPaymentStateLazyQuery,
    useGetTotalSaleAmountQuery
} from "@graphql/graphql.ts";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import Loading from "@container/_common/loading.tsx";
import QueryString from 'qs';
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";
import MintingSubmit from "@container/minting/minting.submit.tsx";
import MintingInfo from "@container/minting/minting.info.tsx";
import MintingCount from "@container/minting/minting.count.tsx";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import CurrencyToggle from "@component/currency.toggle.tsx";
import {RootState} from "@reducer/root.reducer.tsx";
import {getCurrencyValue} from "@helper/currency.handler.tsx";
import {onUpdateCurrencyAction} from "@action/common.action.tsx";

const MintingContainer = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {currencySymbol, currencyUnit, currency} = useSelector((root: RootState) => root.CommonReducer);

    const { data: totalSaleAmount, loading: getTotalSaleAmountLoading } = useGetTotalSaleAmountQuery();
    const [onGetPaymentState,{ startPolling, stopPolling }] = useGetPaymentStateLazyQuery()
    const { data: blockNumber, loading: getBlockNumberLoading,
        startPolling: blockNumberStartPolling } = useGetBlockNumberQuery();
    const { data: priceCap, loading: getPriceCapLoading } = useGetNftPriceCapQuery();
    const [getCurrencyExchange] = useGetCurrencyExchangeLazyQuery();


    useEffect(() => {
        getCurrencyExchange({
            variables: {
                input: {
                    symbol: currencyUnit === 'USD' ? CurrencySymbol.Krw : CurrencySymbol.Inr
                }
            }
        }).then(response => {
            dispatch(onUpdateCurrencyAction(response.data?.getCurrencyExchange.currencyExchange!))
        })
    }, []);


    useEffect(() => {
        blockNumberStartPolling(5000);
        const queryData = QueryString.parse(window.location.search, { ignoreQueryPrefix: true });
        if (queryData.token && queryData.PayerID) {
            onGetPaymentState({
                variables: {
                    input: {
                        orderId: queryData.token.toString()
                    }
                }
            }).then(response => {
                if (response.data?.getPaymentState?.payment?.status ?? undefined === PaymentStatus.Approved) {
                    dispatch(onToggleLoadingModalAction(false));
                    Swal.fire({
                        icon: "success",
                        text: t(`minting.complete`),
                        showConfirmButton: true,
                        confirmButtonText: t(`minting.confirm_button`)
                    }).then(() => {
                        stopPolling();
                        navigate('/profile/history');
                    });
                }
                return;
            }).catch(_error => {
                dispatch(onToggleLoadingModalAction(false));
            })
            startPolling(1000);
        } else {
             dispatch(onToggleLoadingModalAction(false));
        }
        return;
    }, [])

    if (getTotalSaleAmountLoading && getBlockNumberLoading && getPriceCapLoading && (!currency || currency === null)) return <Loading />;


    return (
        <div id="main-wrapper" className="front">

            <div className="container pagetitle-area">
                <div className="col-12">
                    <div className="count-box slot" style={{backgroundImage: currencyUnit === 'USD' ? 'url(/images/slotmachine_bg_usd.png)' : 'url(/images/slotmachine_bg_inr.png)'}}>
                        <MintingCount type={"slot"} totalSaleAmount={currencyUnit === 'USD'
                            ? totalSaleAmount?.getTotalSaleAmount.totalSaleAmount
                            : parseInt(currency?.value!) * totalSaleAmount?.getTotalSaleAmount.totalSaleAmount!}/>
                    </div>
                </div>

                <div className="row">

                    <div className="col-xl-6 col-lg-6 col-12">
                        <div className="nft-item">
                            <img src="/images/nft/general-egg.gif" alt=""/>
                        </div>

                        <div className="social">
                            <a href="https://t.me/Khanteum_Channel"><i className="ri-telegram-fill"
                                                                       style={{fontSize: '32px'}}></i></a>
                            <a href="https://t.me/khanteum_official"><i className="ri-telegram-fill"
                                                                        style={{fontSize: '32px'}}></i></a>
                            <a href="https://www.facebook.com/khanteum.fb" target="_blank"><i
                                className="ri-facebook-circle-fill" style={{fontSize: '32px'}}></i></a>
                            <a href="https://twitter.com/KHAN_ZZANG" target="_blank"><i className="ri-twitter-fill"
                                                                                        style={{fontSize: '32px'}}></i></a>
                            <a href={`https://www.youtube.com/${localStorage.getItem('khanway_language') === 'ko' ? 'c/khanteum' : '@KHAN_ZZANG '}`}
                               target="_blank"><i className="ri-youtube-fill" style={{fontSize: '32px'}}></i></a>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-12 search-box">
                        <div className="nft-info" style={{paddingTop: 0, paddingRight: 0}}>
                            <div className={"d-flex mb-3 mt-3"} style={{justifyContent: 'center'}}>
                                <CurrencyToggle/>
                            </div>
                            <div style={{paddingRight: '40px'}}>
                                <MintingInfo blockNumber={blockNumber?.getBlockNumber.value ?? '0'}/>
                                <div className="min-block gridone">
                                    <div className="block-title">{t(`minting.sales_amount`)}</div>
                                    <div className="count-box">
                                        <span>{currencySymbol}</span>
                                        <MintingCount type={"sale"}
                                                      totalSaleAmount={getCurrencyValue(currencyUnit, totalSaleAmount?.getTotalSaleAmount.totalSaleAmount ?? 0, currency!)}/>
                                    </div>
                                </div>
                                <MintingSubmit
                                    priceCap={priceCap?.getNFTPriceCap.nftPriceCap?.sort((a, b) => b.price! - a.price!) ?? []}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MintingContainer;