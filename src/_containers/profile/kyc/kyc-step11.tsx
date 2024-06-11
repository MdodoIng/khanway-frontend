import {t} from "i18next";
import {UserKyc} from "@graphql/graphql.ts";

export type KycStep11Props = {
    userKYC: UserKyc;
    setStep: (step: number) => void;
}

const KycStep11 = (props: KycStep11Props) => {
    return (
        <div className="kyc-area">
            <div className="kyc-titlebox">
                <h4 className="kyc-title">{t(`kyc.step11_title`)}</h4>
                <p></p>
            </div>

            <div className="req-completion">
                <img src="/images/kyc_reject_icon.png" alt="" className="suc-img"/>
                <p className="suc-txt">
                    {props.userKYC.rejectMessage}
                </p>
            </div>

            <div className="mt50 d-grid gap-2">
                <button type="button" className="btn btn-primary mr-2" onClick={() => props.setStep(0)}>{t(`kyc.step11_btn`)}</button>
            </div>
        </div>
    )
}

export default KycStep11;