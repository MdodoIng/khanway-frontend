import Select from "react-select";
import {t} from "i18next";
import {countryCodes} from "@helper/country.codes.tsx";
import {selectStyles} from "@container/profile/kyc/kyc-step2.style.tsx";
import {UserKycDocumentType} from "@graphql/graphql.ts";
import {useEffect, useRef} from "react";

export type KYCStep6Props = {
    onSetStep: (step: number) => void;
    documentIssueCountryCode: any;
    setDocumentIssueCountryCode: (country: any) => void;
    setDocumentType: (type: UserKycDocumentType) => void;
    documentType: UserKycDocumentType;
}

const KYCStep6 = (props: KYCStep6Props) => {
    const selectRef = useRef<any>();

    useEffect(() => {
        if (navigator.language.includes('ko')) {
            props.setDocumentIssueCountryCode(countryCodes[117]);
            selectRef.current.setValue(countryCodes[117]);
        }
    }, []);


    console.log('Document Type: ', props.documentType)

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
                            ref={selectRef}
                            onChange={(e: any) => props.setDocumentIssueCountryCode(e)} />
                </div>

                <div className="col-12">
                    <p className="form-label">{t(`kyc.step6_type`)}</p>
                </div>

                <div className="select-type" >
                    <label className={`select-item ${props.documentType === UserKycDocumentType.IdCard && 'check'}`} onClick={() => props.setDocumentType(UserKycDocumentType.IdCard)}>
                        <input type="radio" name="optionsRadios" id="" value="ID Card"/>

                            <div className="left">
                                <div className="titlebox">
                                    <p className="title">{t(`kyc.step6_id`)}</p>
                                </div>

                            </div>
                            <div className="right check-icon"></div>
                    </label>


                    <label className={`select-item ${props.documentType === UserKycDocumentType.DriverLicense && 'check'}`} onClick={() => props.setDocumentType(UserKycDocumentType.DriverLicense)}>
                        <input type="radio" name="optionsRadios" id=""/>

                            <div className="left">
                                <div className="titlebox">
                                    <p className="title">{t(`kyc.step6_license`)}</p>
                                </div>
                            </div>
                            <div className="right check-icon"></div>
                    </label>

                    <label className={`select-item ${props.documentType === UserKycDocumentType.Passport && 'check'}`} onClick={() => props.setDocumentType(UserKycDocumentType.Passport)}>
                        <input type="radio" name="optionsRadios" id=""/>

                            <div className="left">
                                <div className="titlebox">
                                    <p className="title">{t(`kyc.step6_passport`)}</p>
                                </div>
                            </div>
                            <div className="right check-icon"></div>
                    </label>

                    <label className={`select-item ${props.documentType === UserKycDocumentType.ResidencePermit && 'check'}`} onClick={() => props.setDocumentType(UserKycDocumentType.ResidencePermit)}>
                        <input type="radio" name="optionsRadios" id=""/>

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
                <button type="button" className={`btn btn-primary mr-2 ${props.documentIssueCountryCode.value.length === 0 && 'disabled'}`}
                        disabled={props.documentIssueCountryCode.value.length === 0}
                        onClick={() => props.onSetStep(7)}>{t(`kyc.btn`)}
                </button>
            </div>
        </div>
    )
}

export default KYCStep6;