import {UserSns} from "@graphql/graphql.ts";
import {useNavigate} from "react-router-dom";
import TelegramLoginButton from "@component/telegram.button.tsx";
import {useTranslation} from "react-i18next";
import {onErrorSwal} from "@helper/swal.handler.tsx";
import {getErrorMessage} from "@helper/error.message.tsx";
import {connectTelegram} from "../service/sns.service.tsx";

export type VerifyTelegramConnectProps = {
    userSNS: UserSns;
    setUserSNS: (userSNS: UserSns) => void;
}

const VerifyTelegramConnect = (props: VerifyTelegramConnectProps) => {
    const {t} = useTranslation();
    const {userSNS, setUserSNS} = props;
    const navigate = useNavigate();
    // const [connectTelegram] = useConnectTelegramMutation();

    const onConnectTelegram = (response: any) => {
        return connectTelegram({
            telegramUserId: response.id.toString(),
            telegramUsername: response.username,
            telegramFirstName: response.first_name,
            telegramLastName: response.last_name,
        }).then(response => {
            if (!response || response.error || !response.userSNS)
                onErrorSwal(t('common.error'),
                    response.error?.message!
                        ? response.error?.message!
                        : getErrorMessage('NO_RESPONSE_DATA'),
                    undefined,
                    undefined,
                    () => navigate('/'))
            else
                setUserSNS(response.userSNS);
            return;
        }).catch(_error => {
            console.log('error: ', _error);
            onErrorSwal(t('common.error'), getErrorMessage('NO_RESPONSE_DATA'), undefined, undefined, () => navigate('/'));
            return;
        })
    }

    if (userSNS.telegramUserId)
        return (
            <a href={"javascript:void(0);"}
               className={`ms-btn tw completed`}>{t('silver_event.step_complete')}</a>
        )

    return (
        <TelegramLoginButton className={"ms-btn tw"} botName={import.meta.env.VITE_TELEGRAM_BOT_NAME} buttonSize={"medium"}
                             dataOnauth={onConnectTelegram}/>
    )
}

export default VerifyTelegramConnect;