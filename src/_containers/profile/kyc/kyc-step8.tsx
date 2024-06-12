import {useState} from "react";
import {t} from "i18next";

export type KYCStep8Props = {
    onSubmit: () => void;
    bankStatementImage: string|undefined;
    onUploadImage: (file: File, type: string) => void;
}
const KYCStep8 = (props: KYCStep8Props) => {
    const [filename, setFilename] = useState<string>();
    const getButtonState = () => {
        if (!props.bankStatementImage)
            return 'disabled';
    }

    const onChange = (file: File) => {
        setFilename(file.name);
        props.onUploadImage(file, 'bankStatementImage');
    }

    return (
        <div className="kyc-area">
            <div className="kyc-titlebox">
                <h4 className="kyc-title">{t(`kyc.step8_title`)} </h4>
                <p></p>
            </div>


            <form className="row g-3">
                <div className="front-area" style={{marginBottom: "12px"}}>

                    <div className="file-upload">
                        <label className="input-file">
                            <label className={`input-file ${filename && 'has_file'}`}>
                                <input type="file" onChange={e => onChange(e.target.files![0])}/>
                                {
                                    filename
                                        ? <span>{filename}</span>
                                        : <span><i className="fa-solid fa-camera"></i>{t(`kyc.step8_upload`)}</span>
                                }
                            </label>
                        </label>
                    </div>
                </div>

                <span style={{fontSize: "13px"}}>
                                {t(`kyc.step8_des1`)}<br/>
                    {t(`kyc.step8_des2`)}
                            </span>


            </form>


            <div className="mt50 d-grid gap-2">
                <button type="button" className={`btn btn-primary mr-2 ${getButtonState()}`}
                        onClick={() => props.onSubmit()}>{t(`kyc.btn`)}
                </button>
            </div>
        </div>
    )
}

export default KYCStep8;