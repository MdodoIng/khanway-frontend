import {Nft, NftIsOnSale, useUpdateNftSaleMutation} from "@graphql/graphql.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import Swal from "sweetalert2";
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";
import {t} from "i18next";
import {useEffect, useState} from "react";
import {onErrorSwal, onSuccessSwal} from "@helper/swal.handler.tsx";
import {useNavigate} from "react-router-dom";
import {getErrorMessage} from "@helper/error.message.tsx";

export type DetailButtonProps = {
    nft: Nft;
}

const DetailButton = ({nft}: DetailButtonProps) => {
    const dispatch = useDispatch();
    const [popupWindow, setPopupWindow] = useState<Window | null>(null);
    const {user} = useSelector((state: RootState) => state.AuthReducer);
    const navigate = useNavigate();
    // const [onCreateBuyOrder] = useCreateBuyOrderMutation();
    const [onUpdateNFTOnSale] = useUpdateNftSaleMutation();

    const openPopup = () => {
        dispatch(onToggleLoadingModalAction(true));
        const apiPrefix = encodeURIComponent(import.meta.env.VITE_APP_LOCAL_URL);
        const name = encodeURIComponent(`KhanHwang's EGG #${nft.tokenId}`);
        // const url = `/popup/${localStorage.getItem('khanway_language') ?? 'en'}/payment.html?type=MINT&name=KhanHwang's EGG $${selectedAmount}&currency_unit=${currencyUnit}&currency_value=${currency?.value}&amount=${amount}&count=${count}&price=${selectedAmount}&apiPrefix=${apiPrefix}`;
        //
        const url = `/popup/${localStorage.getItem('khanway_language') ?? 'en'}/payment.html?type=BUY&name=${name}&currency_unit=${'USD'}&currency_value=${1300}&amount=${nft.price}&count=${1}&price=${nft.price}&nftId=${nft.id}&apiPrefix=${apiPrefix}`;
        const newWindow = window.open(url, '_blank', `width=${screen.width}, height=${screen.height}, fullscreen=yes`,);
        newWindow?.addEventListener('message', receiveMessage);
        setPopupWindow(newWindow);
    }

    useEffect(() => {
        if (!popupWindow)
            return;

        return () => {
            popupWindow?.removeEventListener('message', receiveMessage);
            setPopupWindow(null);
        }
    }, [])

    const receiveMessage = (event: any) => {
        if (event.origin !== import.meta.env.VITE_APP_LOCAL_URL)
            return;
        if (event.data === 'success') {
            onSuccessSwal(t('detail.buy_request_success'), t('detail.buy_request_success_msg'), undefined,undefined,() => navigate('/profile/history', { replace: true}));
        } else if (event.data === 'fail') {
            onErrorSwal(t('detail.buy_request_fail'), t('detail.buy_request_fail_msg'), undefined,undefined,() => window.location.reload());
        }
        dispatch(onToggleLoadingModalAction(false));
        popupWindow?.removeEventListener('message', receiveMessage);
        setPopupWindow(null);
    }



    const onClickBuy = () => Swal.fire({
        icon: 'question',
        title: t('detail.buy_confirm_title'),
        text: t('detail.buy_confirm_msg'),
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            // dispatch(onToggleLoadingModalAction(true));
            openPopup();
            // onCreateBuyOrder({
            //     variables: {
            //         input: {
            //             nftId: nft.id!
            //         }
            //     }
            // }).then(response => {
            //     if (response.data?.createBuyOrder.error) {
            //         dispatch(onToggleLoadingModalAction(false));
            //         Swal.fire({
            //             icon: 'error',
            //             title: 'ERROR',
            //             text: response.data?.createBuyOrder.error.message!
            //         })
            //     }
            //     else
            //         window.location.href = response.data!.createBuyOrder.approveUrl!
            //     return;
            // }).catch((error) => {
            //     console.log(error)
            //     dispatch(onToggleLoadingModalAction(false));
            //     Swal.fire({
            //         icon: "error",
            //         title: "ERROR",
            //         text: error.message
            //     })
            // })
        }
    })

    const onClickSale = (state: NftIsOnSale) => {
        if (nft.tradeCount === 0)
            return onErrorSwal(t('detail.trade_count_over_title'), t('detail.trade_count_over_msg'));
        Swal.fire({
            title: t('detail.update_sale_title'),
            text: t('detail.update_sale_msg'),
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                if (user?.isKYCVerified === false) {
                    onErrorSwal(
                        'ERROR',
                        t('detail.kyc_not_verified'),
                        undefined,
                        undefined,
                        () => navigate('/profile/kyc', {replace: true})
                    );
                    return;
                } else
                    onUpdateNFTOnSale({
                        variables: {
                            input: {
                                nftId: nft.id!,
                                isOnSale: state
                            }
                        }
                    }).then(response => {
                        console.log('response: ', response)
                        if (response.data?.updateNFTSale.error)
                            onErrorSwal('ERROR', getErrorMessage(response.data.updateNFTSale.error.code?.toString() ?? ''));
                        else
                            onSuccessSwal('SUCCESS', t('detail.update_sale_success'), undefined, undefined, () => window.location.reload());
                        return;
                    }).catch((error) => {
                        console.log(error)
                        Swal.fire({
                            icon: "error",
                            title: "ERROR",
                            text: error.message
                        })
                    })
            }

        })
    }

    const onClickNotLogin = () => Swal.fire({
            icon: "error",
            title: t('common.unauthorized_title'),
            text: t('common.unauthorized_reject')
        }).then(() => window.location.href = "/auth/login")

    if (user && user.id === nft.owner!.id) { // 로그인한 사용자가 NFT 소유자인 경우
        if (nft.isOnSale === NftIsOnSale.OnSale)
            return <button className="btn btn-primary" onClick={() => onClickSale(NftIsOnSale.NotOnSale)}>{t('detail.stop_sale')}</button> // 판매 중단
        else if (nft.isOnSale === NftIsOnSale.NotOnSale)
            return <button className="btn btn-primary" onClick={() => onClickSale(NftIsOnSale.OnSale)}>{t('detail.start_sale')}</button> // 판매 시작
        else if (nft.tradeCount === 0)
            return <button className="btn btn-primary" disabled={true}>{t('detail.trade_count_over_btn')}</button> // 판매 시작
        else
            return <button className="btn btn-primary" disabled={true}>{t('detail.pending_sale')}</button> // 결제 진행중
    } else if (!user) { // 로그인 안한 경우
        if (nft.isOnSale === NftIsOnSale.OnSale)
            return <button className="btn btn-primary" onClick={() => onClickNotLogin()}>{t('detail.buy')}</button> // 구매 (로그인으로 이동)
        else
            return <button className="btn btn-primary disabled" onClick={() => onClickNotLogin()}>{t('detail.buy')}</button> // 구매 (로그인으로 이동)
    } else { // 로그인한 사용자가 NFT 소유자가 아닌 경우
        if (nft.isOnSale === NftIsOnSale.OnSale)
            return <button className="btn btn-primary" onClick={() => onClickBuy()}>{t('detail.buy')}</button> // 구매
        else
            return <button className="btn btn-primary disabled" disabled={true}>{t('detail.buy')}</button> // 구매
    }

}

export default DetailButton;