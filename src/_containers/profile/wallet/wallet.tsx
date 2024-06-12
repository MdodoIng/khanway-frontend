import ProfileTitleComponent from "@container/profile/profile.title.tsx";
import {t} from "i18next";
import ProfileNavigationComponent from "@container/profile/profile.navigation.tsx";
import {useEffect, useState} from "react";
import ProfileWalletTabContent from "@container/profile/wallet/wallet.tab.content.tsx";
import ProfileWalletTab from "@container/profile/wallet/wallet.tab.tsx";
import {useGetUserHistoryByUserIdQuery} from "@graphql/graphql.ts";
import {useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import WithdrawModal from "@container/modal/withdraw.modal.tsx";
import useStylesheet from "@helper/useStylesheet.tsx";

enum HistoryType {
    WALLET_HISTORY_TYPE = 'SELL,SELL_WITHDRAW_REQUEST,SELL_WITHDRAW',
    REWARD_HISTORY_TYPE = 'CREATOR_FEE,PRE_OWNER_FEE,FEE_WITHDRAW_REQUEST,FEE_WITHDRAW',
    BALANCE_WITHDRAW_REQUEST = 'SELL_WITHDRAW_REQUEST',
    REWARD_WITHDRAW_REQUEST = 'FEE_WITHDRAW_REQUEST',
}

const ProfileWalletContainer = () => {
    useStylesheet('/css/add-style.css');
    const {user} = useSelector((root: RootState) => root.AuthReducer);
    const [isWalletTab, setIsWalletTab] = useState(true);
    const [page, setPage] = useState<number>(1);
    const [detailType, setDetailType] = useState<string|undefined>(undefined);
    const {data, refetch} = useGetUserHistoryByUserIdQuery({
        variables: {
            input: {
                type: 'PAYMENT',
                detailType: isWalletTab ? HistoryType.WALLET_HISTORY_TYPE : HistoryType.REWARD_HISTORY_TYPE,
                page: page,
            }
        }
    });

    useEffect(() => {
       refetch({
              input: {
                type: 'PAYMENT',
                detailType: isWalletTab ? HistoryType.WALLET_HISTORY_TYPE : HistoryType.REWARD_HISTORY_TYPE,
                page: page,
              }
         }).then(() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
         });
    }, [page]);

    const onToggleTab = (isWallet: boolean) => {
        setPage(1);
        setIsWalletTab(isWallet);
    }

    return (
        <div id="main-wrapper" className="front">
            <ProfileTitleComponent path={t(`profile_wallet.title`)}/>
            <div className="profile-page">
                <div className="container mh460">
                    <ProfileNavigationComponent />
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-12">
                            <ProfileWalletTab title={t('profile_wallet.wallet_tab')} balance={user?.balance ?? '0'} onClickWithdraw={() => setDetailType(HistoryType.BALANCE_WITHDRAW_REQUEST)} onClickDetail={() => onToggleTab(true)} isActivated={isWalletTab} />
                            <ProfileWalletTab title={t('profile_wallet.reward_tab')} balance={user?.reward_balance ?? '0'} onClickWithdraw={() =>setDetailType(HistoryType.REWARD_WITHDRAW_REQUEST)} onClickDetail={() => onToggleTab(false)} isActivated={!isWalletTab} />
                        </div>
                        <div className="col-xl-9 col-lg-8 col-12">
                            <ProfileWalletTabContent   title={isWalletTab ? t('profile_wallet.wallet_title') : t('profile_wallet.reward_title')}
                                                       total={data?.getUserHistoryByUserId.total ?? 0}
                                                       page={page}
                                                       setPage={setPage}
                                                       items={data?.getUserHistoryByUserId.histories ?? []} />
                        </div>
                    </div>
                </div>
            </div>
            <WithdrawModal setDetailType={setDetailType}  detailType={detailType}/>
        </div>
    )
}

export default ProfileWalletContainer;