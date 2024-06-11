import {UserSns} from "@graphql/graphql.ts";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {onErrorSwal} from "@helper/swal.handler.tsx";
import {getErrorMessage} from "@helper/error.message.tsx";
import {getTwitterAuthURL, getUserSNS} from "../service/sns.service.tsx";

export type VerifyTwitterConnectProps = {
    userSNS: UserSns;
    setUserSNS: (userSNS: UserSns) => void;
}

const VerifyTwitterConnect = (props: VerifyTwitterConnectProps) => {
    const {t} = useTranslation();
    const {userSNS, setUserSNS} = props;
    const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
    // const [getTwitterLoginURL] = useGetTwitterAuthUrlLazyQuery();
    // const [getUserSNS] = useGetUserSnsLazyQuery();

    useEffect(() => {
        return () => {
            if (intervalId) clearInterval(intervalId);
        }
    }, [intervalId])

    const onGetTwitterLoginURL = () => {
        if (userSNS.isXLinked) return;
        getTwitterAuthURL().then(response => {
            if (!response)
                onErrorSwal(t('common.error'), getErrorMessage('NO_RESPONSE_DATA'));
            else if (response.error || !response.link)
                onErrorSwal(t('common.error'), response.error?.code ? getErrorMessage(response.error?.code) : response.error?.message!);
            else {
                if (!intervalId) {
                    const newIntervalId = window.setInterval(() => onGetUserSNS(newIntervalId), 5000);
                    setIntervalId(newIntervalId);
                }
                window.open(response.link, '_blank')
            }
            return;
        })
    }

    const onGetUserSNS = (intervalId: number) => {
        getUserSNS().then(response => {
            if (!response || response.error || !response.userSNS)
                return;
            else {
                if (response.userSNS.isXLinked && intervalId) {
                    clearInterval(intervalId);
                    setIntervalId(undefined);
                }

                setUserSNS(response.userSNS);
            }
            return;
        }).catch(_error => {
            return;
        })
    }

    return (
        <a href={"javascript:void(0);"}
           onClick={onGetTwitterLoginURL}
           className={`ms-btn tw ${userSNS.isXLinked && "completed"}`}>{userSNS.isXLinked ? t('silver_event.step_complete') : t('silver_event.step_02_btn')}</a>
    )
}

export default VerifyTwitterConnect;