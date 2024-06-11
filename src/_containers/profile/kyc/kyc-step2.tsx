import Select from "react-select";
import {countryCodes} from "@helper/country.codes.tsx";
import {t} from "i18next";
import {selectStyles} from "@container/profile/kyc/kyc-step2.style.tsx";
import {useEffect, useRef, useState} from "react";
import {useGetEncryptDataLazyQuery} from "@graphql/graphql.ts";
import {onErrorSwal} from "@helper/swal.handler.tsx";
import {getErrorMessage} from "@helper/error.message.tsx";

export type KYCStep2Props = {
    onSetStep: (step: number) => void;
    country: any;
    setCountry: (setCountry: any) => void;
}
const KYCStep2 = (props: KYCStep2Props) => {
    const selectRef = useRef<any>();
    const formRef = useRef<HTMLFormElement>(null);

    const [getEncryptData] = useGetEncryptDataLazyQuery();
    const [intervalId, setIntervalId] = useState<number|undefined>();

    const onClickNext = () => {
        if (props.country.value === '+82')
            return onClickNiceAuth();
        else
            return props.onSetStep(2);
    }

    const onClickNiceAuth = () => getEncryptData().then(response => {
        if (!response.data)
            onErrorSwal(t('common.error'), getErrorMessage('NO_RESPONSE_DATA'), undefined, undefined, () => window.location.reload());
        else if (response.data.getEncryptData.error)
            onErrorSwal(t('common.error'), getErrorMessage(response.data.getEncryptData.error.code!), undefined, undefined, () => window.location.reload());
        else {
            if (formRef.current) {
                formRef.current.token_version_id.value = response.data.getEncryptData.tokenVersionId;
                formRef.current.enc_data.value = response.data.getEncryptData.encodeData;
                formRef.current.integrity_value.value = response.data.getEncryptData.integrity;
                window.open('https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb', 'popupChk', 'width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no');
                formRef.current.action = "https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb";
                formRef.current.target = "popupChk";
                const intervalId = window.setInterval(() => {
                    const auth = localStorage.getItem('nice_auth');
                    if (auth) {
                        window.clearInterval(intervalId);
                        props.onSetStep(6);
                    }
                }, 2000);
                setIntervalId(intervalId);
                formRef.current.submit();
            }
        }
    })

    useEffect(() => {
        return () => {
            if (intervalId) window.clearInterval(intervalId);
        }
    }, [intervalId]);

    useEffect(() => {
        if (navigator.language.includes('ko')) {
            props.setCountry(countryCodes[117]);
            selectRef.current.setValue(countryCodes[117]);
        }
    }, []);

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
                            ref={selectRef}
                            onChange={(e: any) => props.setCountry(e)}/>
                </div>
            </form>
            <form className={"visually-hidden"} ref={formRef}>
                <input type="hidden" id="m" name="m" value="service"/>
                <input type="hidden" id="token_version_id" name="token_version_id" value=""/>
                <input type="hidden" id="enc_data" name="enc_data" value=""/>
                <input type="hidden" id="integrity_value" name="integrity_value" value=""/>
            </form>

            <div className="mt50 d-grid gap-2">
                <button type="button" className={`btn btn-primary mr-2 ${props.country.value.length === 0 && 'disabled'}`}
                        disabled={props.country.value.length === 0}
                        onClick={() => onClickNext()}>{t(`kyc.btn`)}</button>
            </div>
        </div>
    )
}

export default KYCStep2;