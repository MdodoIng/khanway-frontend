import {UserHistory} from "@graphql/graphql.ts";
import HistoryTableItem from "@container/profile/_component/history/history.table.item.tsx";

export interface CustomUserHistoryType extends UserHistory {
    metadata: any|undefined;
}

export type HistoryTableProps = {
    type: string;
    histories: Array<UserHistory>;
    currencyExchange: string;
}
const HistoryTable = (props: HistoryTableProps) => {
    const {histories, type, currencyExchange} = props;

    return(
        <ul className="history-container">
            {
                histories.map((history, index) =>
                    <HistoryTableItem key={index} type={type} history={history} currencyExchange={currencyExchange}/>)
            }
        </ul>
    )
}

export default HistoryTable;