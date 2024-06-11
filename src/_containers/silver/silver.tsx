import {
    TelegramVerifyType,
    useCreateSilverMutation,
    useGetUserSnsLazyQuery,
    UserSns,
} from "@graphql/graphql.ts";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import AOS from "aos";
import VerifyButton from "@component/verify.button.tsx";
import Loading from "@container/_common/loading.tsx";
import VerifyTelegramConnect from "@component/verify.telegram.connect.tsx";
import VerifyTelegramJoinComponent from "@component/verify.telegram.join.tsx";
import VerifyTwitterConnect from "@component/verify.twitter.connect.tsx";
import VerifyTwitterFollow from "@component/verify.twitter.follow.tsx";
import VerifyYoutube from "@component/verify.youtube.tsx";
import ReferralModal from "@container/modal/referral.modal.tsx";
import VerifyReferral, {VerifyReferralType} from "@component/verify.referral.tsx";
import {Trans, useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import {getErrorMessage} from "@helper/error.message.tsx";
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";
import VerifyReferralCopy from "@component/verify.referral.copy.tsx";
import {onErrorSwal, onSuccessSwal} from "@helper/swal.handler.tsx";
import VerifyKhanteumApp from "@component/verify.khanteum.app.tsx";

const SilverEventContainer = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((root: RootState) => root.AuthReducer);
    const [isShow, setIsShow] = useState<boolean>(false);
    const [userSNS, setUserSNS] = useState<UserSns|undefined>(undefined);
    const [getUserSNS] = useGetUserSnsLazyQuery();
    const [createSilver] = useCreateSilverMutation();

    AOS.init({
        duration: 1000,
        easing: 'ease-in-out-back'
    });

    const onGetUserSNS = () => getUserSNS().then(response => {
        if (!response.data || response.data.getUserSNS.error || !response.data.getUserSNS.userSNS)
            onErrorSwal(t('common.error'), response.data?.getUserSNS.error?.message ?? "Network error, please try again later", undefined, undefined, () => navigate('/'));
        else
            setUserSNS(response.data.getUserSNS.userSNS);
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
        return !userSNS.isXFollowed ||
            !userSNS.isXLinked ||
            !userSNS.isTelegramGroupJoined ||
            !userSNS.isTelegramChannelJoined ||
            !userSNS.telegramUserId ||
            !userSNS.referralVerifyCount ||
            userSNS.referralVerifyCount < 3 ||
            user?.isSilverEggIssued ||
            !userSNS.isYoutubeSubscribed;

    }

    const onClickNext = () => {
        if (getNextButtonDisabled())
            return;
        dispatch(onToggleLoadingModalAction(true));
        createSilver().then(response => {
            dispatch(onToggleLoadingModalAction(false));
            if (!response.data)
                onErrorSwal(t('common.error'), getErrorMessage('NO_RESPONSE_DATA'));
            else if (response.data.createSilver.error)
                onErrorSwal(t('common.error'), getErrorMessage(response.data.createSilver.error.code!));
            else
                onSuccessSwal(t('common.success'), t('silver_event.completed_txt'), undefined, undefined, () => navigate('/profile/nfw'));
            return;
        })
    }

    if (!userSNS)
        return <Loading/>

    return (
        <div className="rewards-event-wp">
            <div className="rewards-event-area">
                <div className="con-header" data-aos="fade-up">
                    <img src="/images/rewards-tit.png" alt="" className="tit-img" id="rewardImg"/>
                    <div className={"hd-txt"}>
                        <Trans i18nKey={'silver_event.title'}  components={[
                            <span className="bold fs22"></span>,
                            <span className={"bold fs24"}></span>,
                        ]}/>
                    </div>
                </div>
                <div className="mission-box" data-aos="fade-up">
                    <VerifyButton number={"01"} title={t('silver_event.step_02')}>
                        <VerifyTwitterConnect userSNS={userSNS} setUserSNS={setUserSNS}/>
                    </VerifyButton>

                    <VerifyButton number={"02"} title={<Trans i18nKey={"silver_event.step_03"} components={[<a
                        href={"https://twitter.com/intent/follow?screen_name=KHAN_ZZANG"} target={"_blank"}></a>]}/>}>
                        <VerifyTwitterFollow userSNS={userSNS} setUserSNS={setUserSNS}/>
                    </VerifyButton>

                    <VerifyButton number={"03"} title={t('silver_event.step_04')}>
                        <VerifyTelegramConnect userSNS={userSNS} setUserSNS={setUserSNS}/>
                    </VerifyButton>

                    <VerifyButton number={"04"} title={t('silver_event.step_05')}>
                        <VerifyTelegramJoinComponent setUserSNS={setUserSNS} userSNS={userSNS}
                                                     type={TelegramVerifyType.Channel}/>
                    </VerifyButton>

                    <VerifyButton number={"05"} title={t('silver_event.step_06')}>
                        <VerifyTelegramJoinComponent setUserSNS={setUserSNS} userSNS={userSNS}
                                                     type={TelegramVerifyType.Group}/>
                    </VerifyButton>

                    <VerifyButton number={"06"} title={t('silver_event.step_07')}>
                        <VerifyYoutube userSNS={userSNS} setUserSNS={setUserSNS}/>
                    </VerifyButton>

                    {
                        import.meta.env.MODE !== 'prod' ?
                        <>
                            <VerifyButton number={"07"} title={t('silver_event.step_09')}>
                                <VerifyKhanteumApp userSNS={userSNS}/>
                            </VerifyButton>

                            <VerifyButton number={"08"} title={t('silver_event.step_08')}>
                                <div className={""}>
                                    <VerifyReferral userSNS={userSNS} type={VerifyReferralType.AirDrop}
                                                    setIsShow={setIsShow}/>
                                    <VerifyReferralCopy userSNS={userSNS}/>
                                </div>
                                <ReferralModal isShow={isShow} setIsShow={setIsShow} setUserSNS={setUserSNS} userSNS={userSNS} type={VerifyReferralType.AirDrop}/>
                            </VerifyButton>
                        </>
                            :<VerifyButton number={"07"} title={t('silver_event.step_08')}>
                                <div className={""}>
                                    <VerifyReferral userSNS={userSNS} type={VerifyReferralType.AirDrop}
                                                    setIsShow={setIsShow}/>
                                    <VerifyReferralCopy userSNS={userSNS}/>
                                </div>
                                <ReferralModal isShow={isShow} setIsShow={setIsShow} setUserSNS={setUserSNS} userSNS={userSNS} type={VerifyReferralType.AirDrop}/>
                            </VerifyButton>
                    }

                    {/*<VerifyButton number={"07"} title={t('silver_event.step_08')}>*/}
                    {/*    <div className={""}>*/}
                    {/*        <VerifyReferral userSNS={userSNS} type={VerifyReferralType.AirDrop}*/}
                    {/*                        setIsShow={setIsShow}/>*/}
                    {/*        <VerifyReferralCopy userSNS={userSNS}/>*/}
                    {/*    </div>*/}
                    {/*    <ReferralModal isShow={isShow} setIsShow={setIsShow} setUserSNS={setUserSNS} userSNS={userSNS} type={VerifyReferralType.AirDrop}/>*/}
                    {/*</VerifyButton>*/}
                </div>
                {
                    user?.isSilverEggIssued!
                        ? <a className={`nextbtn disabled`}
                             href={"javascript:void(0);"}
                             data-aos="fade-up">{t('silver_event.completed_btn')}</a>
                        : <a className={`nextbtn ${getNextButtonDisabled() && 'disabled'}`}
                             href={"javascript:void(0);"} onClick={onClickNext}
                             data-aos="fade-up">{t('silver_event.submit_btn')}</a>
                }
            </div>
        </div>
    )
}

export default SilverEventContainer;