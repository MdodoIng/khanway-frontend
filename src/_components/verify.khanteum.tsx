import {useTranslation} from "react-i18next";
import {onYoutubeSubscribe} from "../service/sns.service.tsx";
import {UserSns} from "@graphql/graphql.ts";

export type VerifyKhanteumProps = {
    userSNS: UserSns;
    setUserSNS: (userSNS: UserSns) => void;
}

const VerifyKhanteum = (props: VerifyKhanteumProps) => {
    const {t} = useTranslation();
    const {userSNS, setUserSNS} = props;
    // const [onYoutubeSubscription] = useOnYoutubeSubscriptionMutation();

    const onClick = () => {
        if (userSNS.isYoutubeSubscribed) return;
        window.open('https://www.youtube.com/@KHAN_ZZANG?sub_confirmation=1', '_blank');
        onYoutubeSubscribe().then((response) => {
            if (!response || response.error || !response.userSNS)
                console.log('error: ', response.error ? response.error!.message! : 'Something went wrong!');
            else
                setUserSNS(response.userSNS);
        })
    }

    return (
        <a href={"javascript:void(0);"}
           onClick={onClick}
           className={`ms-btn tw ${userSNS.isKhanteumJoined && 'completed'}`}>{userSNS.isKhanteumJoined ? t('silver_event.step_complete') : t('silver_event.step_07_btn')}</a>
    )
}

export default VerifyKhanteum;