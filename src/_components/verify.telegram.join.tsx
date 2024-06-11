import {
    TelegramVerifyType,
    UserSns
} from "@graphql/graphql.ts";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {onErrorSwal} from "@helper/swal.handler.tsx";
import {getErrorMessage} from "@helper/error.message.tsx";
import {getTelegramLink, getTelegramVerify} from "../service/sns.service.tsx";

export type VerifyTelegramJoinComponentProps = {
    userSNS: UserSns;
    type: TelegramVerifyType;
    setUserSNS: (userSNS: UserSns) => void;
}

const VerifyTelegramJoinComponent = (props: VerifyTelegramJoinComponentProps) => {
    const {t} = useTranslation();
    const {userSNS, type, setUserSNS} = props;
    // const [getTelegramVerify] = useGetTelegramVerifyLazyQuery();
    // const [getTelegramLink] = useGetTelegramLinkLazyQuery();
    const [intervalId, setIntervalId] = useState<number | undefined>(undefined);

    useEffect(() => {
        return () => {
            if (intervalId) clearInterval(intervalId);
        }
    }, [intervalId])

    const onGetTelegramVerify = (intervalId?: number) => getTelegramVerify({
        type: type
    }).then( async response => {
        if (!response) {
            onErrorSwal(t('common.error'), getErrorMessage('NO_RESPONSE_DATA'));
            return false;
        } else if (response.error) {
            if (response.error.code !== 'NOT_FOUND')
                onErrorSwal(t('common.error'), response.error.message ? response.error.message : 'Something went wrong!');
            return false;
        } else if (response.userSNS) {
            if (intervalId) clearInterval(intervalId);
            setUserSNS(response.userSNS);
            return true;
        } else
            return false;
    })

    const onGetTelegramLink = () => getTelegramLink({
        type: type
    }).then(response => {
        if (!response || response.error || !response.link)
            onErrorSwal(t('common.error'), response.error?.message ? response.error.message : 'Something went wrong!');
        else
            window.open(response.link, '_blank');
        return;
    });

    const onClick = async () => {
        if (getCompleted())
            return;
        if (intervalId)
            return onGetTelegramLink();

        const isVerify = await onGetTelegramVerify();
        if (!isVerify) {
            const id = window.setInterval(() => onGetTelegramVerify(id), 5000);
            setIntervalId(id);
            await onGetTelegramLink();
        }
    }

    const getCompleted = () => {
        if (type === TelegramVerifyType.Channel)
            return userSNS.isTelegramChannelJoined!;
        else
            return userSNS.isTelegramGroupJoined!;
    }

    const getButtonText = () => {
        if (getCompleted())
            return t('silver_event.step_complete');
        else if (type === TelegramVerifyType.Group)
            return t('silver_event.step_06_btn');
        else if (type === TelegramVerifyType.Channel)
            return t('silver_event.step_05_btn');
    }

    return (
        <a className={`ms-btn tw ${getCompleted() && 'completed'}`}
           href={"javascript:void(0);"}
           onClick={() => onClick()}>{getButtonText()}</a>
    )
}

export default VerifyTelegramJoinComponent;