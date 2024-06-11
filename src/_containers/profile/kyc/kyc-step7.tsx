import {useState} from "react";
import {t} from "i18next";
import {UserKycDocumentType} from "@graphql/graphql.ts";
import {Trans} from "react-i18next";

export type KYCStep7Props = {
    onSetStep: (step: number) => void;
    documentFrontImage: string| undefined;
    documentBackImage: string| undefined;
    onUploadImage: (file: File, type: string) => void;
    documentType: UserKycDocumentType;
}

const KYCStep7 = (props: KYCStep7Props) => {
    const [filename, setFilename] = useState<string>();
    const [filename2, setFilename2] = useState<string>();
    const getButtonState = () => {
        if (!props.documentFrontImage || !props.documentBackImage)
            return 'disabled';
    }

    const onChange = (file: File, type: string) => {
        if (type === 'documentFrontImage') {
            setFilename(file.name);
            props.onUploadImage(file, type);
        } else {
            setFilename2(file.name);
            props.onUploadImage(file, type);
        }
    }

    const documentType = () => {
        switch (props.documentType) {
            case UserKycDocumentType.IdCard:
                return t(`kyc.step6_id`);
            case UserKycDocumentType.Passport:
                return t(`kyc.step6_passport`);
            case UserKycDocumentType.DriverLicense:
                return t(`kyc.step6_license`);
            case UserKycDocumentType.ResidencePermit:
                return t(`kyc.step6_permit`);
        }
    }

    return (
        <div className="kyc-area">
            <div className="kyc-titlebox">
                <h4 className="kyc-title">{t(`kyc.step7_title`)}</h4>
                <p></p>
            </div>


            <form className="row g-3">
                <p className="form-label"><Trans i18nKey={'kyc.step7_front'} values={{documentType: documentType()}}/></p>

                <div className="front-area" style={{marginBottom: "12px"}}>
                    <img src="/images/id-front.png" alt="" className="idcard-icon"/>

                    <div className="file-upload">
                        <label className={`input-file ${props.documentFrontImage && 'has_file'}`}>
                            <input type="file" onChange={e => onChange(e.target.files![0], 'documentFrontImage')}/>
                            {
                                props.documentFrontImage
                                    ? <span>{filename}</span>
                                    : <span><i className="fa-solid fa-camera"></i>{t(`kyc.step7_upload`)}</span>
                            }
                        </label>
                    </div>
                </div>


                <p className="form-label"><Trans i18nKey={'kyc.step7_back'} values={{documentType: documentType()}}/></p>
                <div className="front-area">
                    <img src="/images/id-back.png" alt="" className="idcard-icon"/>

                    <div className="file-upload">
                        <label className={`input-file ${props.documentFrontImage && 'has_file'}`}>
                            <input type="file" onChange={e => onChange(e.target.files![0], 'documentBackImage')}/>
                            {
                                props.documentBackImage
                                    ? <span>{filename2}</span>
                                    : <span><i className="fa-solid fa-camera"></i>{t(`kyc.step7_upload`)}</span>
                            }
                        </label>
                    </div>
                </div>

                <span style={{fontSize: "13px"}}>{t(`kyc.step7_des1`)} <br/> {t(`kyc.step7_des2`)}</span>


            </form>


            <div className="mt50 d-grid gap-2">
                <div className="mt50 d-grid gap-2">
                    <button type="button" className={`btn btn-primary mr-2 ${getButtonState()}`}
                            onClick={() => props.onSetStep(8)}>{t(`kyc.btn`)}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default KYCStep7;