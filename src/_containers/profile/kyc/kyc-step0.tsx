import {t} from "i18next";
export type KYCStep0Props = {
    onSetStep: (step: number) => void;
}
const KYCStep0 = (props: KYCStep0Props) => {
    return (
        <div className="kyc-area">
            <div className="kyc-titlebox">
                <h4 className="kyc-title">{t(`kyc.step0_title`)}</h4>
                <p>{t(`kyc.step0_des`)}</p>
            </div>
            <div className="mt-3 d-grid gap-2">
                <button onClick={() => props.onSetStep(1)} type="button"
                        className="btn btn-primary mr-2">{t(`kyc.step0_btn`)}</button>
            </div>
        </div>
    )
}

export default KYCStep0;