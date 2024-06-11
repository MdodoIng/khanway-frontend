import {Link} from "react-router-dom";
import {t} from "i18next";

export type KYCStep9Props = {
    onSetStep: (step: number) => void

}
const KYCStep9 = () => {
    return (
        <div className="kyc-area">
            <div className="kyc-titlebox">
                <h4 className="kyc-title">{t(`kyc.step9_title`)}</h4>
                <p></p>
            </div>

            <div className="req-completion">
                <img src="/images/kyc-successful.svg" alt="" className="suc-img"/>
                    <p className="suc-txt">{t(`kyc.step9_des1`)}
                        <br /><br />
                        {t(`kyc.step9_des2`)}
                    </p>
            </div>

            <div className="mt50 d-grid gap-2">
                <Link type="button" className="btn btn-primary mr-2" to={"/profile"}>{t(`kyc.btn`)}
                </Link>
            </div>
        </div>
    )
}

export default KYCStep9