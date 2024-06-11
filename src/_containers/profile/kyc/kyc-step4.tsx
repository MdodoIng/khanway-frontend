import {t} from 'i18next';
export type KYCStep4Props = {
    onSetStep: (step: number) => void;
    homeAddress: string;
    setHomeAddress: (address: string) => void;
}

const KYCStep4 = (props: KYCStep4Props) => {
    const getButtonState = () => {
        if (props.homeAddress.length === 0)
            return 'disabled';
    }

    return (
        <div className="kyc-area">
            <div className="kyc-titlebox">
                <h4 className="kyc-title">{t(`kyc.step4_title`)}</h4>
                <p>{t(`kyc.step4_des`)}</p>
            </div>

            <form action="#">
                <div className="row">
                    <div className="col-12 mb-3">
                        <label className="form-label">{t(`kyc.step4_addr`)}</label>

                        <div className="">
                            <input name="" type="text" className="form-control"
                                   onChange={(e) => props.setHomeAddress(e.target.value)}
                                   placeholder={t(`kyc.step4_addr_input`)}/>
                        </div>
                    </div>

                    <div className="description-txt">
                        <small>{t(`kyc.step4_addr_eg`)}</small>
                    </div>


                </div>
            </form>

            <div className="mt50 d-grid gap-2">
                <button type="button" className={`btn btn-primary mr-2 ${getButtonState()}`}
                        onClick={() => props.onSetStep(5)}>{t(`kyc.btn`)}
                </button>
            </div>
        </div>
    )
}

export default KYCStep4;