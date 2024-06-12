import {Nft, NftIsOnSale, useCreateBuyOrderMutation, useUpdateNftSaleMutation} from "@graphql/graphql.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import Swal from "sweetalert2";
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";
import {t} from "i18next";

export type DetailButtonProps = {
    nft: Nft;
}

const DetailButton = ({nft}: DetailButtonProps) => {
    const dispatch = useDispatch();
    const {user} = useSelector((state: RootState) => state.AuthReducer);
    const [onCreateBuyOrder] = useCreateBuyOrderMutation();
    const [onUpdateNFTOnSale] = useUpdateNftSaleMutation();

    const onClickBuy = () => Swal.fire({
        icon: 'question',
        title: t('detail.buy_confirm_title'),
        text: t('detail.buy_confirm_msg'),
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            dispatch(onToggleLoadingModalAction(true));
            onCreateBuyOrder({
                variables: {
                    input: {
                        nftId: nft.id!
                    }
                }
            }).then(response => {
                if (response.data?.createBuyOrder.error) {
                    dispatch(onToggleLoadingModalAction(false));
                    Swal.fire({
                        icon: 'error',
                        title: 'ERROR',
                        text: response.data?.createBuyOrder.error.message!
                    })
                }
                else
                    window.location.href = response.data!.createBuyOrder.approveUrl!
                return;
            }).catch((error) => {
                console.log(error)
                dispatch(onToggleLoadingModalAction(false));
                Swal.fire({
                    icon: "error",
                    title: "ERROR",
                    text: error.message
                })
            })
        }
    })

    const onClickSale = (state: NftIsOnSale) => {
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
                    Swal.fire({
                        icon: 'error',
                        titleText: 'ERROR',
                        html: t('detail.kyc_not_verified')
                    })
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
                        if (response.data?.updateNFTSale.error)
                                Swal.fire({
                                    icon: "error",
                                    title: "ERROR",
                                    text: response.data?.updateNFTSale.error.message!
                                })
                        else
                            Swal.fire({
                                icon: "success",
                                title: "SUCCESS",
                                text: t('detail.update_sale_success')
                            }).then(() => window.location.reload())
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