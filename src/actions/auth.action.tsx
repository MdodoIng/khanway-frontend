import {createAction} from "typesafe-actions";
import {Maybe, User} from "@graphql/graphql.ts";

export const SET_USER = "auth/SET_USER" as const;
export const SET_REMEMBER_ME = "auth/SET_REMEMBER_ME" as const;

export const SET_CURRENT_PAGE = "auth/SET_CURRENT_PAGE" as const;
export const ON_CHANGE_COUNTRY = "auth-sms/ON_CHANGE_COUNTRY" as const;
export const ON_CHANGE_PHONE = "auth-sms/ON_CHANGE_PHONE" as const;
export const SET_EMAIL = 'signup/SET_EMAIL' as const;
export const SET_PHONE = 'signup/SET_PHONE' as const;
export const SET_EMAIL_VERIFIED = 'signup/SET_EMAIL_VERIFIED' as const;
export const SET_PHONE_VERIFIED = 'signup/SET_PHONE_VERIFIED' as const;
export const SET_TYPE = 'signup/SET_TYPE' as const;

export const SET_INITIAL_STATE = 'auth/SET_INITIAL_STATE' as const;

export const setEmailAction = createAction(SET_EMAIL)<string>();

export const setRememberMeAction = createAction(SET_REMEMBER_ME)<boolean>();

export const setCurrentPageAction = createAction(SET_CURRENT_PAGE)<string>();
export const setPhoneAction = createAction(SET_PHONE)<string>();
export const setEmailVerifiedAction = createAction(SET_EMAIL_VERIFIED)<boolean>();
export const setPhoneVerifiedAction = createAction(SET_PHONE_VERIFIED)<boolean>();
export const onChangeCountryAction = createAction(ON_CHANGE_COUNTRY)<string>();
export const onChangePhoneAction = createAction(ON_CHANGE_PHONE)<string>();
export const setUserAction = createAction(SET_USER)<Maybe<User>>();

export const setTypeAction = createAction(SET_TYPE)<string>();

export const setInitialStateAction = createAction(SET_INITIAL_STATE)<void>();