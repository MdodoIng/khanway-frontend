import {Link} from "react-router-dom";
import {t} from "i18next";

export type KYCStep10Props = {
    onSetStep: (step: number) => void;
}

const KYCStep10 = () => {
    return (
        <div className="kyc-area">
            <div className="kyc-titlebox">
                <h4 className="kyc-title">{t(`kyc.step10_title`)}</h4>
                <p></p>
            </div>

            <div className="req-completion">
                <img src="/images/Successful.png" alt="" className="suc-img"/>
                    <p className="suc-txt">
                        {t(`kyc.step10_des1`)} <br/>
                        {t(`kyc.step10_des2`)}
                    </p>
            </div>

            <div className="mt50 d-grid gap-2">
                <Link type="button" className="btn btn-primary mr-2" to={'/profile'}>{t(`kyc.step10_btn`)}</Link>
            </div>
        </div>
    )
}

export default KYCStep10;