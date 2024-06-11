import {useState} from "react";
import {t} from 'i18next'

export type KYCStep3Props = {
    onSetStep: (step: number) => void;
    dateOfBirth: string;
    setDateOfBirth: (date: string) => void;
}

const KYCStep3 = (props: KYCStep3Props) => {
    const [year, setYear] = useState<string>('');
    const [month, setMonth] = useState<string>('');
    const [day, setDay] = useState<string>('');

    const onChangeYear = (year: string) => {
        if (year.length > 4)
            return;
        setYear(year);
    }

    const onChangeMonth = (month: string) => {
        if (month.length > 2)
            return;
        setMonth(month);
    }

    const onChangeDay = (day: string) => {
        if (day.length > 2)
            return;
        setDay(day);
    }

    const getButtonState = () => {
        if (year.length === 0 ||
            year.length < 4 ||
            month.length === 0 ||
            day.length === 0)
            return 'disabled';
    }

    const onClickSubmit = () => {
        props.setDateOfBirth(`${year}-${month.length === 1 ? '0' + month : month}-${day.length === 1 ? '0' + day : day}`);
        props.onSetStep(4);
    }

    return (
        <div className="kyc-area">
            <div className="kyc-titlebox">
                <h4 className="kyc-title">{t(`kyc.step3_title`)}</h4>
                <p>{t(`kyc.step3_des`)}</p>
            </div>

            <form action="#">
                <div className="row">
                    <div className="col-12 mb-3">

                        <label className="form-label">{t(`kyc.step3_birth`)}</label>
                        <div className="birth-box">
                            <input name="" type="number" className="form-control" maxLength={4} value={year} placeholder="YYYY" onChange={(e) => onChangeYear(e.target.value)}/>
                            <input name="" type="number" className="form-control" maxLength={2} value={month} placeholder="MM" onChange={(e) => onChangeMonth(e.target.value)}/>
                            <input name="" type="number" className="form-control" maxLength={2} value={day} placeholder="DD" onChange={(e) => onChangeDay(e.target.value)}/>
                        </div>
                    </div>

                    <div className="description-txt">
                        <small>{t(`kyc.step3_date`)}</small>
                    </div>
                </div>
            </form>

            <div className="mt50 d-grid gap-2">
                <button type="button" className={`btn btn-primary mr-2 ${getButtonState()}`} onClick={() => onClickSubmit()}>{t(`kyc.btn`)}</button>
            </div>
        </div>
    )
}

export default KYCStep3;