import {UserHistory} from "@graphql/graphql.ts";
import {timeAgo} from "@helper/timeAgo.tsx";
import {removeTrailingZeros} from "@helper/data.util.tsx";

export type DetailHistoryProps = {
    item: UserHistory;
}
const DetailHistory = ({item}: DetailHistoryProps) => {
    return (
        <li className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <div className="activity-user-img me-3"><img
                    src={item.user?.profileImage!} alt="" width="50"/>
                </div>
                <div className="activity-info">
                    <h5 className="mb-0">{item.user?.nickname}</h5>
                    <p>$ {removeTrailingZeros(item.amount!)}</p>
                </div>
            </div>
            <div className="text-end"><span className=" text-muted">{timeAgo(new Date(item.createdAt))}</span>
            </div>
        </li>
    )
}

export default DetailHistory;