import {UserSns} from "@graphql/graphql.ts";
import {useTranslation} from "react-i18next";

export enum VerifyReferralType {
    Authentication = 'Authentication',
    AirDrop = 'AirDrop',
}

export type VerifyReferralProps = {
    type: VerifyReferralType;
    userSNS: UserSns;
    setIsShow: (isShow: boolean) => void;
}

const VerifyReferral = (props: VerifyReferralProps) => {
    const {t} = useTranslation();
    const {type, userSNS, setIsShow} = props;

    if (type === VerifyReferralType.Authentication && userSNS.referralVerifyCount! >= 1)
        return (<a href={"javascript:void(0);"}
                   onClick={() => setIsShow(true)}
                   className={"ms-btn tw completed mb-2"}>{t('silver_event.step_complete')}</a>)
    else if (type === VerifyReferralType.AirDrop && userSNS.referralVerifyCount! >= 3)
        return (<a href={"javascript:void(0);"}
                   onClick={() => setIsShow(true)}
                   className={"ms-btn tw completed mb-2"}>{t('silver_event.step_complete')}</a>)
    else
        return (<a href={"javascript:void(0);"}
                   onClick={() => setIsShow(true)}
                   className={"ms-btn tw mb-2"}>{t('silver_event.step_08_btn')}</a>)
}

export default VerifyReferral;