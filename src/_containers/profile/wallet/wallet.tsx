import ProfileTitleComponent from "@container/profile/profile.title.tsx";
import ProfileNavigationComponent from "@container/profile/profile.navigation.tsx";
import {useEffect, useState} from "react";
import ProfileWalletTabContent from "@container/profile/wallet/wallet.tab.content.tsx";
import ProfileWalletTab from "@container/profile/wallet/wallet.tab.tsx";
import {
    CurrencySymbol,
    useCreateKhanteumPushCodeMutation,
    useCreateWithdrawRequestMutation, useGetCurrencyExchangeLazyQuery,
    useGetUserHistoryByUserIdQuery
} from "@graphql/graphql.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import WithdrawModal from "@container/modal/withdraw.modal.tsx";
import useStylesheet from "@helper/useStylesheet.tsx";
import {useTranslation} from "react-i18next";
import Swal from "sweetalert2";
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";
import {onErrorSwal} from "@helper/swal.handler.tsx";
import PushCodeModal from "@container/modal/push-code.modal.tsx";
import {onUpdateCurrencyAction} from "@action/common.action.tsx";
import Loading from "@container/_common/loading.tsx";

export enum HistoryType {
    WALLET_HISTORY_TYPE = 'SELL,SELL_WITHDRAW_REQUEST,SELL_WITHDRAW',
    REWARD_HISTORY_TYPE = 'CREATOR_FEE,PRE_OWNER_FEE,FEE_WITHDRAW_REQUEST,FEE_WITHDRAW',
    BALANCE_WITHDRAW_REQUEST = 'SELL_WITHDRAW_REQUEST',
    REWARD_WITHDRAW_REQUEST = 'FEE_WITHDRAW_REQUEST',
    PUSH_WITHDRAW_REQUEST = 'KHANTEUM_PUSH_WITHDRAW_REQUEST',
    PUSH_HISTORY_TYPE = 'KHANTEUM_PUSH,KHANTEUM_PUSH_WITHDRAW,KHANTEUM_PUSH_WITHDRAW_REQUEST'
}

const ProfileWalletContainer = () => {
    useStylesheet('/css/add-style.css');
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const {currencyUnit} = useSelector((root: RootState) => root.CommonReducer);

    const [pushCode, setPushCode] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPushCodeModalOpen, setIsPushCodeModalOpen] = useState(false);
    const [withdrawType, setWithdrawType] = useState<string>(HistoryType.BALANCE_WITHDRAW_REQUEST);
    const {user} = useSelector((root: RootState) => root.AuthReducer);
    const [page, setPage] = useState<number>(1);
    const [detailType, setDetailType] = useState<string>(HistoryType.BALANCE_WITHDRAW_REQUEST);

    const [onCreateWithdrawRequest] = useCreateWithdrawRequestMutation();
    const [createKhanteumPushCode] = useCreateKhanteumPushCodeMutation();
    const [getCurrencyExchange, { loading }] = useGetCurrencyExchangeLazyQuery();

    const getDetailType = (detailType: string) => {
        switch (detailType) {
            case HistoryType.BALANCE_WITHDRAW_REQUEST: return HistoryType.WALLET_HISTORY_TYPE;
            case HistoryType.REWARD_WITHDRAW_REQUEST: return HistoryType.REWARD_HISTORY_TYPE;
            case HistoryType.PUSH_WITHDRAW_REQUEST: return HistoryType.PUSH_HISTORY_TYPE;
        }
    }

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

    const {data, refetch} = useGetUserHistoryByUserIdQuery({
        variables: {
            input: {
                type: 'PAYMENT',
                detailType: getDetailType(detailType),
                page: page,
            }
        }
    });

    useEffect(() => {
       refetch({
              input: {
                type: 'PAYMENT',
                detailType: getDetailType(detailType),
                page: page,
              }
         }).then(() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
         });
    }, [page]);

    const onToggleTab = (detailType: string) => {
        setPage(1);
        setDetailType(detailType);
    }

    const onClickShowWithdrawModal = (detailType: string) => {
        setWithdrawType(detailType);
        setIsModalOpen(true);
    }

    const getTitle = (type: string) => {
        switch (type) {
            case HistoryType.WALLET_HISTORY_TYPE:
                return t('profile_wallet.wallet_title');
            case HistoryType.REWARD_HISTORY_TYPE:
                return t('profile_wallet.reward_title');
            case HistoryType.PUSH_HISTORY_TYPE:
                return t('profile_wallet.push_title');
            default:
                return '';
        }
    }

    const onClickWithdraw = async (amount: string) => {
        dispatch(onToggleLoadingModalAction(true));
        if (withdrawType ===  HistoryType.PUSH_WITHDRAW_REQUEST)
            await onCreateKhanteumPushCode(amount);
        else
            await createWithdrawRequest(amount);
        dispatch(onToggleLoadingModalAction(false));
        setIsModalOpen(false);
    }

    const createWithdrawRequest = (amount: string) => onCreateWithdrawRequest({
        variables: {
            input: {
                detailType: withdrawType!,
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
        return;
    })

    const onCreateKhanteumPushCode = (amount: string) => createKhanteumPushCode({
        variables: {
            input: {
                amount: amount
            }
        }
    }).then(response => {
        if (!response)
            onErrorSwal('ERROR', 'Failed to create Khanteum Push Code');
        else if (response.data?.createKhanteumPushCode?.khanteumPushCode) {
            setPushCode(response.data.createKhanteumPushCode.khanteumPushCode.code!);
            setIsPushCodeModalOpen(true);
        }
        else
            onErrorSwal('ERROR', 'Failed to create Khanteum Push Code');
        return ;
    })

    if (loading) return <Loading/>

    return (
        <div id="main-wrapper" className="front">
            <ProfileTitleComponent path={t(`profile_wallet.title`)}/>
            <div className="profile-page">
                <div className="container mh460">
                    <ProfileNavigationComponent />
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-12">
                            <ProfileWalletTab title={t('profile_wallet.wallet_tab')}
                                              balance={user?.balance ?? '0'} isPush={false}
                                              onClickWithdraw={() => onClickShowWithdrawModal(HistoryType.BALANCE_WITHDRAW_REQUEST)}
                                              onClickDetail={() => onToggleTab(HistoryType.BALANCE_WITHDRAW_REQUEST)}
                                              isActivated={detailType === HistoryType.BALANCE_WITHDRAW_REQUEST} />
                            <ProfileWalletTab title={t('profile_wallet.reward_tab')}
                                              balance={user?.reward_balance ?? '0'} isPush={false}
                                              onClickWithdraw={() => onClickShowWithdrawModal(HistoryType.REWARD_WITHDRAW_REQUEST)}
                                              onClickDetail={() => onToggleTab(HistoryType.REWARD_WITHDRAW_REQUEST)}
                                              isActivated={detailType === HistoryType.REWARD_WITHDRAW_REQUEST} />
                            <ProfileWalletTab title={t('profile_wallet.push_tab')}
                                              balance={user?.push_balance ?? '0'} isPush={true}
                                              onClickWithdraw={() => onClickShowWithdrawModal(HistoryType.PUSH_WITHDRAW_REQUEST)}
                                              onClickDetail={() => onToggleTab(HistoryType.PUSH_WITHDRAW_REQUEST)}
                                              isActivated={detailType === HistoryType.PUSH_WITHDRAW_REQUEST}/>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-12">
                            <ProfileWalletTabContent   title={getTitle(detailType)}
                                                       total={data?.getUserHistoryByUserId.total ?? 0}
                                                       page={page}
                                                       setPage={setPage}
                                                       items={data?.getUserHistoryByUserId.histories ?? []} />
                        </div>
                    </div>
                </div>
            </div>
            <WithdrawModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} detailType={withdrawType} onClickWithdraw={onClickWithdraw}/>
            <PushCodeModal code={pushCode} setIsPushCodeModalOpen={setIsPushCodeModalOpen} isPushCodeModalOpen={isPushCodeModalOpen} />
        </div>
    )
}

export default ProfileWalletContainer;