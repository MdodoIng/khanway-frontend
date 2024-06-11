import {ModalState, ModalAction} from "@type/modal.type";
import {createReducer} from "typesafe-actions";
import {
    ON_SET_EFFECT_MODAL_PROPS,
    ON_TOGGLE_EFFECT_MODAL,
    ON_TOGGLE_EMAIL_MODAL,
    ON_TOGGLE_LOADING_MODAL,
} from "@action/modal.action.tsx";

const initialState: ModalState = {
    isOpenEmailModal: false,
    isOpenLoadingModal: false,
    isOpenEffectModal: false,
    effectModalProps: undefined,
}

const ModalReducer = createReducer<ModalState, ModalAction>(initialState, {
    [ON_TOGGLE_EMAIL_MODAL]: (state, action) => ({
        ...state,
        isOpenEmailModal: action.payload,
    }),
    [ON_TOGGLE_LOADING_MODAL]: (state, action) => ({
        ...state,
        
        isOpenLoadingModal: action.payload,
    }),
    [ON_TOGGLE_EFFECT_MODAL]: (state, action) => ({
        ...state,
        isOpenEffectModal: action.payload,
    }),
    [ON_SET_EFFECT_MODAL_PROPS]: (state, action) => ({
        ...state,
        effectModalProps: action.payload
    }),
})

export default ModalReducer;