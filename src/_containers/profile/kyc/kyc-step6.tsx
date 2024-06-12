import Select from "react-select";
import {t} from "i18next";
import {countryCodes} from "@helper/country.codes.tsx";
import {selectStyles} from "@container/profile/kyc/kyc-step2.style.tsx";
import {UserKycDocumentType} from "@graphql/graphql.ts";

export type KYCStep6Props = {
    onSetStep: (step: number) => void;
    documentIssueCountryCode: any;
    setDocumentIssueCountryCode: (country: any) => void;
    setDocumentType: (type: UserKycDocumentType) => void;
    documentType: UserKycDocumentType;
}

const KYCStep6 = (props: KYCStep6Props) => {
    const getButtonState = () => {
        if (props.documentIssueCountryCode.value.length === 0)
            return 'disabled';
    }

    return (
        <div className="kyc-area">
            <div className="kyc-titlebox">
                <h4 className="kyc-title">{t(`kyc.step6_title`)}</h4>
                <p></p>
            </div>


            <form className="row g-3">
                <div className="col-12">
                    <label className="form-label">{t(`kyc.step6_country`)} </label>
                </div>
                <div className="description-txt">
                    <Select placeholder={t(`auth_sms.country_select`)} options={countryCodes}
                            styles={selectStyles}
                            onChange={(e: any) => props.setDocumentIssueCountryCode(e)} />
                </div>

                <div className="col-12">
                    <p className="form-label">{t(`kyc.step6_type`)}</p>
                </div>

                <div className="select-type">
                    <label className="select-item check">
                        <input type="radio" name="optionsRadios" id="" value="ID Card"
                               checked={props.documentType === UserKycDocumentType.IdCard}
                               onClick={() => props.setDocumentType(UserKycDocumentType.IdCard)}/>

                            <div className="left">
                                <div className="titlebox">
                                    <p className="title">{t(`kyc.step6_id`)}</p>
                                </div>

                            </div>
                            <div className="right check-icon"></div>
                    </label>


                    <label className="select-item">
                        <input type="radio" name="optionsRadios" id=""
                               checked={props.documentType === UserKycDocumentType.DriverLicense}
                               onClick={() => props.setDocumentType(UserKycDocumentType.DriverLicense)}/>

                            <div className="left">
                                <div className="titlebox">
                                    <p className="title">{t(`kyc.step6_license`)}</p>
                                </div>
                            </div>
                            <div className="right check-icon"></div>
                    </label>

                    <label className="select-item">
                        <input type="radio" name="optionsRadios" id=""
                               checked={props.documentType === UserKycDocumentType.Passport}
                               onClick={() => props.setDocumentType(UserKycDocumentType.Passport)}/>

                            <div className="left">
                                <div className="titlebox">
                                    <p className="title">{t(`kyc.step6_passport`)}</p>
                                </div>
                            </div>
                            <div className="right check-icon"></div>
                    </label>

                    <label className="select-item">
                        <input type="radio" name="optionsRadios" id=""
                               checked={props.documentType === UserKycDocumentType.ResidencePermit}
                               onClick={() => props.setDocumentType(UserKycDocumentType.ResidencePermit)}/>

                            <div className="left">
                                <div className="titlebox">
                                    <p className="title">{t(`kyc.step6_permit`)}</p>
                                </div>
                            </div>
                            <div className="right check-icon"></div>
                    </label>
                </div>

            </form>

            <div className="mt50 d-grid gap-2">
                <button type="button" className={`btn btn-primary mr-2 ${getButtonState()}`}
                        onClick={() => props.onSetStep(7)}>{t(`kyc.btn`)}
                </button>
            </div>
        </div>
    )
}

export default KYCStep6;