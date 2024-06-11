import {UserHistory} from "@graphql/graphql.ts";
import HistoryTableItem from "@container/profile/_component/history/history.table.item.tsx";
import PaginationComponent from "@container/profile/_component/history/history.table.pagination.tsx";
import {getPageCountV2} from "@helper/pageCount.tsx";
import {t} from "i18next";
import {useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";

export type ProfileWalletTabProps = {
    title: string;
    items: UserHistory[];
    total: number;
    page: number;
    setPage: (page: number) => void;
}
const ProfileWalletTabContent = ({title, items, total, page, setPage}: ProfileWalletTabProps) => {
    const { currency }= useSelector((root: RootState) => root.CommonReducer);
    return (
        <div data-tab-content="" id="tab1" className="items active">
            <h3>{title}</h3>
            <ul className="history-container">
                {
                    items.length === 0
                        ?  <li className="h-block tit text-center">{t(`profile_nfw.nodata`)}</li>
                        : items.map((item, index) => <HistoryTableItem key={index} type="PAYMENT" history={item}
                                                                     currencyExchange={currency?.value ?? '0'}/>)
                }
            </ul>
            <PaginationComponent setPage={setPage} page={page}
                                 pageCount={getPageCountV2(total ?? 0, 10)}/>
        </div>
    )
}

export default ProfileWalletTabContent;