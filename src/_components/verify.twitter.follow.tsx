import {UserSns} from "@graphql/graphql.ts";
import {getErrorMessage} from "@helper/error.message.tsx";
import {useTranslation} from "react-i18next";
import {onErrorSwal} from "@helper/swal.handler.tsx";
import {followKhanway} from "../service/sns.service.tsx";

export type VerifyTwitterFollowProps = {
    userSNS: UserSns;
    setUserSNS: (userSNS: UserSns) => void;
}

const VerifyTwitterFollow = (props: VerifyTwitterFollowProps) => {
    const {t} = useTranslation();
    const {userSNS, setUserSNS} = props;
    // const [followKhanway] = useFollowKhanwayMutation();

    const onClickFollow = () => {
        if (userSNS.isXFollowed) return;
        followKhanway().then(response => {
            if (!response)
                onErrorSwal(t('common.error'), getErrorMessage('NO_RESPONSE_DATA'));
            else if (response.error)
                onErrorSwal(t('common.error'), getErrorMessage(response.error.code!));
            else if (response.userSNS)
                setUserSNS(response.userSNS);
            return;
        })
    }


    return (
        <a href={"javascript:void(0);"}
           onClick={onClickFollow}
           className={`ms-btn tw ${userSNS.isXFollowed && "completed"} disabled:'`}>{userSNS.isXFollowed ? t('silver_event.step_complete') : t('silver_event.step_03_btn')}</a>
    )
}

export default VerifyTwitterFollow;