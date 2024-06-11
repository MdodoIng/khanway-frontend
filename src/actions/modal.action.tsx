import {createAction} from "typesafe-actions";
import {EffectModalProps} from "@type/modal.type.tsx";

export const ON_TOGGLE_EMAIL_MODAL = "modal/ON_TOGGLE_EMAIL_MODAL" as const;
export const ON_TOGGLE_LOADING_MODAL = "modal/ON_TOGGLE_LOADING_MODAL" as const;
export const ON_TOGGLE_EFFECT_MODAL = "modal/ON_TOGGLE_EFFECT_MODAL" as const;
export const ON_SET_EFFECT_MODAL_PROPS = "modal/ON_SET_EFFECT_MODAL_PROPS" as const;

export const onToggleEmailModalAction = createAction(ON_TOGGLE_EMAIL_MODAL)<boolean>();
export const onToggleLoadingModalAction = createAction(ON_TOGGLE_LOADING_MODAL)<boolean>();
export const onToggleEffectModalAction = createAction(ON_TOGGLE_EFFECT_MODAL)<boolean>();
export const onSetEffectModalPropsAction = createAction(ON_SET_EFFECT_MODAL_PROPS)<EffectModalProps|undefined>();
