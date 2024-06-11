import {useOpenGoldEggMutation, useOpenSilverEggMutation} from "@graphql/graphql.ts";
import {useDispatch} from "react-redux";
import {
    onSetEffectModalPropsAction,
    onToggleEffectModalAction,
    onToggleLoadingModalAction,
} from "@action/modal.action.tsx";
import Swal from "sweetalert2";
import {useTranslation} from "react-i18next";
export type ProfileNFWSilverItemProps = {
    id: number;
    type: string;
}
const ProfileNFWEventItem = (props: ProfileNFWSilverItemProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {id, type} = props;
    const [onOpenGoldEgg] = useOpenGoldEggMutation();
    const [onOpenSilverEgg] = useOpenSilverEggMutation();
    const onClickOpen = async () => {
        dispatch(onToggleLoadingModalAction(true));
        if (type === 'EVENT_SILVER')
            return await onOpenSilver();
        else if (type === 'EVENT_GOLD')
            return await onOpenGold();
        else
            return;
    }

    const onOpenSilver = () => onOpenSilverEgg({
        variables: {
            input: {
                eventSilverId: id,
            }
        }
    }).then(response => {
        dispatch(onToggleLoadingModalAction(false));
        if (response.data?.openSilverEgg.isSuccess === true) {
            dispatch(onSetEffectModalPropsAction({
                animationData: "/assets/roulette.json",
                nextAction: () => Swal.fire({
                    icon: 'success',
                    title: t(`profile_nfw_event.silver_success`),
                    text: t(`profile_nfw_event.success_msg`),
                }).then(() => {
                    dispatch(onSetEffectModalPropsAction(undefined));
                    window.location.reload();
                })}));
            dispatch(onToggleEffectModalAction(true));
        }
        else
            return Swal.fire({
                icon: 'error',
                title: t(`profile_nfw_event.silver_fail`),
                text: t(`profile_nfw_event.fail_msg`),
            }).then(() => {
                window.location.reload();
            });
        return ;
    }).catch(_error => {
        dispatch(onToggleLoadingModalAction(false));
        return Swal.fire({
            icon: 'error',
            title: t(`profile_nfw_event.silver_fail`),
            text: t(`profile_nfw_event.fail_msg`),
        }).then(() => {
            window.location.reload();
        });
    });

    const onOpenGold = () => onOpenGoldEgg({
        variables: {
            input: {
                eventGoldId: id,
            }
        }
    }).then(response => {
        dispatch(onToggleLoadingModalAction(false));
        if (response.data?.openGoldEgg.isSuccess === true){
            dispatch(onSetEffectModalPropsAction({
                animationData: "/assets/confetti.json",
                nextAction: () => Swal.fire({
                    icon: 'success',
                    title: t(`profile_nfw_event.gold_success`),
                    text: t(`profile_nfw_event.success_msg`),
                }).then(() => {
                    dispatch(onSetEffectModalPropsAction(undefined));
                    window.location.reload();
                })}));
            dispatch(onToggleEffectModalAction(true));
        } else
            return Swal.fire({
                icon: 'error',
                title: t(`profile_nfw_event.gold_fail`),
                text: t(`profile_nfw_event.fail_msg`),
            }).then(() => {
                window.location.reload();
            });
        return ;
    }).catch(_error => {
        dispatch(onToggleLoadingModalAction(false));
        return Swal.fire({
            icon: 'error',
            title: t(`profile_nfw_event.gold_fail`),
            text: t(`profile_nfw_event.fail_msg`),
        }).then(() => {
            window.location.reload();
        });
    });
    
    return (
        <div className="mynft-box">
            <div className="imgbox">
                <img src={type === 'EVENT_SILVER' ? `${import.meta.env.VITE_APP_S3_URL}/dev/silver-egg.gif` : `${import.meta.env.VITE_APP_S3_URL}/dev/gold-egg.gif`} alt="" className="nft-img"/>
            </div>
            <div className="txt-area">
                <p className="nft-name">{type === 'EVENT_SILVER' ? 'Silver Reward EGG' : 'Gold Reward EGG'}</p>
                <p className="nft-txt">{t(`profile_nfw_event.description`)}</p>
                <div className="detailbox">
                    <div className="btn btn-pointline w100" onClick={() => onClickOpen()}>{t(`profile_nfw_event.button`)}</div>
                </div>
            </div>
            <div className="counts"></div>
        </div>
    )
}

export default ProfileNFWEventItem;