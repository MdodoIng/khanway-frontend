import {useTranslation} from "react-i18next";

export type KYCHeaderProps = {
    step: number;
}

const KYCHeader = (props: KYCHeaderProps) => {
    const {t} = useTranslation();
    const getProgressClass = (step: number) => {
        if (step > 8)
            return 'gauge ga09';
        else if (step === 0)
            return 'gauge';
        return `gauge ga0${step}`;
    }

    return (
        <>
            <div className="card-header px-0">
                <h4 className="card-title">{t(`kyc.title`)}</h4>
            </div>

            <div className="col-xxl-12 gauge-box">
                <div className={getProgressClass(props.step)}></div>
            </div>
        </>
    )
}

export default KYCHeader;