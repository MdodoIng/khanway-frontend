import {Trans, useTranslation} from "react-i18next";
import {useOnStartExtraStackMutation, useOnUpdateSnsVerifyMutation} from "@graphql/graphql.ts";
import {useDispatch} from "react-redux";
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";
import Swal from "sweetalert2";
import {useEffect} from "react";

const CompleteContainer = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [updateSNSVerify] = useOnUpdateSnsVerifyMutation();
    const [startExtraStack] = useOnStartExtraStackMutation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onClick = async () => {
        dispatch(onToggleLoadingModalAction(true));
        try {
            const updateResponse = await updateSNSVerify();
            if (updateResponse.data?.onUpdateSNSVerify?.error) {
                dispatch(onToggleLoadingModalAction(false));
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: updateResponse.data?.onUpdateSNSVerify?.error.message ?? ""
                })
                return;
            }
            if (updateResponse.data?.onUpdateSNSVerify?.success) {
                const startResponse = await startExtraStack();
                if (startResponse.data?.onStartExtraStack?.error) {
                    dispatch(onToggleLoadingModalAction(false));
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: startResponse.data?.onStartExtraStack?.error.message ?? ""
                    })
                    return;
                }
                if (startResponse.data?.onStartExtraStack?.success) {
                    dispatch(onToggleLoadingModalAction(false));
                    Swal.fire({
                        icon: 'success',
                        title: t('sns_complete.success_title'),
                        text: t('sns_complete.success_text')
                    })
                }
            }
        } catch (e: any) {
            dispatch(onToggleLoadingModalAction(false));
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: e.message
            })
        }
        return;
    }

    return (
        <div id="main-wrapper" className="front main-bg">
            <div className="mission-area dk">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 title"><h2>{t('sns_complete.title')}</h2></div>

                        <div className="col-xl-12 auth-completed" style={{marginBottom: "100px"}}>

                            <div className="complated-txt">
                                <Trans i18nKey="sns_complete.completed_txt" components={[<br/>]}/>
                            </div>

                            <button id="getnfw" className="btn btn-grad w100" onClick={() => onClick()}>
                                {t('sns_complete.get_nfw')}
                            </button>

                            <ul className="txtbox">

                                <li className="txt">
                                    <Trans i18nKey="sns_complete.description_01" components={[<span></span>]}/>
                                </li>
                                <li className="txt">{t('sns_complete.description_02')}</li>
                                <li className="txt">{t('sns_complete.description_03')}</li>
                                <li className="txt">
                                    <Trans i18nKey="sns_complete.description_04" components={[<br/>]}/>
                                </li>
                            </ul>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompleteContainer;