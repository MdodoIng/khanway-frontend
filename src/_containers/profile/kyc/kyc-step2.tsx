import Select from "react-select";
import {countryCodes} from "@helper/country.codes.tsx";
import {t} from "i18next";
import {selectStyles} from "@container/profile/kyc/kyc-step2.style.tsx";

export type KYCStep2Props = {
    onSetStep: (step: number) => void;
    country: any;
    setCountry: (setCountry: any) => void;
}
const KYCStep2 = (props: KYCStep2Props) => {
    const getButtonState = () => {
        if (props.country.value.length === 0)
            return 'disabled';
    }

    return (
        <div className="kyc-area">
            <div className="kyc-titlebox">
                <h4 className="kyc-title">{t(`kyc.step2_title`)}</h4>
                <p>{t(`kyc.step2_des`)}</p>
            </div>

            <form className="row g-3">
                <div className="col-12">
                    <label className="form-label">{t(`kyc.step2_nationality`)}</label>
                    <Select placeholder={t(`auth_sms.country_select`)} options={countryCodes}
                            styles={selectStyles}
                            onChange={(e: any) => props.setCountry(e)} />
                </div>
                <div className="description-txt">
                    <small>{t(`kyc.step_des2`)}</small>
                    <img src="/images/kor-icon.png" alt="" className="kor"/>
                    <b>South Korea(대한민국)</b>
                </div>

            </form>


            <div className="mt50 d-grid gap-2">
                <button type="button" className={`btn btn-primary mr-2 ${getButtonState()}`} onClick={() => props.onSetStep(3)}>{t(`kyc.btn`)}</button>
            </div>
        </div>
    )
}

export default KYCStep2;