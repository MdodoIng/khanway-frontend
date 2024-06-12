import {useEffect, useState} from "react";
import {useGetCurrencyExchangeQuery, useGetUserHistoryByUserIdQuery} from "@graphql/graphql.ts";
import Loading from "@container/_common/loading.tsx";
import ProfileTitleComponent from "@container/profile/profile.title.tsx";
import ProfileNavigationComponent from "@container/profile/profile.navigation.tsx";
import ProfileRewardsWithdraw from "@container/profile/rewards/profile.rewards.withdraw.tsx";
import HistoryTable from "@container/profile/_component/history/history.table.tsx";
import {getPageCount} from "@helper/pageCount.tsx";
import PaginationComponent from "@container/profile/_component/history/history.table.pagination.tsx";
import {useTranslation} from "react-i18next";

export type HistoryComponentProps = {
    type: string;
}
const HistoryComponent = (props: HistoryComponentProps) => {
    const {t} = useTranslation();
    const {type} = props;
    const [page, setPage] = useState<number>(1);
    const {data: currencyExchangeData, loading: currencyExchangeLoading} = useGetCurrencyExchangeQuery();
    const {data, loading, refetch } = useGetUserHistoryByUserIdQuery({
        variables: {
            input: {
                type: type,
                page: page,
            }
        }
    });

    useEffect(() => {
        if (loading)
            return;
        refetch({
            input: {
                type: type,
                page: page,
            }
        }).then(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        });
    }, [page]);

    if (loading || currencyExchangeLoading) return <Loading />;

    return (
        <div id="main-wrapper" className="front">
            <ProfileTitleComponent path={type === 'PAYMENT' ? t(`profile_navigation.menu4`) : t(`profile_navigation.menu3`)} />
            <div className="profile-page">
                <div className="container">
                    <ProfileNavigationComponent/>
                    {type === 'PAYMENT' && <ProfileRewardsWithdraw/>}
                    {
                        (data?.getUserHistoryByUserId.histories?.length ?? 0) === 0
                            ? <div className="text-center mt-5">{t(`profile_nfw.nodata`)}</div>
                            :
                            <HistoryTable type={type}
                                          currencyExchange={currencyExchangeData?.getCurrencyExchange?.currencyExchange?.value ?? '0'}
                                          histories={data?.getUserHistoryByUserId.histories as Array<any>}/>
                    }
                    <PaginationComponent setPage={setPage} page={page}
                                         pageCount={getPageCount(data?.getUserHistoryByUserId.total ?? 0, 10)}/>
                </div>
            </div>
        </div>
    )
}

export default HistoryComponent;
