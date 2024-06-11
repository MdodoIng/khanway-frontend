import {Player} from "@lottiefiles/react-lottie-player";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import "./loading.modal.css";
import {onToggleEffectModalAction} from "@action/modal.action.tsx";
import {useEffect, useRef} from "react";

const EffectModal = () => {
    const playerRef = useRef<Player|any>();
    const dispatch = useDispatch();
    const {effectModalProps, isOpenEffectModal} = useSelector((root: RootState) => root.ModalReducer);

    const onCatchPause = (e: any) => {
        if (e === 'pause' && effectModalProps?.nextAction) {
            effectModalProps.nextAction();
            dispatch(onToggleEffectModalAction(false));
        }
    }

    useEffect(() => {
        if (isOpenEffectModal)
            playerRef.current.play();
    }, [isOpenEffectModal])

    if (!effectModalProps && !isOpenEffectModal)
        return null;

    return (
        // <div className={`loading ${isOpenRouletteModal && 'active'}`}>
        <div className={`loading active`}>
            <div className="lottie-absolute">
                <Player src={effectModalProps?.animationData ?? "/assets/roulette.json"} background={"transparent"}
                        speed={1}
                        onEvent={(e) => onCatchPause(e)}
                        style={{width: '200%', height: '200%'}}
                        ref={playerRef}
                        autoplay={true}/>
            </div>
        </div>
    )
}

export default EffectModal;