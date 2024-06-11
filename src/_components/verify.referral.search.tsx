import {Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {UserSns} from "@graphql/graphql.ts";
import VerifyReferralInput from "@component/verify.referral.input.tsx";
import {useTranslation} from "react-i18next";

export type VerifyReferralSearchProps = {
    isShow: boolean;
    userSNS: UserSns;
    referralList: Array<string>;
    setReferralList: (refferalList: Array<string>) => void;
}

const VerifyReferralSearch = (props: VerifyReferralSearchProps) => {
    const {t} = useTranslation();
    const {userSNS, referralList, setReferralList, isShow} = props;
    const [inputElement, setInputElement] = useState<Array<JSX.Element>>([]);
    const getDisablePlusButton = () => inputElement.length === 3 || 3 - userSNS.referralVerifyCount! <= referralList.length || referralList.length !== inputElement.length
    const onClickAddList = () => {
        if (getDisablePlusButton())
            return;
        else
            setInputElement([
                ...inputElement,
                <VerifyReferralInput key={inputElement.length} referralList={referralList} setReferralList={setReferralList}/>
            ]);
    }

    useEffect(() => {
        setInputElement([<VerifyReferralInput key={0} referralList={referralList} setReferralList={setReferralList}/>]);
    }, [isShow])

    return (
        <div className="md-con mb-5">
            <Typography variant="subtitle1" className={"mb-3"} style={{color: "#8D8D8D"}}>{t('referral_modal.subtitle_02')}</Typography>
            {inputElement}
            <button className={"plus-btn"}
                    disabled={getDisablePlusButton()}
                    onClick={() => onClickAddList()}>+
            </button>
        </div>
    )
}

export default VerifyReferralSearch;