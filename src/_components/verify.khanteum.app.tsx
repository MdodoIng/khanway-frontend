import {useTranslation} from "react-i18next";
import {UserSns} from "@graphql/graphql.ts";
import {useEffect, useState} from "react";
import {getUserSNS} from '../service/sns.service.tsx';

type VerifyKhanteumProps = {
    userSNS: UserSns
}
const VerifyKhanteumApp = (props: VerifyKhanteumProps) => {
    const {t} = useTranslation();
    const {userSNS} = props;

    const [isComplete, setIsComplete] = useState<boolean>(userSNS.isKhanteumJoined!);
    const [intervalId, setIntervalId] = useState<number|undefined>(undefined);

    const getButtonText = () => {
        if(!isComplete)
            return t('sns_verify.step_09_btn');
        else
            return t(`sns_verify.step_complete`)
    }

    const onClick = async () => {
        if (isComplete)
            return;
        else {
            const AUTH_TOKEN = "khanway_access_token";
            const token = sessionStorage.getItem(AUTH_TOKEN) || localStorage.getItem(AUTH_TOKEN);
            window.open(`https://m.khanteum.com/verify-khanway?khanwayId=${encodeURIComponent(token!)}`);
            const id = window.setInterval(() => {
                getUserSNS().then(sns => {
                    if(sns.userSNS?.isKhanteumJoined)
                        setIsComplete(true)
                })
            }, 5000)
            setIntervalId(id);
        }
    }

    useEffect(() => {
        if(isComplete) clearInterval(intervalId)
    }, [isComplete])

    return (
        <a className={`ms-btn tw ${isComplete && 'completed'}`}
           href={"javascript:void(0);"}
           onClick={() => onClick()}
        >{getButtonText()}</a>
    )
}

export default VerifyKhanteumApp;