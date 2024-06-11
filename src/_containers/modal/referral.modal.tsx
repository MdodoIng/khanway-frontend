import {Modal} from "react-bootstrap";
import {Close} from '@mui/icons-material';
import {IconButton} from "@mui/material";
import "./referral.css";
import {useEffect, useState} from "react";
import {UserSns} from "@graphql/graphql.ts";
import {useDispatch} from "react-redux";
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";
import VerifyReferralState from "@component/verify.referral.state.tsx";
import {VerifyReferralType} from "@component/verify.referral.tsx";
import {useTranslation} from "react-i18next";
import VerifyReferralList from "@component/verify.referral.list.tsx";
import VerifyReferralSearch from "@component/verify.referral.search.tsx";
import {onSetReferralUser} from "../../service/sns.service.tsx";
import {onErrorSwal} from "@helper/swal.handler.tsx";
import {getErrorMessage} from "@helper/error.message.tsx";

export type ReferralModalProps = {
    type: VerifyReferralType;

    isShow: boolean;
    setIsShow: (isShow: boolean) => void;

    userSNS: UserSns;
    setUserSNS: (userSNS: UserSns) => void;
}

const ReferralModal = (props: ReferralModalProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {isShow, setIsShow, setUserSNS, userSNS, type} = props;
    const [refferalList, setReferralList] = useState<Array<string>>([]);
    // const [onSetReferralUser] = useOnSetReferralUserMutation();

    const onClickRegister = () => {
        dispatch(onToggleLoadingModalAction(true));
        onSetReferralUser({
            emailList: refferalList,
        }).then(response => {
            dispatch(onToggleLoadingModalAction(false));
            if (!response)
                onErrorSwal(t('common.error'), getErrorMessage('NO_RESPONSE_DATA'));
            else if (response.error || !response.userSNS)
                onErrorSwal(t('common.error'), getErrorMessage(response.error?.code! ?? 'NO_RESPONSE_DATA'));
            else
                setUserSNS(response.userSNS);

            setIsShow(false);
        })
    }

    const getSubmitButtonDisabled = () => refferalList.length === 0 ||
        type === VerifyReferralType.Authentication && userSNS.referralVerifyCount === 1 ||
        type === VerifyReferralType.AirDrop && userSNS.referralVerifyCount === 3;

    useEffect(() => {
        setReferralList([]);
    }, [isShow]);

    return (
        <Modal show={isShow} centered={true} size={'xl'} aria-labelledby="contained-modal-title-vcenter" className={"p-0"}>
                <div className={`modal-wrap active`} style={{padding: 0}}>
                    <div className="modal-container" style={{paddingBottom: 0, paddingLeft: 0, paddingRight: 0}}>
                        <div className="md-body" style={{paddingRight: '30px', paddingLeft: '30px'}}>
                            <IconButton
                                aria-label="close"
                                size={"large"}
                                onClick={() => setIsShow(false)}
                                sx={{position: 'absolute', right: 8, top: 8,}}>
                                <Close/>
                            </IconButton>
                            <div className="md-title mb-4">{t('referral_modal.title')}</div>
                            <VerifyReferralState type={props.type} userSNS={userSNS}/>
                            <VerifyReferralList userSNS={userSNS}/>
                            <VerifyReferralSearch isShow={isShow} userSNS={userSNS} referralList={refferalList} setReferralList={setReferralList}/>
                        </div>

                        <div className="md-btn mt-5">
                            <button className="btn btn-primary w-100 accept-btn"
                                    onClick={() => onClickRegister()}
                                    disabled={getSubmitButtonDisabled()}>
                                {t('referral_modal.submit_btn')}
                            </button>
                        </div>
                    </div>
                </div>
        </Modal>
    )
}

export default ReferralModal;