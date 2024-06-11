import {t} from 'i18next'
export type KYCStep5Props = {
    onSetStep: (step: number) => void;
    residentialAddress: string;
    setResidentialAddress: (address: string) => void;
    postalCode: string;
    setPostalCode: (postalCode: string) => void;
    city: string;
    setCity: (city: string) => void;
    country: any;
}

const KYCStep5 = (props: KYCStep5Props) => {
    const getButtonState = () => {
        if (props.residentialAddress.length === 0 || props.postalCode.length === 0 || props.city.length === 0)
            return 'disabled';
    }

    return (
        <div className="kyc-area">
            <div className="kyc-titlebox">
                <h4 className="kyc-title">{t(`kyc.step5_title`)}</h4>
                <p>T{t(`kyc.step5_des`)}</p>
            </div>

            <form action="#">
                <div className="row">
                    <div className="col-12 mb-3">
                        <label className="form-label">{t(`kyc.step5_residential`)}</label>

                        <div className="">
                            <input name="" type="text" className="form-control"
                                      onChange={(e) => props.setResidentialAddress(e.target.value)}
                                   placeholder={t(`kyc.step5_residential_input`)}/>
                        </div>
                    </div>

                    <div className="col-12 mb-3">
                        <label className="form-label">{t(`kyc.step5_postal`)}</label>

                        <div className="">
                            <input name="" type="text" className="form-control"
                                    onChange={(e) => props.setPostalCode(e.target.value)}
                                   placeholder={t(`kyc.step5_postal_input`)}/>
                        </div>
                    </div>

                    <div className="col-12 mb-3">
                        <label className="form-label">{t(`kyc.step5_city`)}</label>

                        <div className="">
                            <input name="" type="text" className="form-control"
                                    onChange={(e) => props.setCity(e.target.value)}
                                   placeholder={t(`kyc.step5_city_input`)}/>
                        </div>
                    </div>

                    <div className="col-12 mb-3">
                        <label className="form-label">{t(`kyc.step5_country`)}</label>
                        <div className="">
                            <input type="text" className="form-control disabled" defaultValue={props.country.label} disabled={true}/>
                        </div>
                    </div>


                </div>
            </form>

            <div className="mt50 d-grid gap-2">
                <button type="button" className={`btn btn-primary mr-2 ${getButtonState()}`}
                        onClick={() => props.onSetStep(6)}>{t(`kyc.btn`)}
                </button>
            </div>
        </div>
    )
}

export default KYCStep5;