import * as actions from "@action/modal.action";
import {ActionType} from "typesafe-actions";

export type ModalState = {
    isOpenEmailModal: boolean;
    isOpenLoadingModal: boolean;
    isOpenEffectModal: boolean;
    effectModalProps?: EffectModalProps;
}

export type EffectModalProps = {
    nextAction: () => Promise<any> | void;
    animationData: string;
}

export type ModalAction = ActionType<typeof actions>;
