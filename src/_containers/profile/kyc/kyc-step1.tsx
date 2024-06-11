import {t} from 'i18next';
export type KYCStep1Props = {
    onSetStep: (step: number) => void;
    firstName: string;
    lastName: string;
    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
}
const KYCStep1 = (props: KYCStep1Props) => {
    const getButtonState = () => {
        if (props.firstName.length === 0 || props.lastName.length === 0)
            return 'disabled';
    }

    return (
        <div className="kyc-area">
            <div className="kyc-titlebox">
                <h4 className="kyc-title">{t(`kyc.step1_title`)}</h4>
                <p>{t(`kyc.step1_des`)}</p>
            </div>

            <form action="#">
                <div className="row">
                    <div className="col-12 mb-3 rela"><label className="form-label">{t(`kyc.step1_surname`)}</label>
                        <input name="" type="text"
                               className="form-control"
                                 onChange={(e) => props.setFirstName(e.target.value)}
                               placeholder={t(`kyc.step1_surname_input`)}/>
                            {/*<span className="success-msg">success message</span>*/}
                    </div>

                    <div className="col-12 mb-3 rela"><label className="form-label">{t(`kyc.step1_given`)}</label>
                        <input name="" type="text"
                               className="form-control"
                               onChange={(e) => props.setLastName(e.target.value)}
                               placeholder={t(`kyc.step1_given_input`)}/>
                            {/*<span className="error-msg">필수 입력조건 노출</span>*/}
                    </div>
                </div>
            </form>

            <div className="mt50 d-grid gap-2">
                <button type="button" className={`btn btn-primary mr-2 ${getButtonState()}`} onClick={() => props.onSetStep(3)}>{t(`kyc.btn`)}</button>
            </div>
        </div>
    )
}

export default KYCStep1;