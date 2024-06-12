import ProfileTitleComponent from "@container/profile/profile.title.tsx";
import {t} from "i18next";
import ProfileNavigationComponent from "@container/profile/profile.navigation.tsx";
import {useEffect, useState} from "react";
import KycHeader from "@container/profile/kyc/kyc.header.tsx";
import KYCStep0 from "@container/profile/kyc/kyc-step0.tsx";
import KYCStep1 from "@container/profile/kyc/kyc-step1.tsx";
import KYCStep2 from "@container/profile/kyc/kyc-step2.tsx";
import KYCStep3 from "@container/profile/kyc/kyc-step3.tsx";
import KYCStep4 from "@container/profile/kyc/kyc-step4.tsx";
import KYCStep5 from "@container/profile/kyc/kyc-step5.tsx";
import KYCStep6 from "@container/profile/kyc/kyc-step6.tsx";
import KYCStep7 from "@container/profile/kyc/kyc-step7.tsx";
import KYCStep8 from "@container/profile/kyc/kyc-step8.tsx";
import KYCStep9 from "@container/profile/kyc/kyc-step9.tsx";
import KYCStep10 from "@container/profile/kyc/kyc-step10.tsx";
import {countryCodes} from "@helper/country.codes.tsx";
import {
    useGetKycQuery,
    useOnRegisterKycMutation,
    useOnUploadKycImageMutation,
    UserKycDocumentType,
    UserKycStatus
} from "@graphql/graphql.ts";
import Swal from "sweetalert2";
import Loading from "@container/_common/loading.tsx";

const KYCContainer = () => {
    const [step, setStep] = useState<number>(0);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [country, setCountry] = useState<any>(countryCodes[0]);
    const [dateOfBirth, setDateOfBirth] = useState<string>('');
    const [homeAddress, setHomeAddress] = useState<string>('');
    const [residentialAddress, setResidentialAddress] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [documentIssueCountryCode, setDocumentIssueCountryCode] = useState<any>(countryCodes[0]); // 문서 발행 국가코드
    const [documentType, setDocumentType] = useState<UserKycDocumentType>(UserKycDocumentType.IdCard);
    const [documentFrontImage, setDocumentFrontImage] = useState<string>();
    const [documentBackImage, setDocumentBackImage] = useState<string>();
    const [bankStatementImage, setBankStatementImage] =useState<string>();
    const {data, loading} = useGetKycQuery()
    const [onRegisterUserKyc] = useOnRegisterKycMutation();
    const [onUploadKYCImage] = useOnUploadKycImageMutation();

    useEffect(() => {
        if (data?.getKYC.kyc?.status === UserKycStatus.Pending)
            setStep(9)
        else if (data?.getKYC.kyc?.status === UserKycStatus.Approved)
            setStep(10)
    }, [data])

    const onUploadImage = (file: any, type: string) => {
        onUploadKYCImage({
            variables: {
                input: {
                    image: file,
                }
            }
        }).then((response) => {
            if (response.data?.onUploadKYCImage.url) {
                if (type === 'documentFrontImage')
                    setDocumentFrontImage(response.data.onUploadKYCImage.url);
                else if (type === 'documentBackImage')
                    setDocumentBackImage(response.data.onUploadKYCImage.url);
                else
                    setBankStatementImage(response.data.onUploadKYCImage.url);
            }
        }).catch((_e) => {
            Swal.fire({
                icon: 'error',
                title: t(`kyc.err_title`),
                text: t(`kyc.err_des`),
            })
            return;
        })
    }


    const onSubmit = () => {
        onRegisterUserKyc({
            variables: {
                input: {
                    firstName: firstName,
                    lastName: lastName,
                    country: country.value,
                    dateOfBirth: dateOfBirth,
                    homeAddress: homeAddress,
                    residentialAddress: residentialAddress,
                    postalCode: postalCode,
                    city: city,
                    documentIssueCountryCode: documentIssueCountryCode.value,
                    documentType: documentType,
                    documentFrontImage: documentFrontImage!,
                    documentBackImage: documentBackImage,
                    bankStatementImage: bankStatementImage
                }
            }
        }).then((response) => {
            if (response.data?.onRegisterKYC.success)
                setStep(9);
            else
                Swal.fire({
                    icon: 'error',
                    title: t(`kyc.err_title`),
                    text: t(`kyc.err_des`),
                })
            return;
        }).catch((_e) => {
            Swal.fire({
                icon: 'error',
                title: t(`kyc.err_title`),
                text: t(`kyc.err_des`),
            })
            return;
        })
    }

    const getContent = (step: number) => {
        switch (step) {
            case 0:
                return <KYCStep0 onSetStep={setStep} />;
            case 1:
                return <KYCStep1 onSetStep={setStep} firstName={firstName} lastName={lastName} setFirstName={setFirstName} setLastName={setLastName} />;
            case 2:
                return <KYCStep2 onSetStep={setStep} setCountry={setCountry} country={country} />;
            case 3:
                return <KYCStep3 onSetStep={setStep} dateOfBirth={dateOfBirth} setDateOfBirth={setDateOfBirth} />;
            case 4:
                return <KYCStep4 onSetStep={setStep} homeAddress={homeAddress} setHomeAddress={setHomeAddress} />;
            case 5:
                return <KYCStep5 onSetStep={setStep} country={country}
                                 city={city} postalCode={postalCode} residentialAddress={residentialAddress}
                                 setCity={setCity} setResidentialAddress={setResidentialAddress} setPostalCode={setPostalCode} />;
            case 6:
                return <KYCStep6 onSetStep={setStep} documentIssueCountryCode={documentIssueCountryCode} setDocumentIssueCountryCode={setDocumentIssueCountryCode} documentType={documentType} setDocumentType={setDocumentType} />;
            case 7:
                return <KYCStep7 onSetStep={setStep} documentBackImage={documentBackImage} documentFrontImage={documentFrontImage} onUploadImage={onUploadImage} />;
            case 8:
                return <KYCStep8 onSubmit={onSubmit} bankStatementImage={bankStatementImage} onUploadImage={onUploadImage} />;
            case 9:
                return <KYCStep9  />;
            case 10:
                return <KYCStep10 />;

        }
    }

    if (loading)
        return <Loading/>

    return (
        <div id="main-wrapper" className="front">
            <ProfileTitleComponent path={t(`profile_wallet.title`)}/>
            <div className="profile-page">
                <div className="container">
                    <ProfileNavigationComponent/>
                    <div className="row">
                        <div className="col-xxl-12">
                            <KycHeader step={step}/>
                            {getContent(step)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KYCContainer;