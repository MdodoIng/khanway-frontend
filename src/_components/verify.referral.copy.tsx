import {UserSns} from "@graphql/graphql.ts";
import {getErrorMessage} from "@helper/error.message.tsx";
import {useTranslation} from "react-i18next";
import {onErrorSwal, onSuccessSwal} from "@helper/swal.handler.tsx";

export type VerifyReferralProps = {
    userSNS: UserSns;
}

const VerifyReferralCopy = (props: VerifyReferralProps) => {
    const { t } = useTranslation();
    const { userSNS } = props;

    const onClick = async () => {
        try {
            await navigator.clipboard.writeText(`${import.meta.env.VITE_APP_LOCAL_URL}/auth/signup?referralCode=${userSNS.referralCode!}`);
            onSuccessSwal(t('common.success'), t('common.clipboard_write_success'));
        }catch (e: any) {
            onErrorSwal('ERROR', getErrorMessage('CLIPBOARD_WRITE_ERROR'));
        }
        return;
    }

    return (
        <a href={"javascript:void(0);"}
           onClick={onClick}
           className={"ms-btn tw mb-2"}>{t('silver_event.step_08_copy_btn')}</a>
    )
}

export default VerifyReferralCopy;