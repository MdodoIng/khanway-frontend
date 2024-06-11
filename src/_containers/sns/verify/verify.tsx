import {
    TelegramVerifyType,
    useGetExtraStackCountLazyQuery,
    useOnUpdateSnsVerifyMutation,
    UserSns
} from "@graphql/graphql.ts";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import AOS from "aos";
import VerifyButton from "@component/verify.button.tsx";
import Loading from "@container/_common/loading.tsx";
import VerifyTelegramConnect from "@component/verify.telegram.connect.tsx";
import VerifyTelegramJoinComponent from "@component/verify.telegram.join.tsx";
import VerifyYoutube from "@component/verify.youtube.tsx";
import ReferralModal from "@container/modal/referral.modal.tsx";
import VerifyReferral, {VerifyReferralType} from "@component/verify.referral.tsx";
import {Trans, useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import VerifyReferralCopy from "@component/verify.referral.copy.tsx";
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";
import {onErrorSwal, onSuccessSwal} from "@helper/swal.handler.tsx";
import {getUserSNS} from "../../../service/sns.service.tsx";
import {getErrorMessage} from "@helper/error.message.tsx";
import VerifyKhanteumApp from "@component/verify.khanteum.app.tsx";

const VerifyContainer = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((root: RootState) => root.AuthReducer);
    const [isShow, setIsShow] = useState<boolean>(false);
    const [userSNS, setUserSNS] = useState<UserSns|undefined>(undefined);
    const [updateSNSVerify] = useOnUpdateSnsVerifyMutation();
    const [getExtraStackCount] = useGetExtraStackCountLazyQuery();

    AOS.init({
        duration: 1000,
        easing: 'ease-in-out-back'
    });

    const onGetUserSNS = () => getUserSNS().then(response => {
        if (response.error || !response.userSNS)
            onErrorSwal(t('common.error'), response.error?.message ?? "Network error, please try again later", undefined, undefined, () => navigate('/'));
        else
            setUserSNS(response.userSNS);
        return;
    }).catch(_error => {
        onErrorSwal(t('common.error'), "Network error, please try again later", undefined, undefined, () => navigate('/'));
        return;
    })


    useEffect(() => {
        onGetUserSNS();
    }, []);

    useEffect(() => {
        if (!user)
            navigate('/')
    }, [user]);

    const getNextButtonDisabled = () => {
        if (!userSNS)
            return true;
        return !userSNS.isTelegramGroupJoined ||
            !userSNS.isTelegramChannelJoined ||
            !userSNS.telegramUserId ||
            !userSNS.referralVerifyCount ||
            userSNS.referralVerifyCount === 0 ||
            user?.isSNSVerified ||
            !userSNS.isYoutubeSubscribed;

    }

    const onClickNext = async () => {
        if (getNextButtonDisabled())
            return;
        dispatch(onToggleLoadingModalAction(true))
        const getExtraStackCountResponse = await getExtraStackCount();
        if (getExtraStackCountResponse.data?.getExtraStackCount?.error) {
            dispatch(onToggleLoadingModalAction(false));
            onErrorSwal(t('common.error'), getExtraStackCountResponse.data?.getExtraStackCount?.error.message ?? "Network error, please try again later");
            return;
        }
        if (getExtraStackCountResponse.data?.getExtraStackCount?.count !== 0) {
            dispatch(onToggleLoadingModalAction(false));
            navigate('/sns/complete');
        }
        else {
            const updateResponse = await updateSNSVerify();
            dispatch(onToggleLoadingModalAction(false));
            if (updateResponse.data?.onUpdateSNSVerify?.error) {
                onErrorSwal(t('common.error'), getErrorMessage(updateResponse.data?.onUpdateSNSVerify?.error.code!));
                return;
            }
            onSuccessSwal(t('sns_verify.auth_complete_title'), t('sns_verify.auth_complete_msg'), undefined, undefined,() => navigate('/profile', { replace: true }));
        }
        return;
    }

    if (!userSNS)
        return <Loading/>

    return (
        <div className="rewards-event-wp">
            <div className="rewards-event-area">
                <div className="con-header" data-aos="fade-up">
                    <img src="/images/authentication-tit.png" alt="" className="tit-img02"/>
                    <div className={"hd-txt"}>
                        <Trans i18nKey={'sns_verify.title'} components={[
                            <span className={"bold fs22"}></span>,
                            <span className={"bold fs24"}></span>,
                            <span className={"bold fs22"}></span>
                        ]}/>
                    </div>
                </div>
                <div className="mission-box" data-aos="fade-up">
                    <VerifyButton number={"01"} title={t('sns_verify.step_04')}>
                        <VerifyTelegramConnect userSNS={userSNS} setUserSNS={setUserSNS}/>
                    </VerifyButton>

                    <VerifyButton number={"02"} title={t('sns_verify.step_05')}>
                        <VerifyTelegramJoinComponent setUserSNS={setUserSNS} userSNS={userSNS}
                                                     type={TelegramVerifyType.Channel}/>
                    </VerifyButton>

                    <VerifyButton number={"03"} title={t('sns_verify.step_06')}>
                        <VerifyTelegramJoinComponent setUserSNS={setUserSNS} userSNS={userSNS}
                                                     type={TelegramVerifyType.Group}/>
                    </VerifyButton>

                    <VerifyButton number={"04"} title={t('sns_verify.step_07')}>
                        <VerifyYoutube userSNS={userSNS} setUserSNS={setUserSNS}/>
                    </VerifyButton>
                    {
                        import.meta.env.MODE !== 'prod' ?
                            <>
                                <VerifyButton number={"05"} title={t('sns_verify.step_09')}>
                                    <VerifyKhanteumApp userSNS={userSNS}/>
                                </VerifyButton>

                                <VerifyButton number={"06"} title={t('sns_verify.step_08')}>
                                    <VerifyReferral userSNS={userSNS} type={VerifyReferralType.Authentication}
                                                    setIsShow={setIsShow}/>
                                    <VerifyReferralCopy userSNS={userSNS}/>

                                    <ReferralModal isShow={isShow} setIsShow={setIsShow} setUserSNS={setUserSNS} userSNS={userSNS} type={VerifyReferralType.Authentication}/>
                                </VerifyButton>
                            </>
                            : <VerifyButton number={"05"} title={t('sns_verify.step_08')}>
                                <VerifyReferral userSNS={userSNS} type={VerifyReferralType.Authentication}
                                                setIsShow={setIsShow}/>
                                <VerifyReferralCopy userSNS={userSNS}/>

                                <ReferralModal isShow={isShow} setIsShow={setIsShow} setUserSNS={setUserSNS} userSNS={userSNS} type={VerifyReferralType.Authentication}/>
                            </VerifyButton>
                    }

                    {/*<VerifyButton number={"05"} title={t('sns_verify.step_08')}>*/}
                    {/*    <VerifyReferral userSNS={userSNS} type={VerifyReferralType.Authentication}*/}
                    {/*                    setIsShow={setIsShow}/>*/}
                    {/*    <VerifyReferralCopy userSNS={userSNS}/>*/}

                    {/*    <ReferralModal isShow={isShow} setIsShow={setIsShow} setUserSNS={setUserSNS} userSNS={userSNS} type={VerifyReferralType.Authentication}/>*/}
                    {/*</VerifyButton>*/}
                </div>
                {
                    user?.isSNSVerified
                        ? <a className={`nextbtn ${getNextButtonDisabled() && 'disabled'}`}
                             href={"javascript:void(0);"}
                             onClick={onClickNext}
                             data-aos="fade-up">{t('sns_verify.step_complete')}</a>
                        : <a className={`nextbtn ${getNextButtonDisabled() && 'disabled'}`}
                             href={"javascript:void(0);"}
                             onClick={onClickNext}
                             data-aos="fade-up">NEXT</a>
                }
            </div>
        </div>
    )
}

export default VerifyContainer;